import { clinic } from "@/data/clinic";

export function TeamPlaceholder() {
  return (
    <section className="bg-[#f8f4ee] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2.25rem] border border-stone-200 bg-white/90 p-6 shadow-[0_24px_80px_rgba(29,25,20,0.04)] md:p-10">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-700">
            Our doctor
          </p>
          <h2 className="text-3xl font-semibold tracking-[-0.05em] text-stone-900 md:text-5xl">
            Meet Dr. Dinesh Kumar
          </h2>
          <p className="mt-4 text-base leading-7 text-stone-600">
            Physiotherapy-focused care designed around patient comfort, recovery, and clear communication.
          </p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
          <div
            role="img"
            aria-label="Doctor placeholder portrait"
            className="flex aspect-[16/9] items-end rounded-[1.8rem] border border-stone-200 bg-[#e8ece8] bg-cover bg-center p-5 sm:p-7"
            style={{ backgroundImage: `url('${clinic.featurePortrait}')` }}
          >
            <p className="rounded-full border border-stone-200 bg-white/90 px-4 py-2 text-sm font-medium text-stone-700">
              Doctor photo placeholder
            </p>
          </div>
          <div className="flex min-h-48 items-center rounded-[1.8rem] border border-stone-200 bg-[#f6f3ee] p-6 sm:p-8">
            <p className="max-w-sm text-lg leading-8 text-stone-700">
              A calm, patient-first approach that can be updated easily with the clinic’s final doctor profile when available.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
