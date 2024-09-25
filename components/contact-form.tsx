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
import toast from 'react-hot-toast';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

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

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        data,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      )
      .then(
        (result) => {
          toast.success('Message sent successfully!');
          form.reset();
          setIsSubmitting(false);

          // After sending the message, send the confirmation email
          const confirmationData = {
            name: data.name,
            email: data.email,
          };

          emailjs
            .send(
              process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
              process.env.NEXT_PUBLIC_EMAILJS_CONFIRMATION_TEMPLATE_ID!,
              confirmationData,
              process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
            )
            .then(
              (result) => {
                toast.success('Confirmation email sent successfully!');
              },
              (error) => {
                toast.error(
                  'Confirmation email failed to send. Please try again.'
                );
              }
            );
        },
        (error) => {
          toast.error('Message failed to send. Please try again.');
          setIsSubmitting(false);
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
        <Button type="submit" className="rounded-full">
          {isSubmitting ? 'Sending...' : 'Send message'}
        </Button>
      </form>
    </Form>
  );
}
