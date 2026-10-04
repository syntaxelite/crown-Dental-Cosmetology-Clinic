import { SectionHeading } from "@/components/section-heading";

export type ServiceGroup = {
  title: string;
  items: string[];
};

type ServiceGridProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  groups: ServiceGroup[];
  accent?: "emerald" | "warm";
};

export function ServiceGrid({
  id = "dental",
  eyebrow,
  title,
  description,
  groups,
  accent = "emerald",
}: ServiceGridProps) {
  const shellClass = accent === "warm" ? "bg-[#f7efe8]" : "bg-[#f2f7f3]";

  return (
    <section id={id} className={`${shellClass} px-4 py-20 sm:px-6 lg:px-8`}>
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {groups.map((group) => (
            <div key={group.title} className="rounded-[2rem] border border-stone-200 bg-white/80 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.02)]">
              <h3 className="text-lg font-semibold text-stone-900">{group.title}</h3>
              <ul className="mt-5 space-y-3 text-sm text-stone-600">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 border-b border-stone-100 pb-2 last:border-b-0 last:pb-0">
                    <span className="h-2 w-2 rounded-full bg-emerald-700" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
