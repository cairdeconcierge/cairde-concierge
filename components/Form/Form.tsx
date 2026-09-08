"use client";

import { useState } from "react";
import Button from "../ui/Button";

const PACKAGE_OPTIONS = [
  "The Essential Check-In",
  "The Independence Package",
  "The Premium Peace of Mind Package",
  "Trial Visit",
  "Ad-Hoc Support",
  "Not sure yet help me decide",
];

interface FormValues {
  name: string;
  phone: string;
  email: string;
  lovedOneName: string;
  location: string;
  package: string;
  message: string;
}

const INITIAL_VALUES: FormValues = {
  name: "",
  phone: "",
  email: "",
  lovedOneName: "",
  location: "",
  package: "",
  message: "",
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[+\d][\d\s()-]{6,}$/;

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  } else if (values.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  if (!values.phone.trim()) {
    errors.phone = "Please enter a phone number.";
  } else if (!PHONE_REGEX.test(values.phone.trim())) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter an email address.";
  } else if (!EMAIL_REGEX.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.lovedOneName.trim()) {
    errors.lovedOneName = "Please enter your loved one's name.";
  }

  if (!values.location.trim()) {
    errors.location = "Please enter a location.";
  }

  if (!values.package) {
    errors.package = "Please select a package.";
  }

  if (!values.message.trim()) {
    errors.message = "Please tell us a little about your needs.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Please provide a few more details (at least 10 characters).";
  }

  return errors;
}

const inputClasses =
  "w-full h-[56px] rounded-[12px] border border-[#E5E7EB] bg-white px-[20px] font-body text-[16px] text-[#1C2A38] placeholder:text-[#8A97A4] outline-none focus:border-[#5B805F] transition-colors";

const errorInputClasses = "border-[#D92D20] focus:border-[#D92D20]";

const labelClasses =
  "block font-body text-[14px] md:text-[16px] font-medium text-[#1C2A38] mb-[8px]";

const errorTextClasses = "mt-[6px] font-body text-[13px] text-[#D92D20]";

export default function Form() {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formEl = e.currentTarget;
    const botcheck = (formEl.elements.namedItem("botcheck") as HTMLInputElement | null)
      ?.checked;
    if (botcheck) {
      // Honeypot tripped: silently drop instead of hitting the API.
      return;
    }

    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          botcheck,
          subject: "New consultation request",
          from_name: values.name,
          name: values.name,
          phone: values.phone,
          email: values.email,
          "loved one's name": values.lovedOneName,
          location: values.location,
          package: values.package,
          message: values.message,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setValues(INITIAL_VALUES);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section>
      <div className="container mx-auto">
        <div className="pb-[80px] md:pb-[100px]">
          <form
            onSubmit={handleSubmit}
            noValidate
            className="w-full max-w-[860px] mx-auto"
          >
            {/* Honeypot field for spam protection */}
            <input
              type="checkbox"
              name="botcheck"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[24px] gap-y-[24px]">
              <div>
                <label htmlFor="name" className={labelClasses}>
                  Your name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className={`${inputClasses} ${errors.name ? errorInputClasses : ""}`}
                />
                {errors.name && <p className={errorTextClasses}>{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="phone" className={labelClasses}>
                  Phone number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={values.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className={`${inputClasses} ${errors.phone ? errorInputClasses : ""}`}
                />
                {errors.phone && <p className={errorTextClasses}>{errors.phone}</p>}
              </div>
            </div>

            <div className="mt-[24px]">
              <label htmlFor="email" className={labelClasses}>
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className={`${inputClasses} ${errors.email ? errorInputClasses : ""}`}
              />
              {errors.email && <p className={errorTextClasses}>{errors.email}</p>}
            </div>

            <div className="mt-[24px]">
              <label htmlFor="lovedOneName" className={labelClasses}>
                Loved one&apos;s name
              </label>
              <input
                id="lovedOneName"
                name="lovedOneName"
                type="text"
                value={values.lovedOneName}
                onChange={handleChange}
                placeholder="Enter your loved one's name"
                className={`${inputClasses} ${
                  errors.lovedOneName ? errorInputClasses : ""
                }`}
              />
              {errors.lovedOneName && (
                <p className={errorTextClasses}>{errors.lovedOneName}</p>
              )}
            </div>

            <div className="mt-[24px]">
              <label htmlFor="location" className={labelClasses}>
                Location
              </label>
              <input
                id="location"
                name="location"
                type="text"
                value={values.location}
                onChange={handleChange}
                placeholder="Enter location"
                className={`${inputClasses} ${
                  errors.location ? errorInputClasses : ""
                }`}
              />
              {errors.location && (
                <p className={errorTextClasses}>{errors.location}</p>
              )}
            </div>

            <div className="mt-[24px]">
              <label htmlFor="package" className={labelClasses}>
                Which package fits your needs?
              </label>
              <select
                id="package"
                name="package"
                value={values.package}
                onChange={handleChange}
                className={`${inputClasses} appearance-none ${
                  errors.package ? errorInputClasses : ""
                } ${values.package ? "" : "text-[#8A97A4]"}`}
              >
                <option value="" disabled>
                  Select a package
                </option>
                {PACKAGE_OPTIONS.map((option) => (
                  <option key={option} value={option} className="text-[#1C2A38]">
                    {option}
                  </option>
                ))}
              </select>
              {errors.package && (
                <p className={errorTextClasses}>{errors.package}</p>
              )}
            </div>

            <div className="mt-[24px] mb-[45px]">
              <label htmlFor="message" className={labelClasses}>
                Tell us about you or your loved one&apos;s hobbies, daily
                routines, or specific tasks you need help with
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={values.message}
                onChange={handleChange}
                placeholder="Share as much detail as you'd like..."
                className={`${inputClasses} h-auto min-h-[180px] w-full resize-y py-[16px] ${
                  errors.message ? errorInputClasses : ""
                }`}
              />
              {errors.message && (
                <p className={errorTextClasses}>{errors.message}</p>
              )}
            </div>

            <div className="flex flex-col items-center">
              <Button
                type="submit"
                style="tertiary"
                loading={status === "loading"}
                css="w-full md:w-[271px] text-white text-[14px]"
              >
                {status === "loading" ? "Sending..." : "Book a consultation"}
              </Button>

              {status === "success" && (
                <p className="mt-[16px] font-body text-[14px] text-[#5B805F]">
                  Thank you! Your consultation request has been sent we&apos;ll
                  be in touch soon.
                </p>
              )}
              {status === "error" && (
                <p className="mt-[16px] font-body text-[14px] text-[#D92D20]">
                  Something went wrong sending your request. Please try again.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
