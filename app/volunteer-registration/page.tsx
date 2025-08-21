"use client";
import React, { useState } from "react";

export default function VolunteerRegistration() {
  const [form, setForm] = useState({ firstName: "", lastName: "", phone: "", email: "", honey: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.honey) return;
    setStatus("submitting");
    await new Promise((r) => setTimeout(r, 800));
    setStatus("success");
  };

  const isDisabled =
    status === "submitting" || !form.firstName || !form.lastName || !form.phone || !form.email;

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-beige text-darkOlive">
      {/* ===== Header ===== */}
      <header className="sticky top-0 z-10 backdrop-blur bg-cream/70 border-b border-burgundy/20">
        <div className="mx-auto max-w-container px-4 py-3 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-pink/30 grid place-items-center shadow-inner">
              <img src="/hearts in hands.png" alt="Hearts in Hands" className="w-8 h-8 object-contain" />
            </div>
            <span className="font-extrabold tracking-tight text-burgundy text-xl group-hover:text-deepRed transition-colors">
              Hearts In Hands
            </span>
          </a>
          <nav className="flex items-center gap-2 text-sm font-medium">
            <a href="/" className="px-3 py-2 rounded-xl hover:bg-pink/20 text-darkOlive">Home</a>
            <a
              href="/volunteer-registration"
              className="px-3 py-2 rounded-xl bg-burgundy text-white shadow-sm hover:bg-deepRed"
            >
              Volunteer
            </a>
          </nav>
        </div>
      </header>

      {/* ===== Hero ===== */}
      <section className="mx-auto max-w-4xl px-4 pt-10 pb-4 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-burgundy border border-pink/40">
          <span className="text-xs font-semibold">Join our volunteer family ❤️</span>
        </div>
        <h1 className="mt-4 text-3xl md:text-4xl font-black tracking-tight text-burgundy">
          Volunteer Registration
        </h1>
        <p className="mt-2 text-darkOlive/80 max-w-2xl mx-auto">
          Pop your details below and we’ll reach out with upcoming opportunities.
        </p>
      </section>

      {/* ===== Form Card ===== */}
      <main className="mx-auto max-w-3xl px-4 pb-14">
        <div className="rounded-2xl bg-white shadow-soft border border-pink/30">
          {status !== "success" ? (
            <form onSubmit={handleSubmit} className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                {/* First Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="firstName" className="text-sm font-semibold text-burgundy">First name</label>
                  <input
                    id="firstName" name="firstName" type="text" required placeholder="Alex"
                    value={form.firstName} onChange={handleChange}
                    className="h-11 rounded-2xl border border-darkOlive/30 bg-cream/40 px-4 outline-none
                               focus:ring-4 focus:ring-pink/40 focus:border-pink/60"
                  />
                </div>

                {/* Last Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="lastName" className="text-sm font-semibold text-burgundy">Last name</label>
                  <input
                    id="lastName" name="lastName" type="text" required placeholder="Morgan"
                    value={form.lastName} onChange={handleChange}
                    className="h-11 rounded-2xl border border-darkOlive/30 bg-cream/40 px-4 outline-none
                               focus:ring-4 focus:ring-pink/40 focus:border-pink/60"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-sm font-semibold text-burgundy">Phone number</label>
                  <input
                    id="phone" name="phone" type="tel" inputMode="tel" required placeholder="(555) 123-4567"
                    value={form.phone} onChange={handleChange} pattern="^[+()\-\d\s]{7,}$"
                    className="h-11 rounded-2xl border border-darkOlive/30 bg-cream/40 px-4 outline-none
                               focus:ring-4 focus:ring-pink/40 focus:border-pink/60"
                  />
                  <p className="text-xs text-darkOlive/70">Digits only are fine too.</p>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-sm font-semibold text-burgundy">Email</label>
                  <input
                    id="email" name="email" type="email" required placeholder="you@example.com"
                    value={form.email} onChange={handleChange}
                    className="h-11 rounded-2xl border border-darkOlive/30 bg-cream/40 px-4 outline-none
                               focus:ring-4 focus:ring-pink/40 focus:border-pink/60"
                  />
                </div>
              </div>

              <div className="hidden">
                <label>
                  Leave this field empty
                  <input name="honey" value={form.honey} onChange={handleChange} />
                </label>
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <button
                  type="submit" disabled={isDisabled}
                  className="h-12 rounded-2xl bg-burgundy text-white font-semibold shadow-md
                             hover:bg-deepRed active:scale-[0.99] transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? "Submitting…" : "Register"}
                </button>
                <p className="text-xs text-darkOlive/80">
                  We’ll only use your info to contact you about volunteer opportunities.
                </p>
              </div>
            </form>
          ) : (
            <div className="p-10 text-center">
              <div className="mx-auto mb-4 w-16 h-16 rounded-2xl bg-pink/30 grid place-items-center text-burgundy text-2xl">❤️</div>
              <h2 className="text-2xl font-bold text-burgundy">You’re on the list! 💌</h2>
              <p className="mt-2 text-darkOlive/80">Thanks for volunteering. We’ll reach out soon with next steps.</p>
              <a href="/" className="inline-flex mt-6 h-11 items-center justify-center rounded-2xl border border-pink/40 px-5 font-semibold text-burgundy hover:bg-pink/10">
                Back to Home
              </a>
            </div>
          )}
        </div>
      </main>

      {/* ===== Footer ===== */}
      <footer className="mt-auto border-t border-pink/30 bg-cream/70">
        <div className="mx-auto max-w-container px-4 py-6 text-center text-sm text-darkOlive/80">
          Made with love by Hearts In Hands • Be kind, do good ✨
        </div>
      </footer>
    </div>
  );
}
