import { useMutation } from "@tanstack/react-query";
import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export function useSendContactMessage() {
  return useMutation({
    mutationFn: async (data: ContactFormValues) => {
      contactFormSchema.parse(data);

      // In local dev, Netlify Forms isn't available — simulate success
      if (import.meta.env.DEV) {
        await new Promise((resolve) => setTimeout(resolve, 800));
        return { success: true };
      }

      const formData = new URLSearchParams();
      formData.append("form-name", "contact");
      formData.append("bot-field", "");
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("phone", data.phone ?? "");
      formData.append("message", data.message);

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      return { success: true };
    },
  });
}
