import { defaultProductsSearchParams } from "@/constants/product/constants";
import type { ImageBannerResponse } from "@/types/types";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import { Section } from "@/components/ui/common/section";
import { Banner } from "@/components/ui/banner/banner";
import Image from "next/image";

type Props = ImageBannerResponse;

export function ImageBannerWrapper({
  imageUrl,
  title,
  header,
  headerRemark,
  description,
  ctaText,
  ctaUrl,
}: Props) {
  return (
    <div className="w-full">
      <Section className="flex flex-1 flex-row justify-center px-6 xl:px-0">
        <Banner className="relative flex max-w-7xl flex-1 flex-col items-end gap-y-4 rounded-ten">
          <div className="absolute top-0 flex h-[250px] w-full rounded-ten bg-gradient-to-r from-black/60 to-black/0 md:hidden"></div>
          <Image
            src={imageUrl}
            alt={title ?? header}
            quality={100}
            sizes="100vw"
            width={1280}
            height={300}
            className="h-[250px] w-full rounded-ten object-cover md:h-[300px] lg:h-auto"
          />
          <div className="absolute left-6 flex h-full flex-col items-start justify-center gap-y-2 md:right-12 md:gap-y-4">
            <span className="text-body-medium font-normal uppercase leading-[100%] text-white">
              {title}
            </span>
            <h3 className="text-body-xxl font-semibold text-warning md:text-heading-1">
              {headerRemark}
              <span className="font-normal uppercase text-white">{header}</span>
            </h3>
            <p className="text-body-small font-normal text-white md:text-body-medium">
              {description}
            </p>
            <Link
              href={`${ctaUrl}?${defaultProductsSearchParams.toString()}`}
              className="group flex max-w-fit flex-row items-center gap-x-2 rounded-full bg-primary px-5 py-3 text-body-small font-semibold leading-[120%] text-white hover:bg-white hover:text-primary motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none md:text-body-medium"
            >
              {ctaText}
              <ArrowRightIcon className="size-4 text-white group-hover:text-primary" />
            </Link>
          </div>
        </Banner>
      </Section>
    </div>
  );
}
