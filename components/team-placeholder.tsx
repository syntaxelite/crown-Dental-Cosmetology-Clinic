import { clinic } from "@/data/clinic";

export function TeamPlaceholder() {
  return (
    <section className="bg-[#f8f4ee] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2.25rem] border border-stone-200 bg-white/90 p-6 shadow-[0_24px_80px_rgba(29,25,20,0.04)] md:p-10">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-700">
            Our team
          </p>
          <h2 className="text-3xl font-semibold tracking-[-0.05em] text-stone-900 md:text-5xl">
            Meet the team behind your care
          </h2>
          <p className="mt-4 text-base leading-7 text-stone-600">
            {clinic.doctorName}
          </p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
          <div
            role="img"
            aria-label="Placeholder for a clinic team photograph"
            className="flex aspect-[16/9] items-end rounded-[1.8rem] border border-stone-200 bg-[#e8ece8] p-5 sm:p-7"
          >
            <p className="rounded-full border border-stone-200 bg-white/90 px-4 py-2 text-sm font-medium text-stone-700">
              Team photograph placeholder
            </p>
          </div>
          <div className="flex min-h-48 items-center rounded-[1.8rem] border border-stone-200 bg-[#f6f3ee] p-6 sm:p-8">
            <p className="max-w-sm text-lg leading-8 text-stone-700">
              Doctor and team photography can be added here.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
