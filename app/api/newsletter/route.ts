import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: "noreply.sleek@gmail.com",
        pass: "jbumtdmvixlkwiyt",
      },
      secure: true,
    });

    const mailData = {
      from: "am Pilates <noreply.sleek@gmail.com>",
      to: "marketing@amorefitness.com",
      subject: `Newsletter Subscription: ${email}`,
      text: `New newsletter subscription from: ${email}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #80978b;">New Newsletter Subscription</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p style="color: #656565; margin-top: 20px;">This subscriber has signed up for the am Pilates newsletter.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailData);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      { error: "Failed to subscribe" },
      { status: 500 }
    );
  }
}
