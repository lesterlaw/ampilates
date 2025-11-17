import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding admin user...");

  const adminEmail = "admin@admin.com";
  const adminPassword = "admin@123";

  // Create admin in database
  const admin = await prisma.admin.upsert({
    where: { email: adminEmail },
    update: {
      isActive: true,
    },
    create: {
      email: adminEmail,
      name: "Admin User",
      isActive: true,
    },
  });

  console.log(`✅ Admin user created/updated in database: ${admin.email}`);

  // Try to create user in Supabase Auth if service role key is available
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (supabaseUrl && supabaseServiceKey) {
    try {
      const response = await fetch(`${supabaseUrl}/auth/v1/admin/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${supabaseServiceKey}`,
          apikey: supabaseServiceKey,
        },
        body: JSON.stringify({
          email: adminEmail,
          password: adminPassword,
          email_confirm: true,
          user_metadata: {
            name: "Admin User",
          },
        }),
      });

      if (response.ok) {
        console.log(`✅ Admin user created in Supabase Auth: ${adminEmail}`);
        console.log(`   Password: ${adminPassword}`);
      } else {
        const error = await response.json();
        if (error.message?.includes("already registered")) {
          console.log(`ℹ️  User already exists in Supabase Auth: ${adminEmail}`);
          console.log(`   You can reset the password in Supabase Dashboard if needed.`);
        } else {
          console.log(`⚠️  Could not create user in Supabase Auth: ${error.message}`);
          console.log(`   Please create manually in Supabase Dashboard.`);
        }
      }
    } catch (error) {
      console.log(`⚠️  Could not create user in Supabase Auth automatically.`);
      console.log(`   Error: ${error instanceof Error ? error.message : "Unknown error"}`);
    }
  } else {
    console.log(`\n⚠️  SUPABASE_SERVICE_ROLE_KEY not found in .env`);
    console.log(`   Creating user manually in Supabase Dashboard:`);
    console.log(`   1. Go to Supabase Dashboard > Authentication > Users`);
    console.log(`   2. Click "Add User"`);
    console.log(`   3. Email: ${adminEmail}`);
    console.log(`   4. Password: ${adminPassword}`);
    console.log(`   5. Auto Confirm User: ON`);
  }

  console.log(`\n✅ Setup complete! You can now login at /admin/login`);
  console.log(`   Email: ${adminEmail}`);
  console.log(`   Password: ${adminPassword}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

