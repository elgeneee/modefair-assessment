"use client";
import { clsx } from "clsx";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
interface Product {
  id: string;
  size: string;
  color_options: string[];
  specs: string;
  description: string;
  price: number;
  chip: string;
}
const ProductCard = ({ product }: { product: Product }) => {
  const router = useRouter();
  const { id, size, color_options, specs, description, price, chip } = product;
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [imgSrc, setImgSrc] = useState<string>("");

  useEffect(() => {
    setSelectedColor(color_options[0]);
    setImgSrc(
      `/mbp${size.split("-")[0]}-${color_options[0].toLowerCase().replace(/\s/g, "")}.jpg`,
    );
  }, []);

  useEffect(() => {
    setSelectedColor(color_options[0]);
    setImgSrc(
      `/mbp${size.split("-")[0]}-${color_options[0].toLowerCase().replace(/\s/g, "")}.jpg`,
    );
  }, [color_options]);

  useEffect(() => {
    setImgSrc(
      `/mbp${size.split("-")[0]}-${selectedColor.toLowerCase().replace(/\s/g, "")}.jpg`,
    );
  }, [selectedColor]);

  const handleSelect = () => {
    const newSpecs = specs.split("\n");
    router.push(
      `${size}-${selectedColor.toLowerCase().replace(/\s/g, "-")}-apple-${chip}-with-${newSpecs[0].split(" ")[0]}-cpu-and-${newSpecs[1].split(" ")[0]}-gpu-${newSpecs[2].split(" ")[0].toLowerCase()}-memory-${newSpecs[3].split(" ")[0].toLowerCase()}?id=${id}`,
    );
  };

  return (
    <div className="animate-fadeIn flex-col rounded-lg bg-[#F5F5F7] px-5 text-left font-light">
      <img
        src={imgSrc}
        alt="MacBook Pro"
        className="text-center"
        onError={(e) =>
          setImgSrc(
            `/mbp${size.split("-")[0]}-${color_options[0].toLowerCase().replace(/\s/g, "")}.jpg`,
          )
        }
      />
      {/* <Image
        src={imgSrc}
        width={500}
        height={500}
        alt="macbook"
        loading="lazy"
        onError={(e) =>
          setImgSrc(
            `/mbp${size.split("-")[0]}-${color_options[0].toLowerCase().replace(/\s/g, "")}.jpg`,
          )
        }
      /> */}
      <div>
        <p className="text-xs">{selectedColor}</p>
        {color_options.map((color, index) => (
          <button key={index} className="gap">
            <img
              src={`/${color.toLowerCase().replace(/\s/g, "")}-cto.jpg`}
              alt="MacBook Pro"
              className={clsx(
                "my-2 mr-3 h-6 w-6 rounded-full",
                selectedColor === color &&
                  "ring-2 ring-[#0076DF] ring-offset-1",
              )}
              onClick={() => setSelectedColor(color)}
            />
          </button>
        ))}
      </div>
      <div>
        <img
          src={`/${chip}-icon.png`}
          alt="MacBook Pro"
          className="h-14 w-14"
        />
        <p className="mb-4 mt-3 whitespace-pre-line text-[1.5rem] font-semibold leading-7">
          {specs}
        </p>

        <p className="whitespace-pre-line text-sm font-light leading-6">
          {description}
        </p>

        <p className="mt-3 text-[1.5rem] font-semibold">
          RM {price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </p>

        <p className="my-3 text-sm font-light">or</p>

        <p className="mb-2 text-[1.5rem] font-semibold leading-7">
          RM {(price / 12).toFixed(2)}/mo. for 24mo.*
        </p>
        <span className="flex text-sm text-[#06C] hover:underline">
          <a
            href="https://contactretail.apple.com"
            className="flex items-center space-x-2"
          >
            Explore monthly instalment options
            <span className="ml-2">&rsaquo;</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-circle-plus"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12h8" />
                <path d="M12 8v8" />
              </svg>
            </span>
          </a>
        </span>

        <p className="mt-4 text-base font-medium">Add a trade-in</p>
        <p className="mb-2 text-sm">
          Get credit towards a new Mac when you trade in your eligible computer.
          Or recycle it for free.**
        </p>
        <span className="text-sm text-[#06C] hover:underline">
          <a
            href="https://contactretail.apple.com"
            className="flex items-center"
          >
            Get started
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-circle-plus ml-2"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12h8" />
                <path d="M12 8v8" />
              </svg>
            </span>
          </a>
        </span>
      </div>
      <div>
        <button
          className="my-6 w-full rounded-lg bg-[#0171E3] py-2 text-white hover:bg-[#0076DF]"
          onClick={() => handleSelect()}
        >
          Select
        </button>
      </div>
      <div>
        <p className="text-base font-medium">Need a moment?</p>
        <p className="pb-2 text-sm">
          Keep all your selections by saving this device to Your Saves, then
          come back anytime and pick up right where you left off.
        </p>
        <p className="flex items-center text-sm text-[#06C] hover:underline">
          <span>
            <svg
              width="21"
              height="21"
              style={{ fill: "#06C" }}
              role="img"
              aria-hidden="true"
            >
              <path fill="none" d="M0 0h21v21H0z"></path>
              <path d="M12.8 4.25a1.202 1.202 0 0 1 1.2 1.2v10.818l-2.738-2.71a1.085 1.085 0 0 0-1.524 0L7 16.269V5.45a1.202 1.202 0 0 1 1.2-1.2h4.6m0-1H8.2A2.2 2.2 0 0 0 6 5.45v11.588a.768.768 0 0 0 .166.522.573.573 0 0 0 .455.19.644.644 0 0 0 .38-.128 5.008 5.008 0 0 0 .524-.467l2.916-2.885a.084.084 0 0 1 .118 0l2.916 2.886a6.364 6.364 0 0 0 .52.463.628.628 0 0 0 .384.131.573.573 0 0 0 .456-.19.768.768 0 0 0 .165-.522V5.45a2.2 2.2 0 0 0-2.2-2.2Z"></path>
            </svg>
          </span>
          Save for later
        </p>
      </div>

      <div className="my-10 flex space-x-2">
        <div className="w-7">
          <svg
            className="as-svgicon-rtl-mirrored as-svgicon as-svgicon-boxtruck as-svgicon-reduced as-svgicon-boxtruckreduced"
            viewBox="0 0 25 25"
            role="img"
            aria-hidden="true"
            width="25px"
            height="25px"
          >
            <path fill="none" d="M0 0h25v25H0z"></path>
            <path
              fill="#1d1d1f"
              d="m23.482 12.847-2.92-3.209A1.947 1.947 0 0 0 18.985 9H17V6.495a2.5 2.5 0 0 0-2.5-2.5h-11a2.5 2.5 0 0 0-2.5 2.5v9.75a2.5 2.5 0 0 0 2.5 2.5h.548A2.746 2.746 0 0 0 6.75 21.02 2.618 2.618 0 0 0 9.422 19h6.681a2.744 2.744 0 0 0 5.347-.23h.735A1.656 1.656 0 0 0 24 16.98v-2.808a1.937 1.937 0 0 0-.518-1.325ZM8.426 18.745a1.74 1.74 0 0 1-3.352 0 1.577 1.577 0 0 1 .015-1 1.738 1.738 0 0 1 3.322 0 1.578 1.578 0 0 1 .015 1ZM9.447 18a2.726 2.726 0 0 0-5.394-.255H3.5a1.502 1.502 0 0 1-1.5-1.5v-9.75a1.502 1.502 0 0 1 1.5-1.5h11a1.502 1.502 0 0 1 1.5 1.5V18Zm10.972.77a1.738 1.738 0 0 1-3.337 0 1.573 1.573 0 0 1 0-1 1.742 1.742 0 1 1 3.337 1ZM23 16.98c0 .569-.229.79-.815.79h-.735A2.73 2.73 0 0 0 17 16.165V10h1.986a.976.976 0 0 1 .838.314l2.927 3.214a.95.95 0 0 1 .249.644Zm-1.324-3.36a.512.512 0 0 1 .174.38h-3.306a.499.499 0 0 1-.544-.528V11h1.073a.76.76 0 0 1 .594.268Z"
            ></path>
          </svg>
        </div>
        <div>
          <p className="text-base font-medium">Delivery:</p>
          <p className="text-sm">In stock</p>
          <p className="text-sm">Free Shipping</p>
          <p className="text-sm text-[#06C] hover:underline">
            Get delivery dates
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
