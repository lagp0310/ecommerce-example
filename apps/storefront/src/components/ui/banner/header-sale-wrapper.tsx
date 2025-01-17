import { ClientLink } from "@/components/navigation/client-link";
import { defaultProductsSearchParams } from "@/constants/product/constants";
import type { HeaderBannerResponse } from "@/types/types";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

type Props = HeaderBannerResponse;

export function HeaderSaleWrapper({
  imageUrl,
  title,
  ctaText,
  ctaUrl,
  description,
  subtitleRemark,
}: Props) {
  return (
    <React.Fragment>
      <div className="absolute left-0 top-0 size-full rounded-ten bg-gradient-to-r from-white/60 via-white/50 to-white/30"></div>
      <Image
        src={imageUrl}
        alt={title}
        quality={100}
        sizes="100vw"
        width={300}
        height={300}
        className="h-[300px] w-full rounded-ten object-cover sm:h-[400px] lg:h-auto"
      />
      <div className="absolute left-0 top-0 flex h-full flex-1 flex-col justify-center gap-y-6 px-8">
        <span className="text-body-small font-medium uppercase leading-[100%] text-gray-900">
          {title}
        </span>
        <h5 className="text-heading-5 font-semibold uppercase text-gray-900">
          {description}
        </h5>
        <span className="text-body-small font-normal text-gray-800">
          {subtitleRemark}
        </span>
        <ClientLink
          href={`${ctaUrl}?${defaultProductsSearchParams.toString()}`}
          className="group flex max-w-fit flex-row items-center gap-x-2 rounded-full bg-primary px-5 py-3 text-body-small font-semibold leading-[120%] text-white hover:bg-white hover:text-primary motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none md:text-body-medium"
        >
          {ctaText}
          <ArrowRightIcon className="size-4 text-white group-hover:text-primary" />
        </ClientLink>
      </div>
    </React.Fragment>
  );
}
