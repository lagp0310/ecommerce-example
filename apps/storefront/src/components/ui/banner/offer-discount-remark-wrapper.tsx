import { ClientLink } from "@/components/navigation/client-link";
import { defaultProductsSearchParams } from "@/constants/product/constants";
import type { OfferBannerResponse } from "@/types/types";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

type Props = OfferBannerResponse;

export function OfferDiscountRemarkWrapper({
  imageUrl,
  title,
  ctaText,
  ctaUrl,
  header,
  subtitle,
  subtitleRemark,
}: Props) {
  return (
    <React.Fragment>
      <Image
        src={imageUrl}
        alt={header}
        quality={100}
        sizes="100vw"
        width={400}
        height={500}
        className="h-[500px] w-full rounded-ten object-cover lg:h-auto"
      />
      <div className="absolute left-0 top-10 flex h-[230px] w-full flex-1 flex-col items-center gap-y-4">
        <span className="text-body-small font-normal uppercase leading-[100%] text-gray-900">
          {title}
        </span>
        <h3 className="text-center text-heading-4 font-semibold text-gray-900 md:text-heading-3">
          {header}
        </h3>
        <span className="text-body-xl font-medium text-gray-900">
          {subtitle}
          <span className="ml-2 rounded-[5px] bg-gray-900 px-3 py-1 font-semibold uppercase text-[#FCC900]">
            {subtitleRemark}
          </span>
        </span>
        <div className="flex h-full flex-1 flex-row items-end">
          <ClientLink
            href={`${ctaUrl}?${defaultProductsSearchParams.toString()}`}
            className="group flex max-w-fit flex-row items-center gap-x-2 rounded-full bg-white px-5 py-3 text-body-small font-semibold leading-[120%] text-primary hover:bg-primary hover:text-white motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none md:text-body-medium"
          >
            {ctaText}
            <ArrowRightIcon className="size-4 text-primary group-hover:text-white" />
          </ClientLink>
        </div>
      </div>
    </React.Fragment>
  );
}
