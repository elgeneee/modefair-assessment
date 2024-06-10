"use client";

import { clsx } from "clsx";
import React from "react";
import { useConfigurationBannerStore } from "../../utils/store";
const Banner = () => {
  const { bannerConfig } = useConfigurationBannerStore();
  return (
    <div>
      <div className="relative z-10 mx-auto flex-col items-center justify-center border-b border-[#D8D8D9] bg-white px-6 text-center">
        <header className="z-10 mx-auto w-full max-w-7xl justify-center">
          <nav className="w-full items-center">
            <ul className="hidden h-11 items-center justify-between space-x-4 text-xs font-light md:flex">
              <li>
                <a href="#" className="h-10 w-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.7em"
                    height="1.7em"
                    viewBox="0 0 256 340"
                  >
                    <path d="M213.803 167.03c.442 47.58 41.74 63.413 42.197 63.615c-.35 1.116-6.599 22.563-21.757 44.716c-13.104 19.153-26.705 38.235-48.13 38.63c-21.05.388-27.82-12.483-51.888-12.483c-24.061 0-31.582 12.088-51.51 12.871c-20.68.783-36.428-20.71-49.64-39.793c-27-39.033-47.633-110.3-19.928-158.406c13.763-23.89 38.36-39.017 65.056-39.405c20.307-.387 39.475 13.662 51.889 13.662c12.406 0 35.699-16.895 60.186-14.414c10.25.427 39.026 4.14 57.503 31.186c-1.49.923-34.335 20.044-33.978 59.822M174.24 50.199c10.98-13.29 18.369-31.79 16.353-50.199c-15.826.636-34.962 10.546-46.314 23.828c-10.173 11.763-19.082 30.589-16.678 48.633c17.64 1.365 35.66-8.964 46.64-22.262"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" className="">
                  Store
                </a>
              </li>
              <li>
                <a href="#" className="">
                  Mac
                </a>
              </li>
              <li>
                <a href="#" className="">
                  iPad
                </a>
              </li>
              <li>
                <a href="#" className="">
                  iPhone
                </a>
              </li>
              <li>
                <a href="#" className="">
                  Watch
                </a>
              </li>
              <li>
                <a href="#" className="">
                  AirPods
                </a>
              </li>
              <li>
                <a href="#" className="">
                  TV & Home
                </a>
              </li>
              <li>
                <a href="#" className="">
                  Entertainment
                </a>
              </li>
              <li>
                <a href="#" className="">
                  Accessories
                </a>
              </li>
              <li>
                <a href="#" className="">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15px"
                    height="44px"
                    viewBox="0 0 15 44"
                  >
                    <path d="M14.298,27.202l-3.87-3.87c0.701-0.929,1.122-2.081,1.122-3.332c0-3.06-2.489-5.55-5.55-5.55c-3.06,0-5.55,2.49-5.55,5.55 c0,3.061,2.49,5.55,5.55,5.55c1.251,0,2.403-0.421,3.332-1.122l3.87,3.87c0.151,0.151,0.35,0.228,0.548,0.228 s0.396-0.076,0.548-0.228C14.601,27.995,14.601,27.505,14.298,27.202z M1.55,20c0-2.454,1.997-4.45,4.45-4.45 c2.454,0,4.45,1.997,4.45,4.45S8.454,24.45,6,24.45C3.546,24.45,1.55,22.454,1.55,20z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" className="">
                  <svg
                    height="44"
                    viewBox="0 0 14 44"
                    width="14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m11.3535 16.0283h-1.0205a3.4229 3.4229 0 0 0 -3.333-2.9648 3.4229 3.4229 0 0 0 -3.333 2.9648h-1.02a2.1184 2.1184 0 0 0 -2.117 2.1162v7.7155a2.1186 2.1186 0 0 0 2.1162 2.1167h8.707a2.1186 2.1186 0 0 0 2.1168-2.1167v-7.7155a2.1184 2.1184 0 0 0 -2.1165-2.1162zm-4.3535-1.8652a2.3169 2.3169 0 0 1 2.2222 1.8652h-4.4444a2.3169 2.3169 0 0 1 2.2222-1.8652zm5.37 11.6969a1.0182 1.0182 0 0 1 -1.0166 1.0171h-8.7069a1.0182 1.0182 0 0 1 -1.0165-1.0171v-7.7155a1.0178 1.0178 0 0 1 1.0166-1.0166h8.707a1.0178 1.0178 0 0 1 1.0164 1.0166z"></path>
                  </svg>
                </a>
              </li>
            </ul>
            <ul className="flex h-11 items-center justify-between space-x-4 text-xs font-light md:hidden">
              <li>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.7em"
                    height="1.7em"
                    viewBox="0 0 256 340"
                  >
                    <path d="M213.803 167.03c.442 47.58 41.74 63.413 42.197 63.615c-.35 1.116-6.599 22.563-21.757 44.716c-13.104 19.153-26.705 38.235-48.13 38.63c-21.05.388-27.82-12.483-51.888-12.483c-24.061 0-31.582 12.088-51.51 12.871c-20.68.783-36.428-20.71-49.64-39.793c-27-39.033-47.633-110.3-19.928-158.406c13.763-23.89 38.36-39.017 65.056-39.405c20.307-.387 39.475 13.662 51.889 13.662c12.406 0 35.699-16.895 60.186-14.414c10.25.427 39.026 4.14 57.503 31.186c-1.49.923-34.335 20.044-33.978 59.822M174.24 50.199c10.98-13.29 18.369-31.79 16.353-50.199c-15.826.636-34.962 10.546-46.314 23.828c-10.173 11.763-19.082 30.589-16.678 48.633c17.64 1.365 35.66-8.964 46.64-22.262"></path>
                  </svg>
                </a>
              </li>
              <div className="flex items-center space-x-7">
                <li>
                  <a href="#" className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15px"
                      height="44px"
                      viewBox="0 0 15 44"
                    >
                      <path d="M14.298,27.202l-3.87-3.87c0.701-0.929,1.122-2.081,1.122-3.332c0-3.06-2.489-5.55-5.55-5.55c-3.06,0-5.55,2.49-5.55,5.55 c0,3.061,2.49,5.55,5.55,5.55c1.251,0,2.403-0.421,3.332-1.122l3.87,3.87c0.151,0.151,0.35,0.228,0.548,0.228 s0.396-0.076,0.548-0.228C14.601,27.995,14.601,27.505,14.298,27.202z M1.55,20c0-2.454,1.997-4.45,4.45-4.45 c2.454,0,4.45,1.997,4.45,4.45S8.454,24.45,6,24.45C3.546,24.45,1.55,22.454,1.55,20z"></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    <svg
                      height="44"
                      viewBox="0 0 14 44"
                      width="14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m11.3535 16.0283h-1.0205a3.4229 3.4229 0 0 0 -3.333-2.9648 3.4229 3.4229 0 0 0 -3.333 2.9648h-1.02a2.1184 2.1184 0 0 0 -2.117 2.1162v7.7155a2.1186 2.1186 0 0 0 2.1162 2.1167h8.707a2.1186 2.1186 0 0 0 2.1168-2.1167v-7.7155a2.1184 2.1184 0 0 0 -2.1165-2.1162zm-4.3535-1.8652a2.3169 2.3169 0 0 1 2.2222 1.8652h-4.4444a2.3169 2.3169 0 0 1 2.2222-1.8652zm5.37 11.6969a1.0182 1.0182 0 0 1 -1.0166 1.0171h-8.7069a1.0182 1.0182 0 0 1 -1.0165-1.0171v-7.7155a1.0178 1.0178 0 0 1 1.0166-1.0166h8.707a1.0178 1.0178 0 0 1 1.0164 1.0166z"></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 18 18">
                    <polyline
                      id="globalnav-menutrigger-bread-bottom"
                      className="globalnav-menutrigger-bread globalnav-menutrigger-bread-bottom"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      points="2 12, 16 12"
                    >
                      <animate
                        id="globalnav-anim-menutrigger-bread-bottom-open"
                        attributeName="points"
                        keyTimes="0;0.5;1"
                        dur="0.24s"
                        begin="indefinite"
                        fill="freeze"
                        calcMode="spline"
                        keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
                        values=" 2 12, 16 12; 2 9, 16 9; 3.5 15, 15 3.5"
                      ></animate>
                      <animate
                        id="globalnav-anim-menutrigger-bread-bottom-close"
                        attributeName="points"
                        keyTimes="0;0.5;1"
                        dur="0.24s"
                        begin="indefinite"
                        fill="freeze"
                        calcMode="spline"
                        keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
                        values=" 3.5 15, 15 3.5; 2 9, 16 9; 2 12, 16 12"
                      ></animate>
                    </polyline>
                    <polyline
                      id="globalnav-menutrigger-bread-top"
                      className="globalnav-menutrigger-bread globalnav-menutrigger-bread-top"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      points="2 5, 16 5"
                    >
                      <animate
                        id="globalnav-anim-menutrigger-bread-top-open"
                        attributeName="points"
                        keyTimes="0;0.5;1"
                        dur="0.24s"
                        begin="indefinite"
                        fill="freeze"
                        calcMode="spline"
                        keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
                        values=" 2 5, 16 5; 2 9, 16 9; 3.5 3.5, 15 15"
                      ></animate>
                      <animate
                        id="globalnav-anim-menutrigger-bread-top-close"
                        attributeName="points"
                        keyTimes="0;0.5;1"
                        dur="0.24s"
                        begin="indefinite"
                        fill="freeze"
                        calcMode="spline"
                        keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
                        values=" 3.5 3.5, 15 15; 2 9, 16 9; 2 5, 16 5"
                      ></animate>
                    </polyline>
                  </svg>
                </li>
              </div>
            </ul>
          </nav>
          <div className="flex items-center justify-between py-4">
            <span className="text-base font-medium">
              <a href="">MacBook Pro</a>
            </span>
            <div className="hidden md:block">
              <ul className="flex items-center space-x-6 text-xs font-light">
                <li>
                  <a href="#" className="">
                    Overview
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    macOS
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    Compare
                  </a>
                </li>
              </ul>
            </div>
            <div className="md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#6e6e73"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-down"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
          </div>
        </header>
      </div>
      <div
        className={clsx(
          "sticky top-0 z-[999] bg-[#0071E3] py-4 text-center text-white duration-300",
          bannerConfig == "" ? "hidden" : "animate-fadeIn",
        )}
      >
        {bannerConfig}
      </div>

      <div className="z-0 animate-slide-in-from-top bg-[#F5F5F7] py-4 text-center text-sm font-light">
        <p>
          Pay 0% interest for up to 24 months. Terms apply.
          <sup className="text-[8px]">◊◊</sup>{" "}
          <span className="text-[#06C] hover:underline">
            <a>
              Learn more<span className="ml-2">&rsaquo;</span>
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Banner;