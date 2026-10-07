import { AppointmentCta } from "@/components/appointment-cta";
import { ContactSection } from "@/components/contact-section";
import { FeaturedTreatments } from "@/components/featured-treatments";
import { HeroSection } from "@/components/hero-section";
import { ReviewsSection } from "@/components/reviews-section";
import { ServiceGrid } from "@/components/service-grid";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TeamPlaceholder } from "@/components/team-placeholder";
import { WhyCrown } from "@/components/why-crown";
import {
  childTherapyServices,
  clinic,
  featuredTreatments,
  physiotherapyServices,
  whyDhiya,
} from "@/data/clinic";

export default function Home() {
  return (
    <div className="bg-[#f7f3ee] pb-24 text-stone-800 md:pb-0">
      <SiteHeader />

      <main>
        <HeroSection />

        <section className="bg-[#f8f4ee] px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-stone-200 bg-white px-5 py-6 shadow-[0_18px_40px_rgba(41,35,27,0.04)] md:px-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">
                  Patient trust
                </p>
                <p className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-stone-900">
                  {clinic.reviewCount}
                </p>
              </div>

              <div className="text-left md:text-right">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-500">
                  Google reviews
                </p>
                <p className="mt-2 text-base font-medium text-stone-700">{clinic.reviewCount}</p>
              </div>
            </div>
          </div>
        </section>

        <ServiceGrid
          id="services"
          eyebrow="Physiotherapy & Rehabilitation"
          title="Supportive, recovery-focused care that helps patients move with confidence."
          description="Our physiotherapy approach is centered on comfort, clear communication, and practical support for rehabilitation and daily movement."
          groups={physiotherapyServices}
          accent="emerald"
        />

        <ServiceGrid
          id="child-therapy"
          eyebrow="Child Therapy"
          title="Gentle, child-focused care designed to feel welcoming and reassuring."
          description="We focus on thoughtful, individualized support for children in a calm environment that puts families at ease."
          groups={childTherapyServices}
          accent="warm"
        />

        <FeaturedTreatments items={featuredTreatments} />
        <WhyCrown points={whyDhiya} />
        <TeamPlaceholder />
        <ReviewsSection />
        <AppointmentCta />
        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  );
}
