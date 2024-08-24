'use client';

import { z } from 'zod';

const contactFormSchema = z.object({
  cname: z.string().min(1, 'Name is required').max(50, 'Name is too long'),
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  phone: z
    .string()
    .min(10, 'Phone number must be at least 10 digits')
    .regex(/^\d{10}$/, 'Phone number is invalid'),
  message: z.string().min(10, 'Message is must be at least 10 characters.').max(500, 'Message is too long'),
  subscribe_be36b12536b6_46315: z.string(),
});

export default contactFormSchema;
