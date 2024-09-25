'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { set, useForm } from 'react-hook-form';
import { z } from 'zod';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import emailjs from '@emailjs/browser';

const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: 'Name must be at least 2 characters long',
    })
    .max(50, {
      message: 'Name must be less than 50 characters long',
    }),
  email: z.string().email({ message: 'Invalid email address' }),
  phone: z.string().regex(/^\d{10}$/, {
    message: 'Phone number must be 10 digits long',
  }),
  message: z
    .string()
    .min(10, {
      message: 'Message must be at least 10 characters long',
    })
    .max(500, {
      message: 'Message must be less than 500 characters long',
    }),
});

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMessageSent, setIsMessageSent] = useState<string | null>(null);
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  // Submit form data to emailjs service
  // https://www.emailjs.com/docs/examples/reactjs/
  function onSubmit(data: z.infer<typeof contactFormSchema>) {
    setIsSubmitting(true);
    setIsMessageSent(null); // Reset message sent state

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        data,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      )
      .then(
        (result) => {
          setIsMessageSent('Message sent successfully!');
          form.reset();
          setIsSubmitting(false);

          // Reset message sent state after 2 seconds
          setTimeout(() => {
            setIsMessageSent(null);
          }, 2000);
        },
        (error) => {
          setIsMessageSent('Message failed to send. Please try again.');
          setIsSubmitting(false);

          // Reset message sent state after 2 seconds
          setTimeout(() => {
            setIsMessageSent(null);
          }, 2000);
        }
      );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="space-y-1.5">
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="space-y-1.5">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="space-y-1.5">
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input placeholder="Phone number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="space-y-1.5">
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Leave us a message." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center gap-5">
          <Button type="submit" className="rounded-full">
            {isSubmitting ? 'Sending...' : 'Send message'}
          </Button>
          {isMessageSent && (
            <p className="text-sm text-muted-foreground">{isMessageSent}</p>
          )}
        </div>
      </form>
    </Form>
  );
}
