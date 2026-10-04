import Link from "next/link";

import { appointmentHref } from "@/data/clinic";

type AppointmentLinkProps = {
  variant?: "primary" | "inverse";
};

export function AppointmentLink({ variant = "primary" }: AppointmentLinkProps) {
  const appearance =
    variant === "inverse"
      ? "bg-stone-50 text-emerald-950 hover:bg-white focus-visible:outline-stone-50"
      : "bg-emerald-900 text-stone-50 shadow-sm hover:bg-emerald-800 focus-visible:outline-emerald-700";

  return (
    <Link
      href={appointmentHref}
      className={`inline-flex min-h-12 items-center justify-center whitespace-nowrap rounded-full px-5 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${appearance}`}
    >
      Book an Appointment
    </Link>
  );
}
