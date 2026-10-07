import Link from "next/link";

import { clinic } from "@/data/clinic";
import { AppointmentLink } from "@/components/appointment-link";

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#f8f4ee] px-4 pb-16 pt-10 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,_rgba(10,91,75,0.16),_transparent_58%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-white/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800 shadow-sm">
              Trusted physiotherapy care in Erode
            </div>
            <h1 className="text-4xl font-semibold tracking-[-0.07em] text-stone-900 sm:text-5xl lg:text-4xl xl:text-5xl">
              Helping you move better. Helping children grow stronger.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-8 text-stone-600 md:text-lg">
              Personalized physiotherapy and child-focused therapy support in a warm, clinical setting designed around comfort, recovery, and clear guidance.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <AppointmentLink />
              <Link
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-6 py-3.5 text-sm font-semibold text-stone-800 transition-colors hover:border-stone-400 hover:bg-stone-50"
              >
                Explore Our Services
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-stone-600">
              <div className="flex items-center gap-2 rounded-full border border-stone-200 bg-white/80 px-3 py-2">
                <span className="text-base font-semibold text-emerald-800">{clinic.googleRating}</span>
              </div>
              <span className="font-medium">{clinic.reviewCount}</span>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem] border border-stone-200 bg-white p-3 shadow-[0_24px_80px_rgba(35,31,27,0.08)]">
              <div
                role="img"
                className="aspect-[4/5] min-h-[360px] rounded-[1.5rem] bg-[#e5ebe6] bg-cover bg-center lg:min-h-[500px]"
                style={{ backgroundImage: `url('${clinic.heroImage}')` }}
                aria-label="Physiotherapy and child therapy care"
              />
              <div className="absolute inset-x-7 bottom-7 rounded-2xl border border-stone-200 bg-white/95 p-4 shadow-lg">
                <p className="text-sm font-semibold text-stone-900">
                  Recovery-focused physiotherapy and child therapy in Erode
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
