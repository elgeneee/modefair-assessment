import React, { useState } from "react";
import { useHasStickyFooterStore } from "../../../utils/store";

export const Footer = () => {
  const { hasStickyFooter } = useHasStickyFooterStore();

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
          {hasStickyFooter && (
            <>
              <p>
                3. Testing conducted by Apple in September and October 2023
                using pre-production 14-inch MacBook Pro systems with Apple M3
                Pro, 12-core CPU, 18-core GPU, 36GB of RAM and 4TB SSD. Final
                Cut Pro 10.6.9 tested using a 1-minute picture-in-picture
                project with multiple streams of Apple ProRes 422 video at
                8192x4320 resolution and 30 frames per second, as well as a
                1-minute picture-in-picture project with multiple streams of
                Apple ProRes 422 video at 3840x2160 resolution and 29.97 frames
                per second. Performance tests are conducted using specific
                computer systems and reflect the approximate performance of
                MacBook Pro.
              </p>
              <p>
                4. Testing conducted by Apple in September and October 2023
                using pre-production 14-inch MacBook Pro systems with Apple M3
                Pro, 12-core CPU, 18-core GPU, 36GB of RAM and 4TB SSD. Final
                Cut Pro 10.6.9 tested using a 1-minute picture-in-picture
                project with multiple streams of Apple ProRes 422 video at
                8192x4320 resolution and 30 frames per second, as well as a
                1-minute picture-in-picture project with multiple streams of
                Apple ProRes 422 video at 3840x2160 resolution and 29.97 frames
                per second. Performance tests are conducted using specific
                computer systems and reflect the approximate performance of
                MacBook Pro.
              </p>
              <p>
                5. Testing conducted by Apple in September and October 2023
                using pre-production 14-inch MacBook Pro systems with Apple M3
                Max, 16-core CPU, 40-core GPU, 128GB of RAM and 8TB SSD. Final
                Cut Pro 10.6.9 tested using a 1-minute picture-in-picture
                project with multiple streams of Apple ProRes 422 video at
                8192x4320 resolution and 30 frames per second, as well as a
                1-minute picture-in-picture project with multiple streams of
                Apple ProRes 422 video at 3840x2160 resolution and 29.97 frames
                per second. Performance tests are conducted using specific
                computer systems and reflect the approximate performance of
                MacBook Pro.{" "}
              </p>
              <p>
                6. Testing conducted by Apple in September and October 2023
                using pre-production 16-inch MacBook Pro systems with Apple M3
                Pro, 12-core CPU, 18-core GPU, 36GB of RAM and 512GB SSD, and
                pre-production 14-inch MacBook Pro systems with Apple M3 Pro,
                12-core CPU, 18-core GPU, 18GB of RAM and 1TB SSD. 16-inch
                MacBook Pro systems tested with Apple 140W USB-C Power Adapter
                (Model A2452), and 14-inch MacBook Pro systems tested with Apple
                96W USB-C Power Adapter (Model A2166), both with USB-C to
                MagSafe 3 Cable (Model A2363). Fast-charge testing conducted
                with drained MacBook Pro units. Charge time varies with settings
                and environmental factors; actual results will vary.
              </p>
              <p>
                7. Testing conducted by Apple in September and October 2023
                using pre-production 16-inch MacBook Pro systems with Apple M3
                Pro, 12-core CPU, 18-core GPU, 36GB of RAM and 4TB SSD. Final
                Cut Pro 10.6.9 tested using a 1-minute picture-in-picture
                project with multiple streams of Apple ProRes 422 video at
                8192x4320 resolution and 30 frames per second, as well as a
                1-minute picture-in-picture project with multiple streams of
                Apple ProRes 422 video at 3840x2160 resolution and 29.97 frames
                per second. Performance tests are conducted using specific
                computer systems and reflect the approximate performance of
                MacBook Pro.
              </p>
              <p>
                8. Testing conducted by Apple in September and October 2023
                using pre-production 16-inch MacBook Pro systems with Apple M3
                Max, 16-core CPU, 40-core GPU, 128GB of RAM and 8TB SSD. Final
                Cut Pro 10.6.9 tested using a 1-minute picture-in-picture
                project with multiple streams of Apple ProRes 422 video at
                8192x4320 resolution and 30 frames per second, as well as a
                1-minute picture-in-picture project with multiple streams of
                Apple ProRes 422 video at 3840x2160 resolution and 29.97 frames
                per second. Performance tests are conducted using specific
                computer systems and reflect the approximate performance of
                MacBook Pro.
              </p>
            </>
          )}
          {hasStickyFooter ? (
            <>
              <p>
                *** Apple TV+ offer available to new and qualified returning
                subscribers only. RM 29.90/month after free trial. Only one
                offer per Apple ID and only one offer per family if you’re part
                of a Family Sharing group, regardless of the number of devices
                that you or your family purchase. This offer is not available if
                you or your Family have previously accepted an Apple TV+
                three-months-free or one-year-free offer. Offer valid for three
                months after eligible device is activated. Plan automatically
                renews until cancelled. Restrictions and other terms apply.
              </p>
              <p>
                ^ New subscribers only. RM 29.90/month after free trial. Plan
                automatically renews after trial until cancelled. We use your
                location to show you delivery options faster. We found your
                location using your IP address or because you entered it during
                a previous visit to Apple.
              </p>
            </>
          ) : (
            <p>
              We use your location to show you delivery options faster. We found
              your location using your IP address or because you entered it
              during a previous visit to Apple.
            </p>
          )}
        </div>
        <hr className="my-3 border-[#D2D2D4] border-[0.4]" />

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

        <div className="hidden grid-cols-2 gap-8 py-7 md:grid-cols-5 lg:grid">
          <div>
            <h2 className="mb-3 text-xs font-medium text-black">
              Shop and Learn
            </h2>
            <ul className="space-y-2 font-light">
              <li className="">
                <a href="#" className="hover:underline">
                  Store
                </a>
              </li>
              <li className="">
                <a href="#" className="hover:underline">
                  Mac
                </a>
              </li>
              <li className="">
                <a href="#" className="hover:underline">
                  iPad
                </a>
              </li>
              <li className="">
                <a href="#" className="hover:underline">
                  iPhone
                </a>
              </li>
              <li className="">
                <a href="#" className="hover:underline">
                  Watch
                </a>
              </li>
              <li className="">
                <a href="#" className="hover:underline">
                  Airpods
                </a>
              </li>
              <li className="">
                <a href="#" className="hover:underline">
                  TV & Home
                </a>
              </li>
              <li className="">
                <a href="#" className="hover:underline">
                  AirTag
                </a>
              </li>
              <li className="">
                <a href="#" className="hover:underline">
                  Accessories
                </a>
              </li>
              <li className="">
                <a href="#" className="hover:underline">
                  Gift Cards
                </a>
              </li>
            </ul>
            <h2 className="mb-3 mt-8 text-xs font-medium text-black">
              Apple Wallet
            </h2>
            <ul className="space-y-2 font-light">
              <li className="">
                <a href="#" className="hover:underline">
                  Wallet
                </a>
              </li>
              <li className="">
                <a href="#" className="hover:underline">
                  Apple Pay
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-3 text-xs font-medium text-black">Account</h2>
            <ul className="space-y-2 font-light">
              <li className="">
                <a href="#" className="hover:underline">
                  Manage Your Apple ID
                </a>
              </li>
              <li className="">
                <a href="#" className="hover:underline">
                  Apple Store Account
                </a>
              </li>
              <li className="">
                <a href="#" className="hover:underline">
                  iCloud.com
                </a>
              </li>
            </ul>
            <h2 className="mb-3 mt-8 text-xs font-medium text-black">
              Entertainment
            </h2>
            <ul className="space-y-2 font-light">
              <li className="">
                <a href="#" className="hover:underline">
                  Apple One
                </a>
              </li>
              <li className="">
                <a href="#" className="hover:underline">
                  Apple TV+
                </a>
              </li>
              <li className="">
                <a href="#" className="hover:underline">
                  Apple Music
                </a>
              </li>
              <li className="">
                <a href="#" className="hover:underline">
                  Apple Arcade
                </a>
              </li>
              <li className="">
                <a href="#" className="hover:underline">
                  Apple Fitness+
                </a>
              </li>
              <li className="">
                <a href="#" className="hover:underline">
                  Apple Podcasts
                </a>
              </li>
              <li className="">
                <a href="#" className="hover:underline">
                  Apple Books
                </a>
              </li>
              <li className="">
                <a href="#" className="hover:underline">
                  Apple Store
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-3 text-xs font-medium text-black">Apple Store</h2>
            <ul className="space-y-2 font-light">
              <li className="">
                <a href="#" className="hover:underline">
                  Apple Store App
                </a>
              </li>
              <li className="">
                <a href="#" className="hover:underline">
                  Financing
                </a>
              </li>
              <li className="">
                <a href="#" className="hover:underline">
                  Apple Trade In
                </a>
              </li>
              <li className="">
                <a href="#" className="hover:underline">
                  Order Status
                </a>
              </li>
              <li className="">
                <a href="#" className="hover:underline">
                  Shopping Help
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-3 text-xs font-medium text-black">
              For Business
            </h2>
            <ul className="space-y-2 font-light">
              <li className="">
                <a href="#" className="hover:underline">
                  Apple and Business
                </a>
              </li>
              <li className="">
                <a href="#" className="hover:underline">
                  Shop for Business
                </a>
              </li>
            </ul>
            <h2 className="mb-3 mt-8 text-xs font-medium text-black">
              For Education
            </h2>
            <ul className="space-y-2 font-light">
              <li className="">
                <a href="#" className="hover:underline">
                  Apple and Education
                </a>
              </li>
              <li className="">
                <a href="#" className="hover:underline">
                  Shop for University
                </a>
              </li>
            </ul>
            <h2 className="mb-3 mt-8 text-xs font-medium text-black">
              For Healthcare
            </h2>
            <ul className="space-y-2 font-light">
              <li className="">
                <a href="#" className="hover:underline">
                  Apple in Healthcare
                </a>
              </li>
              <li className="">
                <a href="#" className="hover:underline">
                  Health on Apple Watch
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-3 text-xs font-medium text-black">
              Apple Values
            </h2>
            <ul className="space-y-2 font-light">
              <li className="">
                <a href="#" className="hover:underline">
                  Accessibility
                </a>
              </li>
              <li className="">
                <a href="#" className="hover:underline">
                  Education
                </a>
              </li>
              <li className="">
                <a href="#" className="hover:underline">
                  Environment
                </a>
              </li>
              <li className="">
                <a href="#" className="hover:underline">
                  Privacy
                </a>
              </li>
              <li className="">
                <a href="#" className="hover:underline">
                  Supply Chain
                </a>
              </li>
            </ul>
            <h2 className="mb-3 mt-8 text-xs font-medium text-black">
              About Apple
            </h2>
            <ul className="space-y-2 font-light">
              <li className="">
                <a href="#" className="hover:underline">
                  Newsroom
                </a>
              </li>
              <li className="">
                <a href="#" className="hover:underline">
                  Apple Leadership
                </a>
              </li>
              <li className="">
                <a href="#" className="hover:underline">
                  Career Opportunities
                </a>
              </li>
              <li className="">
                <a href="#" className="hover:underline">
                  Investors
                </a>
              </li>
              <li className="">
                <a href="#" className="hover:underline">
                  Ethics & Compliance
                </a>
              </li>
              <li className="">
                <a href="#" className="hover:underline">
                  Events
                </a>
              </li>
              <li className="">
                <a href="#" className="hover:underline">
                  Contact Apple
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="my-4 grid grid-cols-1 divide-y divide-[#D2D2D4] border-y border-[#D2D2D4] lg:hidden">
          <a className="cursor-pointer py-3 text-black">Shop and Learn</a>
          <a className="cursor-pointer py-3 text-black">Apple Wallet</a>
          <a className="cursor-pointer py-3 text-black">Account</a>
          <a className="cursor-pointer py-3 text-black">Entertainment</a>
          <a className="cursor-pointer py-3 text-black">Apple Store</a>
          <a className="cursor-pointer py-3 text-black">For Business</a>
          <a className="cursor-pointer py-3 text-black">For Education</a>
          <a className="cursor-pointer py-3 text-black">For Healthcare</a>
          <a className="cursor-pointer py-3 text-black">Apple Values</a>
          <a className="cursor-pointer py-3 text-black">About Apple</a>
        </div>
        <div>
          <p>
            More ways to shop:{" "}
            <span className="text-[#06C] underline">
              <a>Find a retailer</a>
            </span>{" "}
            near you. Or call 1800-80-6419.
          </p>
        </div>
        <hr className="my-4 hidden border-[#D2D2D4] border-[0.4] lg:block" />

        <div className="flex flex-col pb-10 md:flex-row md:justify-between">
          <p className="mb-3 md:order-last md:mb-0">Malaysia</p>{" "}
          {/* Set initial order for smaller screens */}
          <div className="flex flex-col space-y-1 lg:flex-row lg:space-x-3 lg:space-y-0">
            {" "}
            {/* Set initial order for smaller screens */}
            <p>Copyright © 2024 Apple Inc. All rights reserved.</p>
            <p>
              Privacy Policy | Terms of Use | Sales and Refunds | Legal | Site
              Map
            </p>
          </div>
        </div>
        {hasStickyFooter && <div className="h-24" />}
      </div>
    </div>
  );
};
