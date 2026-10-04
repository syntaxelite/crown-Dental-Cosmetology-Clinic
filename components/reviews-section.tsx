import { clinic } from "@/data/clinic";

export function ReviewsSection() {
  return (
    <section className="bg-[#f2f7f3] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-700">
              Google rating
            </p>
            <h2 className="text-3xl font-semibold tracking-[-0.05em] text-stone-900 md:text-5xl">
              {clinic.googleRating}
            </h2>
            <p className="mt-4 text-lg font-medium text-stone-700">{clinic.reviewCount}</p>
          </div>

          <div className="flex min-h-64 flex-col justify-between rounded-[2rem] border border-stone-200 bg-white p-6 shadow-[0_18px_40px_rgba(0,0,0,0.02)] md:p-8">
            <h3 className="text-lg font-semibold text-stone-900">Patient reviews</h3>
            <p className="max-w-md text-base leading-7 text-stone-600">
              A space for patient feedback selected by the clinic.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
