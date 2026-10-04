import Link from "next/link";

import { AppointmentLink } from "@/components/appointment-link";
import { clinic, navigation } from "@/data/clinic";

export function SiteFooter() {
  return (
    <footer className="border-t border-stone-200 bg-[#f6f3ef] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">
            {clinic.name}
          </p>
          <address className="mt-2 max-w-md text-sm leading-7 text-stone-600 not-italic">
            {clinic.location.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-sm text-stone-600">
          {navigation.map((item) => (
            <Link key={item.label} href={item.href} className="transition-colors hover:text-stone-900">
              {item.label}
            </Link>
          ))}
          <AppointmentLink />
        </div>
      </div>
    </footer>
  );
}
