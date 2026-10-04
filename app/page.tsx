import { AppointmentCta } from "@/components/appointment-cta";
import { ContactSection } from "@/components/contact-section";
import { FeaturedTreatments } from "@/components/featured-treatments";
import { HeroSection } from "@/components/hero-section";
import { ReviewsSection } from "@/components/reviews-section";
import { SectionHeading } from "@/components/section-heading";
import { ServiceGrid } from "@/components/service-grid";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TeamPlaceholder } from "@/components/team-placeholder";
import { WhyCrown } from "@/components/why-crown";
import {
  clinic,
  cosmetologyServices,
  dentalServices,
  featuredTreatments,
  whyCrown,
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
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">
                    Patient trust
                  </p>
                  <p className="mt-1 text-2xl font-semibold tracking-[-0.04em] text-stone-900">
                    {clinic.googleRating}
                  </p>
                </div>
              </div>

              <div className="text-left md:text-right">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-500">
                  Google reviews
                </p>
                <p className="mt-1 text-base font-medium text-stone-700">{clinic.reviewCount}</p>
              </div>
            </div>
          </div>
        </section>

        <ServiceGrid
          id="dental"
          eyebrow="Dental care"
          title="Comprehensive dentistry with a modern, patient-first approach."
          description="From preventive care to advanced restorative treatment, our services are designed to support oral health, restore confidence, and make every visit feel reassuring."
          groups={dentalServices}
          accent="emerald"
        />

        <section id="cosmetology" className="bg-[#f7efe8] px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white p-3 shadow-[0_18px_40px_rgba(30,25,20,0.04)]">
                <div
                  role="img"
                  className="aspect-[4/3] rounded-[1.5rem] bg-[#e8ece8] bg-cover bg-center"
                  style={{ backgroundImage: `url('${clinic.cosmetologyImage}')` }}
                  aria-label="Cosmetology clinic treatment"
                />
              </div>

              <div>
                <SectionHeading
                  eyebrow="Cosmetology"
                  title="Refined aesthetic treatments that look natural and feel personal."
                  description="Our cosmetic services are designed to enhance your features with strategy, subtlety, and a premium beauty-first experience."
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {cosmetologyServices.map((group) => (
                <div key={group.title} className="rounded-[2rem] border border-stone-200 bg-white/80 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.02)]">
                  <h3 className="text-lg font-semibold text-stone-900">{group.title}</h3>
                  <ul className="mt-5 space-y-3 text-sm text-stone-600">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 border-b border-stone-100 pb-2 last:border-b-0 last:pb-0">
                        <span className="h-2 w-2 rounded-full bg-amber-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FeaturedTreatments items={featuredTreatments} />
        <WhyCrown points={whyCrown} />
        <TeamPlaceholder />
        <ReviewsSection />
        <AppointmentCta />
        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  );
}
