import Image from "next/image";
import { Inter } from "next/font/google";
import router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { clsx } from "clsx";
import { ProductCard } from "../components/product-card";
import { products } from "../../../utils/db.json";
import { chip_configs } from "../../../utils/db.json";
import { ConfigureCard } from "../components/configure";

interface Product {
  size: string;
  color_options: string[];
  specs: string;
  description: string;
  price: number;
  chip: string;
}

export default function Home() {
  const router = useRouter();
  const { id } = router.query;
  const [size, setSize] = useState<string>("");
  const [chip, setChip] = useState<string>("");
  const [macbooks, setMacbooks] = useState<Product[]>();

  if (
    typeof id === "string" &&
    !id?.startsWith("14-inch") &&
    !id?.startsWith("16-inch")
  ) {
    router.replace("14-inch");
  }

  useEffect(() => {
    if (
      typeof id === "string" &&
      !id?.startsWith("14-inch") &&
      !id?.startsWith("16-inch")
    ) {
      router.replace("14-inch");
    }
  }, []);

  useEffect(() => {
    setMacbooks([]);
    if (typeof id === "string") {
      const data = id.split("-");
      setSize(data[0]);
      setChip(data.slice(2).join("-"));
      //   let tempData = []
      //   tempData = products.filter(
      //     (product) => product.size === `${data[0]}-${data[1]}`,
      //   );
      //   if (data.slice(2).join("-").length > 0) {
      //     tempData = tempData.filter(
      //       (product) => product.chip === data.slice(2).join("-"),
      //     );
      //   }
      //   console.log(tempData)
      //   setMacbooks(tempData);
      // }

      setMacbooks((prevMacbooks) => {
        let filteredMacbooks = products.filter(
          (product) => product.size === `${data[0]}-${data[1]}`,
        );

        if (data.slice(2).join("-").length > 0) {
          filteredMacbooks = filteredMacbooks.filter(
            (product) => product.chip === data.slice(2).join("-"),
          );
        }

        return filteredMacbooks;
      });
    }
  }, [id]);

  const handleChipChange = (chip: string) => {
    if (typeof id === "string") {
      const data = id.split("-");
      if (chip === "all") {
        router.replace(`${data[0]}-${data[1]}`);
      } else {
        router.replace(`${data[0]}-${data[1]}-${chip}`);
      }
    }
  };

  const handleSizeChange = (size: string) => {
    router.replace(size);
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center px-24 pb-24 pt-14`}
    >
      <div className="z-10 w-full max-w-7xl text-center">
        <div className="text-center">
          <div className="mb-4 text-[2rem] font-semibold">
            <h1>Choose your new MacBook Pro</h1>
          </div>
          <div className="px-auto mx-auto flex items-center justify-center text-center">
            <svg
              viewBox="0 0 35 35"
              className="as-svgicon as-svgicon-chat as-svgicon-base as-svgicon-chatbase"
              role="img"
              aria-hidden="true"
              width="35px"
              height="35px"
            >
              <path fill="none" d="M0 .213h35v35H0z"></path>
              <path d="M14.4 21.048a13.284 13.284 0 01-1.344.076q-.411 0-.829-.025l-.334-.02-.279.185a15.461 15.461 0 01-4.388 2.109 16.182 16.182 0 001.365-2.054l.484-.923-.941-.446a7.127 7.127 0 01-4.384-6.276c0-4.114 4.274-7.461 9.529-7.461s9.529 3.347 9.529 7.461c0 .059-.009.116-.011.174.33-.029.664-.046 1-.046 0-.043.008-.085.008-.128 0-4.677-4.67-8.461-10.529-8.461S2.75 9 2.75 13.674a8.1 8.1 0 004.95 7.181 18.048 18.048 0 01-1.573 2.305c-.481.6-.236 1.28.613 1.28 1.17 0 3.557-1.1 5.425-2.343q.448.027.888.027c.455 0 .9-.028 1.34-.069-.011-.157-.029-.312-.029-.472 0-.183.018-.357.036-.535z"></path>
              <path d="M32.25 21.583c0-3.749-3.745-6.782-8.443-6.782h-.1c-.351 0-.694.027-1.032.063-3.876.413-6.886 2.906-7.269 6.036a5.584 5.584 0 00-.042.678c0 .117.015.23.021.345.222 3.737 3.994 6.428 8.6 6.428.235 0 .473-.007.712-.021a10.723 10.723 0 004.35 1.878c.681 0 .878-.543.492-1.026a14.459 14.459 0 01-1.263-1.848 6.5 6.5 0 003.974-5.751zm-4.4 4.852l-.942.446.484.923a10.673 10.673 0 00.759 1.2 14.28 14.28 0 01-2.9-1.5l-.279-.185-.334.02c-.219.013-.437.019-.653.019-4.21 0-7.515-2.462-7.614-5.629 0-.048-.009-.1-.009-.144a4.521 4.521 0 01.1-.922c.5-2.386 2.87-4.288 5.908-4.75a9.506 9.506 0 011.092-.1c.113 0 .225-.013.339-.013 4.1 0 7.443 2.594 7.443 5.782a5.517 5.517 0 01-3.394 4.853z"></path>
            </svg>
          </div>
          <div className="font-light">
            <p>Have questions about buying a Mac?</p>
          </div>
          <div className="mb-10 font-light">
            <span className="text-[#06C] hover:underline">
              <a href="https://contactretail.apple.com">
                Chat with a Mac Specialist
              </a>
            </span>
          </div>
        </div>

        <div className="mx-auto inline-flex min-h-20 justify-center rounded-xl border border-[#86868B] text-center">
          <button
            className={clsx(
              "min-w-36 max-w-64 rounded-l-xl bg-white px-4 py-2 text-sm font-medium text-black focus:outline-none focus:ring-2 focus:ring-[#06C]",
              size === "14" && "z-10 ring-2 ring-[#06C]",
            )}
            onClick={() => handleSizeChange("14-inch")}
          >
            14-inch
          </button>
          <button
            className={clsx(
              "min-w-36 max-w-64 rounded-r-xl bg-white px-4 py-2 text-sm font-medium text-black focus:outline-none focus:ring-2 focus:ring-[#06C]",
              size === "16" && "ring-2 ring-[#06C]",
            )}
            onClick={() => handleSizeChange("16-inch")}
          >
            16-inch
          </button>
        </div>
        <div className="mb-8 text-center">
          <p className="mb-4 mt-12 text-xs font-light">Filter by chip:</p>
          {/* Pills? */}
          <div className="flex justify-center space-x-2 text-center">
            <button
              className={clsx(
                "rounded-full px-4 py-2 text-xs font-medium focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 focus:ring-offset-white",
                chip === "" ? "bg-black text-white" : "bg-[#E8E8ED] text-black",
              )}
              onClick={() => handleChipChange("all")}
            >
              All
            </button>
            {size == "14" && (
              <button
                className={clsx(
                  "rounded-full px-4 py-2 text-xs font-medium focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 focus:ring-offset-white",
                  chip === "m3"
                    ? "bg-black text-white"
                    : "bg-[#E8E8ED] text-black",
                )}
                onClick={() => handleChipChange("m3")}
              >
                M3
              </button>
            )}
            <button
              className={clsx(
                "rounded-full px-4 py-2 text-xs font-medium focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 focus:ring-offset-white",
                chip === "m3-pro"
                  ? "bg-black text-white"
                  : "bg-[#E8E8ED] text-black",
              )}
              onClick={() => handleChipChange("m3-pro")}
            >
              M3 Pro
            </button>
            <button
              className={clsx(
                "rounded-full px-4 py-2 text-xs font-medium focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 focus:ring-offset-white",
                chip === "m3-max"
                  ? "bg-black text-white"
                  : "bg-[#E8E8ED] text-black",
              )}
              onClick={() => handleChipChange("m3-max")}
            >
              M3 Max
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {macbooks &&
            macbooks?.length > 0 &&
            macbooks.map((macbook, index) => (
              <ProductCard key={index} product={macbook} />
            ))}
        </div>
        <div className="mt-20">
          <p className="text-4xl font-semibold">What&apos;s in the Box</p>
          {/* <div className="bg-[#FAFAFA] relative">
                        <ul className="flex space-x-4">
                            <li className="flex items-center relative">
                                <img src="/mbp14.jpg" alt="Icon 1" className="mr-2 absolute bottom-0" />

                            </li>
                            <li className="flex items-center relative">
                                <img src="/magsafe-cable.jpg" alt="Icon 2" className="mr-2 absolute bottom-0" />
                            </li>
                            <li className="flex items-center relative">
                                <img src="/70w-adapter.jpg" alt="Icon 3" className="mr-2 absolute bottom-0" />

                            </li>
                        </ul>

                    </div> */}
          <ul className="m-0 flex w-full justify-around">
            <li className="grow basis-0 text-center">
              <div className="flex h-full flex-col justify-between bg-[#fafafa]">
                <img
                  src="/mbp14.jpg"
                  loading="lazy"
                  width="608"
                  height="392"
                  className="h-[392px] w-[608px] object-cover align-top"
                />
                <div>16-inch Macbook Pro</div>
              </div>
            </li>
            <li className="grow basis-0 text-center">
              <div className="flex h-full flex-col justify-between">
                <img
                  src="/magsafe-cable.jpg"
                  loading="lazy"
                  width="45"
                  height="392"
                  className="mx-auto h-[392px] w-[45px] bg-[#fafafa] object-cover align-top"
                />
                <div className="mt-0 pt-0">USB-C to MagSafe 3 Cable (2m)</div>
              </div>
            </li>
            <li className="grow basis-0 text-center">
              <div className="flex h-full flex-col justify-between bg-[#fafafa]">
                <img
                  src="/70w-adapter.jpg"
                  loading="lazy"
                  width="219"
                  height="392"
                  className="h-[392px] w-full object-cover align-top"
                />
                <div>70W Adapter</div>
              </div>
            </li>
          </ul>
        </div>

        <div className="relative h-72 bg-black">
          <img
            src="/mbp14.jpg"
            loading="lazy"
            width="608"
            height="392"
            className="-translate-x-1/2overflow-hidden absolute bottom-0 left-1/2 transform text-center"
          />
        </div>
        <div>
          <div>
            <img
              src="/70w-adapter.jpg"
              loading="lazy"
              // width="219"
              // height="392"
              className="absolute bottom-0 left-1/2 w-20 -translate-x-1/2 transform overflow-hidden text-center"
            />
          </div>
        </div>
        <div className="mt-12 rounded-lg bg-[#FAFAFA] p-10">
          <p className="mt-4 text-3xl font-semibold">
            What to consider when choosing your MacBook Pro.
          </p>
          <p className="mt-4">Configure your laptop on the next step.</p>
          <div className="mt-14 grid grid-cols-4 gap-4">
            {chip_configs.map((chip, index) => (
              <ConfigureCard key={index} chip={chip} />
            ))}
          </div>
          <p className="mt-14 text-xs font-light">
            Have questions about buying a Mac?
            <span className="text-[#06C] hover:underline">
              <a target="_blank" href="https://contactretail.apple.com/">
                {" "}
                Chat with a Mac Specialist.
              </a>
            </span>
          </p>
        </div>
      </div>

      <div className="mt-6 w-screen bg-[#FAFAFA] py-20 text-center">
        <p className="mb-5 text-4xl font-semibold">Compare Mac models</p>
        <span className="font-light text-[#06C] hover:underline">
          <a target="_blank" href="https://contactretail.apple.com/">
            Choose the best Mac for you
          </a>
        </span>
        <img src="/mac-compare.png" className="mx-auto h-80 text-center" />
      </div>

      <div className="my-20 text-center">
        <img
          src="/applecare.jpg"
          alt="Apple Care"
          className="mx-auto mb-20 h-40 w-40"
        />
        <p className="text-3xl font-semibold">AppleCare+ for Mac</p>
        <p className="mt-3 text-left font-light">
          Every Mac comes with a{" "}
          <span className="text-[#06C] underline">
            <a>one-year limited warranty</a>
          </span>{" "}
          and up to 90 days of{" "}
          <span className="text-[#06C] underline">
            <a>complimentary technical support</a>
          </span>{" "}
          AppleCare+ for Mac extends your coverage to three years from your
          AppleCare+ purchase date and adds unlimited incidents of accidental
          damage protection, each subject to a service fee of RM 469 for screen
          damage or external enclosure damage, or RM 1,429 for other accidental
          damage. In addition, you‘ll get 24/7 priority access to Apple experts
          by chat or phone through{" "}
          <span className="text-[#06C] underline">
            <a>getsupport.apple.com</a>
          </span>
          . For complete details, see the{" "}
          <span className="text-[#06C] underline">
            <a>terms.</a>
          </span>
        </p>
        <p className="mt-3">
          <span className="font-light text-[#06C] hover:underline">
            <a>Learn more about AppleCare+</a>
          </span>
        </p>
      </div>
    </main>
  );
}
