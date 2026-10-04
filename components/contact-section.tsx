import Link from "next/link";

import { clinic } from "@/data/clinic";

export function ContactSection() {
  return (
    <section id="contact" className="bg-[#f8f4ee] px-4 pb-20 pt-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] border border-stone-200 bg-white shadow-[0_24px_80px_rgba(38,32,28,0.04)]">
        <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="bg-[#123b35] p-8 text-stone-50 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
              Visit us
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] md:text-5xl">
              {clinic.name}
            </h2>
            <div className="mt-8 space-y-5 text-base text-stone-200">
              <address className="not-italic">
                {clinic.location.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <div
              className={`grid gap-5 ${
                clinic.phoneHref && clinic.whatsappHref ? "sm:grid-cols-2" : "grid-cols-1"
              }`}
            >
              {clinic.whatsappHref && (
                <div className="rounded-[1.5rem] border border-emerald-900 bg-emerald-900 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-100">
                    WhatsApp
                  </p>
                  <Link
                    href={clinic.whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex min-h-11 items-center rounded-full bg-stone-50 px-5 text-base font-semibold text-emerald-950 transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-50"
                  >
                    Start a chat
                  </Link>
                </div>
              )}
              {clinic.phoneHref && clinic.phoneDisplay && (
                <div className="rounded-[1.5rem] border border-stone-200 bg-[#f6f3ee] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                    Call
                  </p>
                  <Link
                    href={clinic.phoneHref}
                    className="mt-4 inline-block text-xl font-semibold tracking-[-0.04em] text-stone-900 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
                  >
                    {clinic.phoneDisplay}
                  </Link>
                </div>
              )}
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-stone-200 bg-[#f6f3ee] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                Directions
              </p>
              <Link
                href={clinic.mapsHref}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-lg font-semibold tracking-[-0.04em] text-stone-900 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
              >
                Open in Google Maps
              </Link>
            </div>
            <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-stone-200 bg-[#f6f3ee]">
              <iframe
                src={clinic.mapsEmbedUrl}
                title={`Map for ${clinic.name}`}
                className="aspect-[4/3] w-full border-0 sm:aspect-[16/9] lg:aspect-[4/3]"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
