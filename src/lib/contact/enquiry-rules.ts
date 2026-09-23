/** Reuse honeypot field name consistent with Box Games apply flow. */
export const CONTACT_HONEYPOT_FIELD = "company_website";

export const CONTACT_ENQUIRY_TYPES = [
  "Brand Partnership",
  "Sponsored Content",
  "LIVE / Event",
  "Hosting",
  "Creator Collaboration",
  "Media Enquiry",
  "General Enquiry",
  "Other",
] as const;

export type ContactEnquiryType = (typeof CONTACT_ENQUIRY_TYPES)[number];

const ENQUIRY_TYPE_SET = new Set<string>(CONTACT_ENQUIRY_TYPES);

/** Optional `?type=` slugs for /contact preselect */
export const CONTACT_ENQUIRY_TYPE_SLUGS: Record<string, ContactEnquiryType> = {
  brand: "Brand Partnership",
  partnership: "Brand Partnership",
  sponsored: "Sponsored Content",
  live: "LIVE / Event",
  event: "LIVE / Event",
  hosting: "Hosting",
  creator: "Creator Collaboration",
  media: "Media Enquiry",
  general: "General Enquiry",
  other: "Other",
};

export function resolveEnquiryTypeFromSlug(slug: unknown): ContactEnquiryType | "" {
  if (typeof slug !== "string") return "";
  const key = slug.trim().toLowerCase();
  return CONTACT_ENQUIRY_TYPE_SLUGS[key] ?? "";
}

export type ContactEnquiryPayload = {
  full_name: string;
  email: string;
  enquiry_type: ContactEnquiryType;
  message: string;
  company?: string;
  phone?: string;
  website_or_social?: string;
};

export function validateContactEnquiry(input: {
  full_name: unknown;
  email: unknown;
  enquiry_type: unknown;
  message: unknown;
  company?: unknown;
  phone?: unknown;
  website_or_social?: unknown;
}):
  | { ok: true; data: ContactEnquiryPayload }
  | { ok: false; message: string } {
  const full_name = typeof input.full_name === "string" ? input.full_name.trim() : "";
  const email = typeof input.email === "string" ? input.email.trim() : "";
  const message = typeof input.message === "string" ? input.message.trim() : "";
  const enquiry_type_raw =
    typeof input.enquiry_type === "string" ? input.enquiry_type.trim() : "";

  if (!full_name || full_name.length < 2 || full_name.length > 120) {
    return { ok: false, message: "Validation failed." };
  }

  if (!email || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, message: "Validation failed." };
  }

  if (!ENQUIRY_TYPE_SET.has(enquiry_type_raw)) {
    return { ok: false, message: "Validation failed." };
  }

  if (!message || message.length < 10 || message.length > 5000) {
    return { ok: false, message: "Validation failed." };
  }

  const company =
    typeof input.company === "string" && input.company.trim()
      ? input.company.trim().slice(0, 200)
      : undefined;

  const phone =
    typeof input.phone === "string" && input.phone.trim()
      ? input.phone.trim().slice(0, 40)
      : undefined;

  const website_or_social =
    typeof input.website_or_social === "string" && input.website_or_social.trim()
      ? input.website_or_social.trim().slice(0, 500)
      : undefined;

  return {
    ok: true,
    data: {
      full_name,
      email,
      enquiry_type: enquiry_type_raw as ContactEnquiryType,
      message,
      company,
      phone,
      website_or_social,
    },
  };
}
