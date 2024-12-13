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
    <CustomerTestimonial className="flex flex-1 flex-col gap-y-4 rounded-lg bg-white p-6 shadow-[0px_10px_20px_0px_rgba(0,0,0,0.01)]">
      <QuoteIcon className="h-[26px] w-8 text-soft-primary" />
      <p className="line-clamp-5 text-body-small font-normal text-gray-700">
        {text}
      </p>
      <div className="flex flex-1 flex-row items-center gap-x-2">
        <UserAvatar firstName="Dianne" lastName="Russell">
          <Image
            src={avatarUrl}
            width={200}
            height={200}
            alt="Customer's Avatar"
            className="size-[56px] rounded-full"
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
          className="flex flex-1 flex-row justify-end gap-x-0.5"
          rating={rating}
          emptyIcon={<StarIcon className="size-3 text-warning" />}
          filledIcon={<FilledStarIcon className="size-3 text-warning" />}
        />
      </div>
    </CustomerTestimonial>
  );
}
