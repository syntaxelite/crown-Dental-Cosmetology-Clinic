import { clinic } from "@/data/clinic";

const reviewThemes = [
  "Patient-friendly care",
  "Clear explanation of treatment",
  "Recovery-focused approach",
  "Clean and welcoming clinic",
  "Reasonable charges",
];

export function ReviewsSection() {
  return (
    <section className="bg-[#f2f7f3] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-700">
              Google reviews
            </p>
            <h2 className="text-3xl font-semibold tracking-[-0.05em] text-stone-900 md:text-5xl">
              {clinic.googleRating}
            </h2>
            <p className="mt-4 text-lg font-medium text-stone-700">{clinic.reviewCount}</p>
          </div>

          <div className="flex min-h-64 flex-col justify-between rounded-[2rem] border border-stone-200 bg-white p-6 shadow-[0_18px_40px_rgba(0,0,0,0.02)] md:p-8">
            <h3 className="text-lg font-semibold text-stone-900">What patients often appreciate</h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {reviewThemes.map((theme) => (
                <div key={theme} className="rounded-2xl border border-stone-200 bg-[#f8f4ee] px-4 py-3 text-sm font-medium text-stone-700">
                  {theme}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
