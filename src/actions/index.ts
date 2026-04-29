import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';

export const server = {
  contact: defineAction({
    input: z.object({
      name: z.string().min(2, 'กรุณากรอกชื่อของคุณ'),
      email: z.string().email('กรุณากรอกอีเมลที่ถูกต้อง'),
      phone: z.string().optional(),
      subject: z.string().min(5, 'กรุณากรอกหัวข้อ'),
      message: z.string().min(20, 'กรุณากรอกข้อความอย่างน้อย 20 ตัวอักษร'),
    }),
    handler: async ({ name, email, phone, subject, message }) => {
      // In production, you would send this to your email service
      // For now, we'll just log it
      console.log('Contact Form Submission:', {
        name,
        email,
        phone,
        subject,
        message,
        timestamp: new Date().toISOString(),
      });

      // Simulate sending email
      // await sendEmail({ to: 'nbiyes19@gmail.com', subject, body: message, from: email });

      return {
        success: true,
        message: 'ขอบคุณสำหรับข้อความ! เราจะติดต่อกลับโดยเร็วที่สุด',
      };
    },
  }),

  // Newsletter subscription action
  subscribeNewsletter: defineAction({
    input: z.object({
      email: z.string().email('กรุณากรอกอีเมลที่ถูกต้อง'),
      name: z.string().optional(),
    }),
    handler: async ({ email, name }) => {
      console.log('Newsletter Subscription:', {
        email,
        name,
        timestamp: new Date().toISOString(),
      });

      // Simulate adding to newsletter list
      // await addSubscriber({ email, name });

      return {
        success: true,
        message: 'ขอบคุณที่สมัครรับข่าวสาร!',
      };
    },
  }),
};
