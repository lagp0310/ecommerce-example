import { ClientLink } from "@/components/navigation/client-link";
import { defaultProductsSearchParams } from "@/constants/product/constants";
import type { HeaderBannerResponse } from "@/types/types";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

type Props = HeaderBannerResponse;

export function HeaderSaleRemarkWrapper({
  imageUrl,
  title,
  ctaText,
  ctaUrl,
  subtitle,
  subtitleComplement,
  subtitleRemark,
}: Props) {
  return (
    <React.Fragment>
      <Image
        src={imageUrl}
        alt={title}
        quality={100}
        sizes="100vw"
        width={300}
        height={400}
        className="h-[300px] w-full rounded-ten object-cover sm:h-[400px] lg:h-auto"
      />
      <div className="absolute left-0 top-0 size-full rounded-ten bg-gradient-to-br from-black/60 to-black/0"></div>
      <div className="absolute top-0 flex h-full flex-1 flex-col justify-center gap-y-2 px-6 md:gap-y-7 md:px-12">
        <h2 className="text-body-xxl font-semibold text-white md:text-heading-2">
          {title}
        </h2>
        <div className="flex flex-col gap-y-2 border-l-2 border-primary pl-2">
          <span className="text-body-small font-medium text-white md:text-body-xl">
            {subtitle}
            <span className="ml-2 rounded-[5px] bg-warning px-3 py-1 font-semibold uppercase">
              {subtitleRemark}
            </span>
          </span>
          <span className="text-body-tiny font-normal text-white md:text-body-small">
            {subtitleComplement}
          </span>
        </div>
        <ClientLink
          href={`${ctaUrl}?${defaultProductsSearchParams.toString()}`}
          className="group flex max-w-fit flex-row items-center gap-x-2 rounded-full bg-white px-5 py-3 text-body-small font-semibold leading-[120%] text-primary hover:bg-primary hover:text-white motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none md:text-body-medium"
        >
          {ctaText}
          <ArrowRightIcon className="size-4 text-primary group-hover:text-white" />
        </ClientLink>
      </div>
    </React.Fragment>
  );
}
