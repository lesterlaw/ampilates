import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, location, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !location || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Map location to email address
    const getRecipientEmail = (location: string): string => {
      const locationLower = location.toLowerCase();
      if (locationLower.includes("punggol")) {
        return "pc@ampilates.sg";
      }
      if (locationLower.includes("jurong")) {
        return "hello@ampilates.sg";
      }
      // Default to Jurong if location doesn't match
      return "hello@ampilates.sg";
    };

    const recipientEmail = getRecipientEmail(location);

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
      to: recipientEmail,
      bcc: "lesterlaw7798@gmail.com",
      subject: `Contact Form: ${subject}`,
      text: `
New contact form submission from am Pilates website:

Name: ${name}
Email: ${email}
Location: ${location}
Subject: ${subject}

Message:
${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
          <h2 style="color: #80978b; margin-bottom: 20px;">New Contact Form Submission</h2>
          
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
            <p style="margin: 8px 0;"><strong style="color: #232323;">Name:</strong> <span style="color: #656565;">${name}</span></p>
            <p style="margin: 8px 0;"><strong style="color: #232323;">Email:</strong> <span style="color: #656565;">${email}</span></p>
            <p style="margin: 8px 0;"><strong style="color: #232323;">Location:</strong> <span style="color: #656565;">${location}</span></p>
            <p style="margin: 8px 0;"><strong style="color: #232323;">Subject:</strong> <span style="color: #656565;">${subject}</span></p>
          </div>
          
          <div style="margin-top: 20px;">
            <h3 style="color: #232323; margin-bottom: 10px;">Message:</h3>
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; color: #656565; white-space: pre-wrap;">${message}</div>
          </div>
          
          <p style="color: #656565; margin-top: 20px; font-size: 12px;">
            This email was sent from the am Pilates contact form.
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailData);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
