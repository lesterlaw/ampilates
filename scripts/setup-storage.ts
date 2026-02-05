import { createClient } from "@supabase/supabase-js";
import "dotenv/config";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceRoleKey) {
  console.error("❌ Missing environment variables:");
  if (!supabaseUrl) console.error("   - NEXT_PUBLIC_SUPABASE_URL");
  if (!supabaseServiceRoleKey) console.error("   - SUPABASE_SERVICE_ROLE_KEY");
  console.error("\nAdd SUPABASE_SERVICE_ROLE_KEY to your .env file.");
  console.error("Find it in Supabase Dashboard > Project Settings > API > service_role key");
  process.exit(1);
}

// Create admin client with service role key
const supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});

const BUCKET_NAME = "promotions";

async function setupStorage() {
  console.log("🚀 Setting up Supabase Storage...\n");

  // Step 1: Check if bucket exists
  console.log(`📦 Checking if bucket "${BUCKET_NAME}" exists...`);
  const { data: buckets, error: listError } = await supabase.storage.listBuckets();

  if (listError) {
    console.error("❌ Failed to list buckets:", listError.message);
    process.exit(1);
  }

  const bucketExists = buckets?.some((b) => b.name === BUCKET_NAME);

  if (bucketExists) {
    console.log(`✅ Bucket "${BUCKET_NAME}" already exists.\n`);
  } else {
    // Step 2: Create bucket
    console.log(`📦 Creating bucket "${BUCKET_NAME}"...`);
    const { error: createError } = await supabase.storage.createBucket(BUCKET_NAME, {
      public: true,
      fileSizeLimit: 5 * 1024 * 1024, // 5MB
      allowedMimeTypes: ["image/png", "image/jpeg", "image/jpg", "image/webp", "image/gif"],
    });

    if (createError) {
      console.error("❌ Failed to create bucket:", createError.message);
      process.exit(1);
    }
    console.log(`✅ Bucket "${BUCKET_NAME}" created successfully.\n`);
  }

  // Step 3: Set up RLS policies using SQL
  console.log("🔐 Setting up storage policies...\n");

  // Policy: Allow authenticated users to upload
  const insertPolicy = `
    CREATE POLICY IF NOT EXISTS "Allow authenticated uploads"
    ON storage.objects
    FOR INSERT
    TO authenticated
    WITH CHECK (bucket_id = '${BUCKET_NAME}');
  `;

  // Policy: Allow public read access
  const selectPolicy = `
    CREATE POLICY IF NOT EXISTS "Allow public read"
    ON storage.objects
    FOR SELECT
    TO public
    USING (bucket_id = '${BUCKET_NAME}');
  `;

  // Policy: Allow authenticated users to update their uploads
  const updatePolicy = `
    CREATE POLICY IF NOT EXISTS "Allow authenticated updates"
    ON storage.objects
    FOR UPDATE
    TO authenticated
    USING (bucket_id = '${BUCKET_NAME}');
  `;

  // Policy: Allow authenticated users to delete
  const deletePolicy = `
    CREATE POLICY IF NOT EXISTS "Allow authenticated deletes"
    ON storage.objects
    FOR DELETE
    TO authenticated
    USING (bucket_id = '${BUCKET_NAME}');
  `;

  // Execute policies
  const policies = [
    { name: "Allow authenticated uploads (INSERT)", sql: insertPolicy },
    { name: "Allow public read (SELECT)", sql: selectPolicy },
    { name: "Allow authenticated updates (UPDATE)", sql: updatePolicy },
    { name: "Allow authenticated deletes (DELETE)", sql: deletePolicy },
  ];

  for (const policy of policies) {
    const { error } = await supabase.rpc("exec_sql", { sql: policy.sql }).single();
    
    if (error) {
      // Policy might already exist or exec_sql might not be available
      if (error.message.includes("already exists") || error.message.includes("duplicate")) {
        console.log(`   ✅ ${policy.name} - already exists`);
      } else if (error.message.includes("exec_sql")) {
        console.log(`   ⚠️  Cannot create policies via script. Please create them manually in Supabase Dashboard.`);
        console.log(`\n📋 Manual Policy Setup Instructions:`);
        console.log(`   1. Go to Supabase Dashboard > Storage > ${BUCKET_NAME} > Policies`);
        console.log(`   2. Add the following policies:\n`);
        console.log(`   INSERT (authenticated): bucket_id = '${BUCKET_NAME}'`);
        console.log(`   SELECT (public): bucket_id = '${BUCKET_NAME}'`);
        console.log(`   UPDATE (authenticated): bucket_id = '${BUCKET_NAME}'`);
        console.log(`   DELETE (authenticated): bucket_id = '${BUCKET_NAME}'`);
        break;
      } else {
        console.log(`   ⚠️  ${policy.name} - ${error.message}`);
      }
    } else {
      console.log(`   ✅ ${policy.name} - created`);
    }
  }

  console.log("\n✨ Storage setup complete!");
  console.log(`\n📁 Bucket URL: ${supabaseUrl}/storage/v1/object/public/${BUCKET_NAME}/`);
}

setupStorage().catch((error) => {
  console.error("❌ Setup failed:", error);
  process.exit(1);
});
