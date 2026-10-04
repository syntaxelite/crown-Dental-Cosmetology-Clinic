type WhyCrownProps = {
  points: string[];
};

export function WhyCrown({ points }: WhyCrownProps) {
  return (
    <section id="about" className="bg-[#f2f7f3] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-700">
              Why Crown
            </p>
            <h2 className="text-3xl font-semibold tracking-[-0.05em] text-stone-900 md:text-5xl">
              Thoughtful care built around your comfort and confidence.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {points.map((point) => (
              <div key={point} className="rounded-[1.75rem] border border-emerald-100 bg-white p-5 shadow-[0_18px_30px_rgba(16,50,42,0.04)]">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-900 text-sm font-semibold text-stone-50">
                  ✓
                </div>
                <p className="text-base leading-7 text-stone-700">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
