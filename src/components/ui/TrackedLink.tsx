"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { trackCtaClick } from "@/lib/analytics";

type TrackedLinkProps = ComponentProps<typeof Link> & {
  trackLabel?: string;
};

export function TrackedLink({ trackLabel, href, onClick, children, ...props }: TrackedLinkProps) {
  const hrefString = typeof href === "string" ? href : (href.pathname ?? "/");

  return (
    <Link
      href={href}
      {...props}
      onClick={(event) => {
        trackCtaClick(trackLabel ?? String(children), hrefString);
        onClick?.(event);
      }}
    >
      {children}
    </Link>
  );
}
