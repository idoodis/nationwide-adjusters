import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.error('Missing email credentials');
      return NextResponse.json(
        { error: 'Email configuration is missing' },
        { status: 500 }
      );
    }

    // Create a transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email to be sent to the company
    const companyMailOptions = {
      from: `"Nationwide Adjusters Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Auto-reply email to the customer
    const customerMailOptions = {
      from: `"Nationwide Adjusters of America" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Thank you for contacting Nationwide Adjusters of America',
      html: `
        <h2>Thank you for contacting us!</h2>
        <p>Dear ${name},</p>
        <p>We have received your message and will get back to you as soon as possible.</p>
        <p>Here's a copy of your message:</p>
        <p>${message}</p>
        <br>
        <p>Best regards,</p>
        <p>Nationwide Adjusters of America</p>
        <p>Phone: (224) 745-6559</p>
        <p>Address: 25 S Grove Ave, Elgin, IL 60120</p>
      `,
    };

    // Send both emails
    await transporter.sendMail(companyMailOptions);
    await transporter.sendMail(customerMailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 