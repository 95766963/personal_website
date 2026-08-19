"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setStatus("submitting");
    try {
      const response = await fetch("https://formspree.io/f/xvkpvnnw", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error("Submission failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return <form onSubmit={submit} noValidate={false}>
    <input className="form-trap" type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" />
    <input type="hidden" name="_subject" value="New portfolio contact from Stone's website" />
    <label>Name<input name="name" placeholder="Your name" autoComplete="name" required /></label>
    <label>Email<input name="email" type="email" placeholder="you@example.com" autoComplete="email" required /></label>
    <label>Message<textarea name="message" placeholder="Tell me about your project, collaboration, or role..." rows={7} minLength={10} required /></label>
    <button className="button primary" type="submit" disabled={status === "submitting"}>
      {status === "submitting" ? "Sending..." : "Send Message →"}
    </button>
    <div className="form-feedback" aria-live="polite">
      {status === "success" && <p className="form-success"><span>●</span> Message received. I&apos;ll get back to you soon.</p>}
      {status === "error" && <p className="form-error">Message could not be sent. Please email me directly instead.</p>}
    </div>
  </form>;
}
