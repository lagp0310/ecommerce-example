import { ClientLink } from "@/components/navigation/client-link";
import { defaultProductsSearchParams } from "@/constants/product/constants";
import type { HeaderBannerResponse } from "@/types/types";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

type Props = HeaderBannerResponse;

export function HeaderTitleOnlyWrapper({
  imageUrl,
  title,
  ctaText,
  ctaUrl,
  subtitle,
}: Props) {
  return (
    <React.Fragment>
      <Image
        src={imageUrl}
        alt={title}
        quality={100}
        sizes="100vw"
        width={300}
        height={300}
        className="h-[300px] w-full rounded-ten object-cover sm:h-[400px] lg:h-auto"
      />
      <div className="absolute left-0 top-0 size-full rounded-ten bg-green-gray-900/80"></div>
      <div className="absolute left-0 top-0 flex size-full flex-1 flex-col items-center justify-center gap-y-6 px-6 md:gap-y-8 md:px-12">
        <span className="text-center text-body-small font-medium uppercase leading-[100%] text-white">
          {subtitle}
        </span>
        <h5 className="line-clamp-2 text-center text-body-xxl font-semibold text-white md:text-heading-5">
          {title}
        </h5>
        <ClientLink
          href={`${ctaUrl}?${defaultProductsSearchParams.toString()}`}
          className="group flex max-w-fit flex-row items-center gap-x-2 rounded-full px-5 py-3 text-body-small font-semibold leading-[120%] text-primary hover:bg-white hover:text-primary motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none md:text-body-medium"
        >
          {ctaText}
          <ArrowRightIcon className="size-4 text-primary group-hover:text-primary" />
        </ClientLink>
      </div>
    </React.Fragment>
  );
}
