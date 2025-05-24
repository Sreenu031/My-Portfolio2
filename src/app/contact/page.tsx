"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PageTitle } from "@/components/page-title";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Send, Mail, Phone, MapPin } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: ContactFormValues) {
    // In a real app, you'd send this data to a backend.
    // For this portfolio, we'll just log it and show a toast.
    console.log("Contact form submitted:", data);
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
      variant: "default", 
    });
    form.reset(); // Reset form after submission
  }

  return (
    <div className="space-y-10">
      <PageTitle title="Get in Touch" subtitle="I'm always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out!" />
      
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <Card className="shadow-xl rounded-xl border-border hover:border-primary/50 transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Contact Information</CardTitle>
            <CardDescription>Here are a few ways to reach me directly.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-3">
              <Mail className="h-6 w-6 text-primary" />
              <div>
                <p className="font-semibold">Email</p>
                <a href="mailto:syam.geddam@example.com" className="text-muted-foreground hover:text-primary transition-colors">
                  syam.geddam@example.com {/* Placeholder Email */}
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-6 w-6 text-primary" />
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-muted-foreground">(123) 456-7890</p> {/* Placeholder Phone */}
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-6 w-6 text-primary" />
              <div>
                <p className="font-semibold">Location</p>
                <p className="text-muted-foreground">Tech City, USA</p> {/* Placeholder Location */}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-xl rounded-xl border-border hover:border-primary/50 transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Send Me a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} className="bg-background/70 focus:bg-background" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your.email@example.com" {...field} className="bg-background/70 focus:bg-background" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell me about your project or inquiry..."
                          rows={5}
                          {...field}
                          className="bg-background/70 focus:bg-background"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full rounded-full shadow-lg hover:shadow-primary/40 transition-all duration-300 transform hover:scale-105" disabled={form.formState.isSubmitting}>
                  <Send className="mr-2 h-5 w-5" />
                  {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
