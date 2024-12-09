import { CustomerTestimonial as TCustomerTestimonial } from "@/types/types";
import React from "react";
import { QuoteIcon } from "@/components/ui/icons/quote";
import Image from "next/image";
import { Rating } from "@/components/ui/product/rating";
import { StarIcon } from "@heroicons/react/24/outline";
import { StarIcon as FilledStarIcon } from "@heroicons/react/24/solid";
import { CustomerTestimonial } from "@/components/ui/customer/customer-testimonial";
import { UserAvatar } from "@/components/ui/user/user-avatar";

type Props = { testimonial: TCustomerTestimonial };

export function HomepageCustomerTestimonial({
  testimonial: { avatarUrl, fullName, rating, text },
}: Props) {
  return (
    <CustomerTestimonial className="flex flex-1 flex-col gap-y-4 p-6 rounded-lg shadow-[0px_10px_20px_0px_rgba(0,0,0,0.01)] bg-white">
      <QuoteIcon className="h-[26px] w-8 text-soft-primary" />
      <p className="text-body-small font-normal text-gray-700 line-clamp-5">
        {text}
      </p>
      <div className="flex flex-1 flex-row items-center gap-x-2">
        <UserAvatar firstName="Dianne" lastName="Russell">
          <Image
            src={avatarUrl}
            width={200}
            height={200}
            alt="Customer's Avatar"
            className="rounded-full h-[56px] w-[56px]"
          />
        </UserAvatar>
        <div className="flex flex-1 flex-col justify-center">
          <span className="text-body-medium font-medium text-gray-900">
            {fullName}
          </span>
          <span className="text-body-small font-normal text-gray-400">
            Customer
          </span>
        </div>
        <Rating
          className="flex flex-1 flex-row gap-x-0.5 justify-end"
          rating={rating}
          emptyIcon={<StarIcon className="text-warning h-3 w-3" />}
          filledIcon={<FilledStarIcon className="text-warning h-3 w-3" />}
        />
      </div>
    </CustomerTestimonial>
  );
}
