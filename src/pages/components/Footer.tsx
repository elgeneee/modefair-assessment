"use client";

// import { cn } from "@/utils/cn";
import { clsx } from "clsx";
import React, { useState } from "react";

export const Footer = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className="flex justify-center bg-[#F5F5F7]">
      <div className="w-full max-w-7xl px-4 py-2 text-left text-xs text-[#767677]">
        <div className="mt-6 space-y-2">
          <p>
            * Monthly pricing is after purchase using credit card interest at 0%
            pa over a 24-month tenure. Monthly pricing is rounded to the nearest
            ringgit and displayed for each product added in the order. Exact
            pricing will be for the whole order and provided by your bank
            subject to your bank’s terms and conditions.
          </p>
          <p>
            ◊◊ Terms & Conditions of 0% interest for 6-, 12- and 24-month
            instalment payment plans{" "}
          </p>
          <p>
            0% interest instalment payment plans are available to qualified
            Malaysia residents and provided by participating banks. To qualify
            for the 0% interest for 6-, 12- or 24-month instalment offers, your
            purchase minimum value must be MYR 2,000 or more in a single
            transaction. All purchases on 0% interest instalment plans are
            subject to approval by your credit card issuer. Refer to your credit
            card issuer’s website for conditions, fees and charges.
          </p>
          <p>
            Instalment offers are only available to individual customers using
            consumer credit cards. Apple Employee EPP orders, Education Store
            orders, business purchases and institutional purchases are not
            eligible for this offer. Only Visa and Mastercard credit cards are
            eligible for this offer. If your instalment order is not approved by
            your credit card issuer, we will not be informed of the reason.
            Please contact your credit card issuer for further information.
            Purchases will be billed to your account upon order placement. Offer
            is available on advertised or ticketed price.
          </p>
          <p>The information is current as of 24 May 2024.</p>
          <p>
            ** Trade-in service is provided by Apple’s trade-in partners.
            Trade-in value quotes are estimated only and actual values may be
            lower than the estimation. Trade-in values vary based on the
            condition, year and model of your trade-in device. Not all devices
            are eligible for credit. You must be at least the age of majority to
            be eligible to trade in for credit. Trade-in value may be applied
            towards qualifying new device purchase. Actual value awarded is
            based on receipt of a qualifying device matching the description
            provided when the estimate was made. Apple’s trade-in partners
            reserve the right to refuse, cancel or limit quantity of any
            trade-in transaction for any reason. More details are available from
            Apple’s trade-in partner for trade-in and recycling of eligible
            devices. Restrictions and limitations may apply. For recycling
            eligible equipment Terms and restrictions may apply.
          </p>
          <p>
            1. 1GB = 1 billion bytes and 1TB = 1 trillion bytes; actual
            formatted capacity less.
          </p>
          <p>
            2. The displays on the 14-inch and 16-inch MacBook Pro have rounded
            corners at the top. When measured as a standard rectangular shape,
            the screens are 14.2 inches and 16.2 inches diagonally (actual
            viewable area is less).
          </p>
          <p>
            We use your location to show you delivery options faster. We found
            your location using your IP address or because you entered it during
            a previous visit to Apple.
          </p>
        </div>
        <hr className="my-3" />

        <nav className="flex items-center space-x-2">
          <a href="https://www.apple.com/my/" className="flex items-center">
            <span
              className="as-globalfooter-breadcrumbs-home-icon"
              aria-hidden="true"
            ></span>
            <span className="as-globalfooter-breadcrumbs-home-label">
              Apple
            </span>
          </a>
          <span>&gt;</span>
          <a href="#" className="flex items-center">
            <span className="as-globalfooter-breadcrumbs-home-label">Mac</span>
          </a>
          <span>&gt;</span>
          <a href="#" className="flex items-center">
            <span className="as-globalfooter-breadcrumbs-home-label">
              Macbook Pro
            </span>
          </a>
          <span>&gt;</span>
          <a href="#" className="flex items-center">
            <span className="as-globalfooter-breadcrumbs-home-label">
              Buy Macbook Pro
            </span>
          </a>
        </nav>
      </div>
    </div>
  );
};
