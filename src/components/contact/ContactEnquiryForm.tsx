"use client";

import { Check, Loader2 } from "lucide-react";
import { FormEvent, useState } from "react";
import { Button } from "@/components/design-system/buttons/Button";
import { FieldError } from "@/components/design-system/forms/FieldError";
import { Input } from "@/components/design-system/forms/Input";
import { Label } from "@/components/design-system/forms/Label";
import {
  CONTACT_ENQUIRY_TYPES,
  CONTACT_HONEYPOT_FIELD,
  type ContactEnquiryType,
} from "@/lib/contact/enquiry-rules";

type FormErrors = {
  full_name?: string;
  email?: string;
  enquiry_type?: string;
  message?: string;
  submit?: string;
};

export interface ContactEnquiryFormProps {
  defaultEnquiryType?: ContactEnquiryType | "";
}

function validateEmail(value: string): string | undefined {
  const trimmed = value.trim();
  if (!trimmed) return "Please enter your email address.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
    return "Please enter a valid email address.";
  }
  return undefined;
}

export function ContactEnquiryForm({ defaultEnquiryType = "" }: ContactEnquiryFormProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [enquiryType, setEnquiryType] = useState<ContactEnquiryType | "">(
    defaultEnquiryType,
  );
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [websiteOrSocial, setWebsiteOrSocial] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  function validateForm(): FormErrors {
    const next: FormErrors = {};
    const name = fullName.trim();
    if (!name || name.length < 2) {
      next.full_name = "Please enter your full name.";
    }
    const emailError = validateEmail(email);
    if (emailError) next.email = emailError;
    if (!enquiryType) {
      next.enquiry_type = "Please select an enquiry type.";
    }
    const msg = message.trim();
    if (!msg || msg.length < 10) {
      next.message = "Please enter a message (at least 10 characters).";
    }
    return next;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting || isSuccess) return;

    const nextErrors = validateForm();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: fullName.trim(),
          email: email.trim(),
          enquiry_type: enquiryType,
          message: message.trim(),
          company: company.trim() || undefined,
          phone: phone.trim() || undefined,
          website_or_social: websiteOrSocial.trim() || undefined,
          [CONTACT_HONEYPOT_FIELD]: honeypot,
        }),
      });

      let result: { success?: boolean } = {};
      try {
        result = await response.json();
      } catch {
        setErrors({
          submit: "Something went wrong while sending your message. Please try again.",
        });
        return;
      }

      if (!response.ok || result.success !== true) {
        setErrors({
          submit: "Something went wrong while sending your message. Please try again.",
        });
        return;
      }

      setIsSuccess(true);
      setFullName("");
      setEmail("");
      setEnquiryType(defaultEnquiryType);
      setMessage("");
      setCompany("");
      setPhone("");
      setWebsiteOrSocial("");
    } catch {
      setErrors({
        submit: "Unable to connect. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const locked = isSubmitting || isSuccess;

  if (isSuccess) {
    return (
      <div
        className="gj-glass rounded-[var(--gj-radius-xl)] p-8 text-center sm:p-10"
        role="status"
        aria-live="polite"
      >
        <Check className="mx-auto h-10 w-10 text-gj-gold" aria-hidden="true" />
        <p className="gj-heading-md mt-4 text-gj-foreground">Message received</p>
        <p className="gj-body mt-3 text-gj-foreground-muted">
          Thanks for reaching out. Your message has been received and I&apos;ll get back
          to you soon.
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-8"
          onClick={() => setIsSuccess(false)}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="relative gj-glass space-y-6 rounded-[var(--gj-radius-xl)] p-6 sm:p-8"
    >
      <div
        className="absolute left-[-9999px] h-px w-px overflow-hidden"
        aria-hidden="true"
      >
        <label htmlFor="contact-honeypot">Company website</label>
        <input
          id="contact-honeypot"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <Label htmlFor="contact-full-name">Full name</Label>
          <Input
            id="contact-full-name"
            type="text"
            autoComplete="name"
            disabled={locked}
            value={fullName}
            invalid={!!errors.full_name}
            aria-describedby={errors.full_name ? "contact-full-name-error" : undefined}
            className="mt-2"
            onChange={(e) => {
              setFullName(e.target.value);
              if (errors.full_name) setErrors((p) => ({ ...p, full_name: undefined }));
            }}
          />
          {errors.full_name && (
            <FieldError id="contact-full-name-error" message={errors.full_name} />
          )}
        </div>

        <div>
          <Label htmlFor="contact-email">Email address</Label>
          <Input
            id="contact-email"
            type="email"
            autoComplete="email"
            disabled={locked}
            value={email}
            invalid={!!errors.email}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            className="mt-2"
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email) setErrors((p) => ({ ...p, email: undefined }));
            }}
          />
          {errors.email && <FieldError id="contact-email-error" message={errors.email} />}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <Label htmlFor="contact-company">Company / brand (optional)</Label>
          <Input
            id="contact-company"
            type="text"
            autoComplete="organization"
            disabled={locked}
            value={company}
            className="mt-2"
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="contact-phone">Phone (optional)</Label>
          <Input
            id="contact-phone"
            type="tel"
            autoComplete="tel"
            disabled={locked}
            value={phone}
            className="mt-2"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>

      <div>
        <Label htmlFor="contact-enquiry-type">Enquiry type</Label>
        <select
          id="contact-enquiry-type"
          disabled={locked}
          value={enquiryType}
          aria-invalid={!!errors.enquiry_type}
          aria-describedby={errors.enquiry_type ? "contact-enquiry-type-error" : undefined}
          className="gj-focus-ring gj-transition mt-2 w-full rounded-[var(--gj-radius-lg)] border border-gj-border-subtle bg-gj-background-soft px-4 py-3.5 text-gj-foreground"
          onChange={(e) => {
            setEnquiryType(e.target.value as ContactEnquiryType | "");
            if (errors.enquiry_type) {
              setErrors((p) => ({ ...p, enquiry_type: undefined }));
            }
          }}
        >
          <option value="">Select an enquiry type</option>
          {CONTACT_ENQUIRY_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        {errors.enquiry_type && (
          <FieldError id="contact-enquiry-type-error" message={errors.enquiry_type} />
        )}
      </div>

      <div>
        <Label htmlFor="contact-website">Website / social link (optional)</Label>
        <Input
          id="contact-website"
          type="url"
          disabled={locked}
          placeholder="https://"
          value={websiteOrSocial}
          className="mt-2"
          onChange={(e) => setWebsiteOrSocial(e.target.value)}
        />
      </div>

      <div>
        <Label htmlFor="contact-message">Message</Label>
        <textarea
          id="contact-message"
          rows={5}
          disabled={locked}
          value={message}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          className="gj-focus-ring gj-transition mt-2 w-full resize-y rounded-[var(--gj-radius-lg)] border border-gj-border-subtle bg-gj-background-soft px-4 py-3.5 text-gj-foreground placeholder:text-gj-foreground-subtle"
          onChange={(e) => {
            setMessage(e.target.value);
            if (errors.message) setErrors((p) => ({ ...p, message: undefined }));
          }}
        />
        {errors.message && (
          <FieldError id="contact-message-error" message={errors.message} />
        )}
      </div>

      {errors.submit && <FieldError message={errors.submit} />}

      <Button type="submit" variant="primary" disabled={locked} className="w-full sm:w-auto">
        {isSubmitting ? (
          <span className="inline-flex items-center gap-2">
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
            Sending...
          </span>
        ) : (
          "Start a conversation"
        )}
      </Button>
    </form>
  );
}
