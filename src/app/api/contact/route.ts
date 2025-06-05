import { NextResponse } from 'next/server';
import * as nodemailer from 'nodemailer';

// Create a transporter using Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'NWAOA02@gmail.com',
    pass: process.env.GMAIL_APP_PASSWORD, // This will be your Gmail app password
  },
});

export async function POST(request: Request) {
  try {
    const { name, email, phone, typeOfLoss, message } = await request.json();

    // Send email to NWAOA02@gmail.com
    await transporter.sendMail({
      from: 'NWAOA02@gmail.com',
      to: 'NWAOA02@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Type of Loss:</strong> ${typeOfLoss}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // Send auto-reply to the person who submitted the form
    await transporter.sendMail({
      from: 'NWAOA02@gmail.com',
      to: email,
      subject: 'Thank you for contacting Nationwide Adjusters',
      html: `
        <h2>Thank you for contacting Nationwide Adjusters</h2>
        <p>Dear ${name},</p>
        <p>Thank you for reaching out to Nationwide Adjusters. We have received your message and will get back to you as soon as possible.</p>
        <p>Here's a summary of the information you provided:</p>
        <ul>
          <li><strong>Type of Loss:</strong> ${typeOfLoss}</li>
          <li><strong>Phone:</strong> ${phone}</li>
        </ul>
        <p>If you need immediate assistance, please call us at 224-745-6559.</p>
        <p>Best regards,<br>Nationwide Adjusters Team</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 