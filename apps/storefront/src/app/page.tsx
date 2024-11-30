import { Banner } from "@/components/ui/banner";
import { BasicProductCard } from "@/components/ui/basic-product-card";
import { Button } from "@/components/ui/button";
import { CategoryCard } from "@/components/ui/category-card";
import { HomepageCustomerTestimonial } from "@/components/ui/homepage-customer-testimonial";
import { BookOffBrandIcon } from "@/components/ui/icons/book-off-brand";
import { BoxIcon } from "@/components/ui/icons/box";
import { FoodCoUkBrandIcon } from "@/components/ui/icons/food-co-uk-brand";
import { FoodNetworkBrandIcon } from "@/components/ui/icons/food-network-brand";
import { GSeriesBrandIcon } from "@/components/ui/icons/g-series-brand";
import { HeadphonesIcon } from "@/components/ui/icons/headphones";
import { MangoBrandIcon } from "@/components/ui/icons/mango-brand";
import { ShoppingBagCheckedIcon } from "@/components/ui/icons/shopping-bag-checked";
import { StepsBrandIcon } from "@/components/ui/icons/steps-brand";
import { TruckIcon } from "@/components/ui/icons/truck";
import { Section } from "@/components/ui/section";
import { SectionContent } from "@/components/ui/section-content";
import { SectionTitle } from "@/components/ui/section-title";
import { StoreHighlight } from "@/components/ui/store-highlight";
import { StoreHighlights } from "@/components/ui/store-highlights";
import { SummarizedProductCard } from "@/components/ui/summarized-product-card";
import discountBanner from "@/public/images/discount-banner.png";
import firstOfferBanner from "@/public/images/first-offer-banner.png";
import freshFruitCategory from "@/public/images/fresh-fruit.png";
import greenAppleProduct from "@/public/images/green-apple-product.png";
import headerBigBanner from "@/public/images/header-big-banner.png";
import headerSecondBanner from "@/public/images/header-second-banner.png";
import headerThirdBanner from "@/public/images/header-third-banner.png";
import secondOfferBanner from "@/public/images/second-offer-banner.png";
import thirdOfferBanner from "@/public/images/third-offer-banner.png";
import {
  Category,
  CustomerTestimonial,
  Product,
  StoreHighlight as TStoreHighlight,
} from "@/types/types";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {
  const storeHighlights: TStoreHighlight[] = [
    {
      icon: <TruckIcon className="h-10 w-10 text-primary" />,
      title: "Free Shipping",
      description: "Free shipping on all your orders",
    },
    {
      icon: <HeadphonesIcon className="h-10 w-10 text-primary" />,
      title: "Customer Support 24/7",
      description: "Instant access to Support",
    },
    {
      icon: <ShoppingBagCheckedIcon className="h-10 w-10 text-primary" />,
      title: "100% Secure Payment",
      description: "We ensure your money is save",
    },
    {
      icon: <BoxIcon className="h-10 w-10 text-primary" />,
      title: "Money-Back Guarantee",
      description: "30 Days Money-Back Guarantee",
    },
  ];
  const category: Category = {
    categoryId: "a55fef0a-230d-402f-b263-9fe44d226a9f",
    image: <Image src={freshFruitCategory} alt="Category Image" />,
    title: "Fresh Fruit",
    url: "/products",
  };
  const popularProduct: Product = {
    id: "868b9f7f-620c-490c-9c8b-b45cccb4507f",
    name: "Green Apple",
    price: 20.99,
    discountedPrice: 14.99,
    currencySymbol: "$",
    currencyCode: "USD",
    image: <Image src={greenAppleProduct} alt="Green Apple" />,
    rating: 4,
    totalRatings: 25,
    tags: [
      { text: "50% Off", type: "danger" },
      { text: "Top Seller", type: "info" },
    ],
  };
  const customerTestimonial: CustomerTestimonial = {
    id: "f015e892-5c95-4a0e-957d-27acac18860d",
    text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
    avatarUrl: "https://i.pravatar.cc/200?img=45",
    rating: 5,
    fullName: "Dianne Russell",
  };
  const brandIcons = [
    <StepsBrandIcon
      key={0}
      className="h-8 w-full text-gray-200 hover:text-primary"
    />,
    <MangoBrandIcon
      key={1}
      className="h-8 w-full text-gray-200 hover:text-primary"
    />,
    <FoodNetworkBrandIcon
      key={2}
      className="h-8 w-full text-gray-200 hover:text-primary"
    />,
    <FoodCoUkBrandIcon
      key={3}
      className="h-8 w-full text-gray-200 hover:text-primary"
    />,
    <BookOffBrandIcon
      key={4}
      className="h-8 w-full text-gray-200 hover:text-primary"
    />,
    <GSeriesBrandIcon
      key={5}
      className="h-8 w-full text-gray-200 hover:text-primary"
    />,
  ];

  return (
    <div className="flex flex-1 flex-col">
      <div className="flex flex-1 flex-row justify-center items-center my-6 px-6 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 max-w-7xl">
          <Banner className="relative md:row-span-2 md:col-span-2 rounded-[10px]">
            <Image
              src={headerBigBanner}
              alt="Header Banner"
              className="rounded-[10px] h-auto w-full"
            />
            <div className="absolute top-0 left-0 bg-gradient-to-br from-black/60 to-black/0 h-full w-full rounded-[10px]"></div>
            <div className="absolute top-0 flex flex-1 flex-col gap-y-7 h-full justify-center px-12">
              <h2 className="text-heading-5 md:text-heading-2 font-semibold text-white text-center md:text-left">
                Fresh and Healthy Organic Food
              </h2>
              <div className="flex flex-col border-l-2 border-primary gap-y-2 pl-2">
                <span className="text-body-xl font-medium text-white">
                  Sale up to
                  <span className="bg-warning rounded-[5px] font-semibold px-3 py-1 ml-2 uppercase">
                    30% Off
                  </span>
                </span>
                <span className="text-body-small font-normal text-white">
                  Free shipping on all your orders
                </span>
              </div>
              <Button className="flex flex-row gap-x-2 items-center text-primary rounded-full bg-white max-w-fit px-5 py-3">
                Shop now <ArrowRightIcon className="h-4 w-4 text-primary" />
              </Button>
            </div>
          </Banner>
          <Banner className="relative col-span-1 rounded-[10px]">
            <Image
              src={headerSecondBanner}
              alt="Second Header Banner"
              className="rounded-[10px]"
            />
            <div className="absolute top-0 left-0 flex flex-1 flex-col gap-y-6 px-8 h-full justify-center">
              <span className="text-gray-900 font-medium text-body-small leading-[100%] uppercase">
                Summer Sale
              </span>
              <h5 className="text-heading-5 font-semibold text-gray-900 uppercase">
                75% Off
              </h5>
              <span className="text-body-small font-normal text-gray-600">
                Only Fruits and Vegetables
              </span>
              <Button className="flex flex-row gap-x-2 items-center text-white max-w-fit bg-primary group hover:bg-white hover:text-primary rounded-full px-5 py-3">
                Shop now{" "}
                <ArrowRightIcon className="h-4 w-4 text-white group-hover:text-primary" />
              </Button>
            </div>
          </Banner>
          <Banner className="relative col-span-1 max-w-fit rounded-[10px]">
            <Image
              src={headerThirdBanner}
              alt="Third Header Banner"
              className="rounded-[10px]"
            />
            <div className="absolute top-0 left-0 bg-green-gray-900/80 h-full w-full rounded-[10px]"></div>
            <div className="absolute top-0 left-0 flex flex-1 flex-col gap-y-8 items-center px-12 h-full justify-center">
              <span className="text-white font-medium text-body-small leading-[100%] uppercase text-center">
                Best Deal
              </span>
              <h5 className="text-white text-heading-5 font-semibold text-center">
                Special Products of the Month
              </h5>
              <Button className="flex flex-row gap-x-2 items-center text-primary max-w-fit px-5 py-3">
                Shop now <ArrowRightIcon className="h-4 w-4 text-primary" />
              </Button>
            </div>
          </Banner>
        </div>
      </div>
      <div className="flex flex-1 justify-center px-6 md:px-0">
        <StoreHighlights className="flex flex-1 flex-col md:flex-row rounded-lg p-10 shadow-[0px_8px_40px_0px_rgba(0,38,3,0.08)] justify-center items-center max-w-7xl">
          {storeHighlights.map(({ description, icon, title }, index) => (
            <StoreHighlight
              key={index}
              className="flex flex-1 flex-row gap-x-4 w-full justify-center"
            >
              {icon}
              <div className="flex flex-1 flex-col gap-y-2">
                <h3 className="text-body-medium font-semibold text-gray-900">
                  {title}
                </h3>
                <p className="text-body-small font-normal text-gray-400">
                  {description}
                </p>
              </div>
            </StoreHighlight>
          ))}
        </StoreHighlights>
      </div>
      <div className="flex flex-1 flex-col gap-y-[60px] mt-[60px] items-center">
        <Section className="flex flex-1 flex-col gap-y-8 px-6 md:px-0">
          <SectionTitle className="max-w-7xl w-full">
            <div className="flex flex-1 flex-row">
              <h2 className="text-heading-5 font-semibold text-gray-900">
                Popular Categories
              </h2>
              <div className="flex flex-1 flex-row justify-end">
                <Link
                  href="/products"
                  className="text-body-medium font-medium text-primary flex flex-row gap-x-2 items-center justify-end"
                >
                  View All
                  <ArrowRightIcon className="h-4 w-4 text-primary" />
                </Link>
              </div>
            </div>
          </SectionTitle>
          <SectionContent className="grid grid-cols-2 gap-4 md:grid-cols-6 md:gap-6 max-w-7xl w-full">
            {Array.from({ length: 12 }).map((_value, index) => (
              <Link key={index} href={category.url}>
                <CategoryCard className="flex flex-1 flex-col items-center justify-center gap-y-4 bg-white border border-gray-100 rounded-[5px] pt-4 pb-6 hover:border-soft-primary/45 hover:shadow-[0px_0px_12px_0px_rgba(132,209,135,0.32)] hover:shadow-soft-primary/60">
                  {category?.image}
                  <span className="text-body-large font-medium text-gray-900 text-center whitespace-break-spaces">
                    {category.title}
                  </span>
                </CategoryCard>
              </Link>
            ))}
          </SectionContent>
        </Section>
        <Section className="flex flex-1 flex-col gap-y-8 px-6 md:px-0">
          <SectionTitle className="max-w-7xl w-full">
            <div className="flex flex-1 flex-row">
              <h2 className="text-heading-5 font-semibold text-gray-900">
                Popular Products
              </h2>
              <div className="flex flex-1 flex-row justify-end">
                <Link
                  href="/products"
                  className="text-body-medium font-medium text-primary flex flex-row gap-x-2 items-center justify-end"
                >
                  View All
                  <ArrowRightIcon className="h-4 w-4 text-primary" />
                </Link>
              </div>
            </div>
          </SectionTitle>
          <SectionContent className="max-w-7xl w-full grid grid-cols-2 gap-4 md:grid-cols-5 md:gap-6">
            {Array.from({ length: 10 }).map((_value, index) => (
              <BasicProductCard
                key={index}
                product={popularProduct}
                isFirstOnList={index === 0}
              />
            ))}
          </SectionContent>
        </Section>
        <Section className="flex flex-1 flex-col gap-y-8 px-6 md:px-0">
          <SectionContent className="max-w-7xl w-full flex flex-1 flex-col md:flex-row gap-6">
            <Banner className="relative flex flex-1 flex-col gap-y-4 items-center">
              <Image src={firstOfferBanner} alt="Offer Banner" />
              <div className="absolute top-10 left-0 flex flex-1 flex-col gap-y-4 items-center w-full">
                <span className="text-body-small font-normal leading-[100%] text-white uppercase">
                  Best Deals
                </span>
                <h3 className="text-heading-3 font-semibold text-white">
                  Sale of the Month
                </h3>
                <div className="flex flex-1 flex-row gap-x-2">
                  <div className="flex flex-1 flex-col gap-y-2">
                    {/* <BannerCounter endDate={} /> */}
                    <span className="text-white"></span>
                    <span className="text-white uppercase"></span>
                  </div>
                </div>
                <Link
                  href="/products"
                  className="flex flex-row gap-x-2 items-center text-primary rounded-full bg-white max-w-fit px-5 py-3"
                >
                  Shop now <ArrowRightIcon className="h-4 w-4 text-primary" />
                </Link>
              </div>
            </Banner>
            <Banner className="relative flex flex-1 flex-col gap-y-4 items-center">
              <Image src={secondOfferBanner} alt="Offer Banner" />
              <div className="absolute top-10 left-0 flex flex-1 flex-col gap-y-4 items-center w-full">
                <span className="text-body-small font-normal leading-[100%] text-white uppercase">
                  85% Fat Free
                </span>
                <h3 className="text-heading-3 font-semibold text-white">
                  Low-Fat Meat
                </h3>
                <span className="text-white">
                  Starting at <span className="text-warning">$79.99</span>
                </span>
                <Link
                  href="/products"
                  className="flex flex-row gap-x-2 items-center text-primary rounded-full bg-white max-w-fit px-5 py-3"
                >
                  Shop now <ArrowRightIcon className="h-4 w-4 text-primary" />
                </Link>
              </div>
            </Banner>
            <Banner className="relative flex flex-1 flex-col gap-y-4 items-center">
              <Image src={thirdOfferBanner} alt="Offer Banner" />
              <div className="absolute top-10 left-0 flex flex-1 flex-col gap-y-4 items-center w-full">
                <span className="text-body-small font-normal leading-[100%] text-gray-900 uppercase">
                  Summer Sale
                </span>
                <h3 className="text-heading-3 font-semibold text-gray-900">
                  100% Fresh Fruit
                </h3>
                <span className="text-body-xl font-medium text-gray-900">
                  Up to
                  <span className="bg-gray-900 rounded-[5px] font-semibold px-3 py-1 ml-2 uppercase text-[#FCC900]">
                    64% Off
                  </span>
                </span>
                <Link
                  href="/products"
                  className="flex flex-row gap-x-2 items-center text-primary rounded-full bg-white max-w-fit px-5 py-3"
                >
                  Shop now <ArrowRightIcon className="h-4 w-4 text-primary" />
                </Link>
              </div>
            </Banner>
          </SectionContent>
        </Section>
        <div className="bg-[#F7F7F7] py-[60px] w-full px-6 md:px-0">
          <div className="flex flex-1 flex-row justify-center">
            <Section className="flex flex-1 flex-col gap-y-8 max-w-7xl">
              <SectionTitle className="w-full">
                <div className="flex flex-1 flex-row">
                  <h2 className="text-heading-5 font-semibold text-gray-900">
                    Hot Deals
                  </h2>
                  <div className="flex flex-1 flex-row justify-end">
                    <Link
                      href="/products"
                      className="text-body-medium font-medium text-primary flex flex-row gap-x-2 items-center justify-end"
                    >
                      View All
                      <ArrowRightIcon className="h-4 w-4 text-primary" />
                    </Link>
                  </div>
                </div>
              </SectionTitle>
              <SectionContent className="max-w-7xl w-full grid grid-cols-2 gap-4 md:grid-cols-5 md:gap-6">
                {Array.from({ length: 12 }).map((_value, index) => (
                  <React.Fragment key={index}>
                    {index === 0 ? (
                      <SummarizedProductCard
                        product={popularProduct}
                        isFirstOnList={index === 0}
                      />
                    ) : (
                      <BasicProductCard
                        product={popularProduct}
                        isFirstOnList={index === 0}
                      />
                    )}
                  </React.Fragment>
                ))}
              </SectionContent>
            </Section>
          </div>
        </div>
        <Section className="max-w-7xl px-6 md:px-0">
          <Banner className="relative flex flex-1 flex-col gap-y-4 items-end">
            <Image src={discountBanner} alt="Offer Banner" />
            <div className="absolute right-12 flex flex-col gap-y-4 h-full items-start justify-center">
              <span className="text-body-medium font-normal leading-[100%] text-white uppercase">
                Summer Sale
              </span>
              <h3 className="text-heading-1 font-semibold text-warning">
                37%{" "}
                <span className="font-normal uppercase text-white">Off</span>
              </h3>
              <p className="text-body-medium font-normal text-white">
                Free Shipping and 30 days money-back guarantee.
              </p>
              <Link
                href="/products"
                className="flex flex-row gap-x-2 items-center text-white rounded-full bg-primary max-w-fit px-5 py-3"
              >
                Shop now <ArrowRightIcon className="h-4 w-4 text-white" />
              </Link>
            </div>
          </Banner>
        </Section>
        <Section className="flex flex-1 flex-col gap-y-8 px-6 md:px-0">
          <SectionTitle className="max-w-7xl w-full">
            <div className="flex flex-1 flex-row">
              <h2 className="text-heading-5 font-semibold text-gray-900">
                Featured Products
              </h2>
              <div className="flex flex-1 flex-row justify-end">
                <Link
                  href="/products"
                  className="text-body-medium font-medium text-primary flex flex-row gap-x-2 items-center justify-end"
                >
                  View All
                  <ArrowRightIcon className="h-4 w-4 text-primary" />
                </Link>
              </div>
            </div>
          </SectionTitle>
          <SectionContent className="max-w-7xl w-full grid grid-cols-2 gap-4 md:grid-cols-5 md:gap-6">
            {Array.from({ length: 5 }).map((_value, index) => (
              <BasicProductCard
                key={index}
                product={popularProduct}
                isFirstOnList={index === 0}
              />
            ))}
          </SectionContent>
        </Section>
        <div className="bg-[#F7F7F7] py-[60px] w-full px-6 md:px-0">
          <div className="flex flex-1 flex-row justify-center px-6 md:px-0">
            <Section className="flex flex-1 flex-col gap-y-8 max-w-7xl">
              <SectionTitle className="w-full">
                <div className="flex flex-1 flex-row">
                  <h2 className="text-heading-5 font-semibold text-gray-900 text-center md:text-left">
                    Customer Testimonials
                  </h2>
                  <div className="flex-1 flex-row justify-end gap-x-3 hidden md:flex">
                    <Button className="rounded-full h-[45px] w-[45px] border border-gray-100 flex flex-row items-center justify-center group hover:bg-primary hover:border-none">
                      <ArrowLeftIcon className="h-4 w-4 text-gray-900 group-hover:text-white" />
                    </Button>
                    <Button className="rounded-full h-[45px] w-[45px] border border-gray-100 flex flex-row items-center justify-center group hover:bg-primary hover:border-none">
                      <ArrowRightIcon className="h-4 w-4 text-gray-900 group-hover:text-white" />
                    </Button>
                  </div>
                </div>
              </SectionTitle>
              <SectionContent className="w-full flex flex-1 flex-col md:flex-row gap-x-6">
                {Array.from({ length: 3 }).map((_value, index) => (
                  <HomepageCustomerTestimonial
                    key={index}
                    testimonial={customerTestimonial}
                  />
                ))}
              </SectionContent>
            </Section>
          </div>
        </div>
        <div className="w-full px-6 md:px-0">
          <div className="flex flex-1 flex-row justify-center">
            <Section className="flex flex-1 flex-col gap-y-8 py-[60px] max-w-7xl">
              <SectionTitle className="w-full">
                <div className="flex flex-1 flex-row">
                  <h2 className="text-heading-5 font-semibold text-gray-900 text-center">
                    Trusted by Leading Brands
                  </h2>
                </div>
              </SectionTitle>
              <SectionContent className="flex flex-1 flex-col gap-y-4 flex-wrap md:flex-row justify-between max-w-7xl">
                {brandIcons.map((brandIcon, index) => (
                  <div key={index}>{brandIcon}</div>
                ))}
              </SectionContent>
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
}
