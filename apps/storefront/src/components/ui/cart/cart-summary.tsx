import React from "react";
import {
  Section,
  type Props as SectionProps,
} from "@/components/ui/common/section";
import { SectionTitle } from "../common/section-title";
import { cn } from "@/lib/utils";

type Props = SectionProps & { sectionTitle?: React.ReactNode };

export function CartSummary({
  children,
  sectionTitle = (
    <SectionTitle className="font-medium text-body-xl text-gray-900">
      Cart Total
    </SectionTitle>
  ),
  className,
  ...props
}: Props) {
  return (
    <Section
      className={cn(
        "flex flex-col gap-y-2 border border-gray-100 rounded-ten p-6 max-h-fit sticky top-28",
        className
      )}
      {...props}
    >
      {sectionTitle}
      {children}
    </Section>
  );
}
