/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { useEffect, useState, ChangeEvent, useRef } from "react";
import { clsx } from "clsx";

import { ProductCard } from "../components/ProductCard";
import { ConfigureCard } from "../components/ConfigureCard";
import {
  products,
  chip_configs,
  pricing_configs,
} from "../../../utils/db.json";

import { useHasStickyFooterStore } from "../../../utils/store";

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
  const sizeSelectRef = useRef<HTMLDivElement>(null);
  //ZUSTAND GLOBAL STATE MANAGEMENT
  const { setHasStickyFooter } = useHasStickyFooterStore();

  //FOR PRODUCTS PAGE
  const [size, setSize] = useState<string>("");
  const [chip, setChip] = useState<string>("");
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [macbooks, setMacbooks] = useState<Product[]>();

  //FOR PRODUCT DETAIL PAGE
  const [isProductPage, setIsProductPage] = useState<boolean>(false);
  const [productSize, setProductSize] = useState<string>("");
  const [productColor, setProductColor] = useState<string>("");
  const [productChip, setProductChip] = useState<string>("");
  const [productCPU, setProductCPU] = useState<string>("");
  const [productGPU, setProductGPU] = useState<string>("");
  const [productMemory, setProductMemory] = useState<string>("");
  const [productStorage, setProductStorage] = useState<string>("");
  const [productConfig, setProductConfig] = useState<any>({});
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [selectedKeyboard, setSelectedKeyboard] =
    useState<string>("US English");

  const onRouterChange = () => {
    if (typeof id === "string") {
      if (!id?.startsWith("14-inch") && !id?.startsWith("16-inch")) {
        router.push("14-inch", undefined, { shallow: true });
      } else {
        //check for product page regex
        const pattern =
          /^(14|16)-inch-(silver|space-black|space-gray)-apple-(m3|m3-pro|m3-max)-with-(\d+)-core-cpu-and-(\d+)-core-gpu-(\d+gb)-memory-(\d+(?:tb|gb))$/;
        const match = id.match(pattern);
        if (match) {
          //check if config exist in price_config

          const chip = `${match[1]}-inch-${match[3]}`;
          let foundMatchingConfig = false;
          let currConfig = {};
          pricing_configs.forEach((config: any) => {
            Object.keys(config).forEach((key) => {
              if (key == chip) {
                const routerMemory = match[6];
                const routerStorage = match[7];
                if (
                  Object.keys(config[key].memory).some(
                    (memoryKey) =>
                      memoryKey.toLowerCase().split(" ")[0] ===
                      routerMemory.toLowerCase(),
                  ) &&
                  Object.keys(config[key].storage).some(
                    (storageKey) =>
                      storageKey.toLowerCase().split(" ")[0] ===
                      routerStorage.toLowerCase(),
                  )
                ) {
                  foundMatchingConfig = true;
                  currConfig = config[key];
                  if (config[key].chip && Object.keys(config[key].chip)) {
                    foundMatchingConfig = false;
                    currConfig = {};
                    const routerCpu = match[4];
                    const routerGpu = match[5];
                    //check
                    Object.keys(config[key].chip).forEach((chip) => {
                      const tempArr = chip.match(/\b\d+\b/g) || [];
                      if (routerCpu == tempArr[0] && routerGpu == tempArr[1]) {
                        //correct
                        foundMatchingConfig = true;
                        currConfig = config[key];
                        return;
                      }
                    });
                  }
                  return;
                }
              }
            });
          });

          if (foundMatchingConfig) {
            // console.log(
            //   match[1],
            //   match[2],
            //   match[3],
            //   match[4],
            //   match[5],
            //   match[6],
            //   match[7],
            // );
            setHasStickyFooter(true);

            setIsProductPage(true);
            setProductSize(match[1]);
            setProductColor(match[2]);
            setProductChip(match[3]);
            setProductCPU(match[4]);
            setProductGPU(match[5]);
            setProductMemory(match[6]);
            setProductStorage(match[7]);
            setProductConfig(currConfig);
            computeTotalPrice();
          } else {
            cleanupStates();
            router.push("14-inch", undefined, { shallow: true });
          }
        } else {
          const data = id.split("-");
          setSize(data[0]);
          setChip(data.slice(2).join("-"));

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
      }
    }
  };
  useEffect(() => {
    onRouterChange();
  }, []);

  useEffect(() => {
    // Run the scroll handler once to set initial state
    const handleScroll = () => {
      if (sizeSelectRef.current) {
        const offsetTop = sizeSelectRef.current.offsetTop;
        if (window.pageYOffset > offsetTop) {
          setIsSticky(true);
        }
        if (window.pageYOffset < offsetTop) {
          setIsSticky(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSticky]);

  const cleanupStates = () => {
    setIsProductPage(false);
    setHasStickyFooter(false);
    setProductSize("");
    setProductColor("");
    setProductChip("");
    setProductCPU("");
    setProductGPU("");
    setProductMemory("");
    setProductStorage("");
  };

  useEffect(() => {
    onRouterChange();
  }, [id]);

  // FUNCTIONS FOR PRODUCT PAGE
  const handleChipChange = (chip: string) => {
    if (typeof id === "string") {
      const data = id.split("-");
      if (chip === "all") {
        router.push(`${data[0]}-${data[1]}`, undefined, { shallow: true });
      } else {
        router.push(`${data[0]}-${data[1]}-${chip}`, undefined, {
          shallow: true,
        });
      }
    }
  };

  const handleSizeChange = (size: string) => {
    router.push(size, undefined, { shallow: true });
  };

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedKeyboard(event.target.value);
  };

  //FUNCTIONS FOR PRODUCT DETAIL PAGE
  const handleChipConfigChange = (chipDetail: string) => {
    const chipRegex = /M3\s*(\w+)/i;
    const numberRegex = /\b\d+\b/g;
    if (chipDetail.match(chipRegex) && chipDetail.match(numberRegex)) {
      const chipMatch = chipDetail.match(chipRegex);
      const cpuMatch = chipDetail.match(numberRegex);
      const gpuMatch = chipDetail.match(numberRegex);

      if (typeof id === "string") {
        //check for product page regex
        const pattern =
          /^(14|16)-inch-(silver|space-black|space-gray)-apple-(m3|m3-pro|m3-max)-with-(\d+)-core-cpu-and-(\d+)-core-gpu-(\d+gb)-memory-(\d+(?:tb|gb))$/;
        const urlValid = id.match(pattern);

        if (urlValid) {
          let parts = id.split("-");
          const chip_index = parts.findIndex((part) => part.includes("apple"));
          if (chip_index !== -1) {
            parts[chip_index + 1] = chipMatch[0]
              .toLowerCase()
              .replace(" ", "-");
            if (parts[chip_index + 2] !== "with") {
              parts.splice(chip_index + 2, 1);
            }
          }

          const cpu_index = parts.findIndex((part) => part.includes("cpu"));
          if (cpu_index !== -1) {
            parts[cpu_index - 2] = cpuMatch[0];
          }

          const gpu_index = parts.findIndex((part) => part.includes("gpu"));
          if (gpu_index !== -1) {
            parts[gpu_index - 2] = gpuMatch[1];
          }
          const newUrl = parts.join("-");
          router.push(newUrl, undefined, { shallow: true });
        }
      }
    }
  };

  const handleMemoryConfigChange = (memoryDetail: string) => {
    const memoryMatch = memoryDetail.match(/(\d+)/);
    if (memoryMatch) {
      if (typeof id === "string") {
        //check for product page regex
        const pattern =
          /^(14|16)-inch-(silver|space-black|space-gray)-apple-(m3|m3-pro|m3-max)-with-(\d+)-core-cpu-and-(\d+)-core-gpu-(\d+gb)-memory-(\d+(?:tb|gb))$/;
        const urlValid = id.match(pattern);

        if (urlValid) {
          let parts = id.split("-");
          const chip_index = parts.findIndex((part) => part.includes("memory"));
          if (chip_index !== -1) {
            parts[chip_index - 1] = memoryMatch[0] + "gb";
          }
          const newUrl = parts.join("-");
          router.push(newUrl, undefined, { shallow: true });
        }
      }
    }
  };

  const handleStorageConfigChange = (storageDetail: string) => {
    const storageMatch = storageDetail.match(/(\d+)/);
    if (storageMatch) {
      if (typeof id === "string") {
        //check for product page regex
        const pattern =
          /^(14|16)-inch-(silver|space-black|space-gray)-apple-(m3|m3-pro|m3-max)-with-(\d+)-core-cpu-and-(\d+)-core-gpu-(\d+gb)-memory-(\d+(?:tb|gb))$/;
        const urlValid = id.match(pattern);

        if (urlValid) {
          let parts = id.split("-");
          parts[parts.length - 1] = storageDetail.split(" ")[0].toLowerCase();
          const newUrl = parts.join("-");
          router.push(newUrl, undefined, { shallow: true });
        }
      }
    }
  };

  const computeTotalPrice = () => {
    //read the URL
    const pattern =
      /^(14|16)-inch-(silver|space-black|space-gray)-apple-(m3|m3-pro|m3-max)-with-(\d+)-core-cpu-and-(\d+)-core-gpu-(\d+gb)-memory-(\d+(?:tb|gb))$/;
    if (typeof id === "string") {
      const match = id.match(pattern);
      if (match) {
        const size = match[1];
        const chip = match[3];
        const cpu = match[4];
        const gpu = match[5];
        const mem = match[6];
        const store = match[7];
        let basePrice = 0;
        pricing_configs.forEach((config: any) => {
          Object.keys(config).forEach((key) => {
            //Get base price
            if (key == `${size}-inch-${chip}`) {
              basePrice += config[key].base_price;
              //Check chip
              if (config[key].chip) {
                Object.keys(config[key].chip).forEach((chip) => {
                  const tempArr = chip.match(/\b\d+\b/g) || [];
                  if (tempArr[0] == cpu && tempArr[1] == gpu) {
                    basePrice += config[key].chip[chip];
                    return;
                  }
                });
              }
              //Check memory
              Object.keys(config[key].memory).forEach((memory) => {
                const tempArr = memory.split(" ");
                if (tempArr[0].toLowerCase() == mem) {
                  basePrice += config[key].memory[memory];
                  return;
                }
              });
              //Check storage
              Object.keys(config[key].storage).forEach((storage) => {
                const tempArr = storage.split(" ");
                if (tempArr[0].toLowerCase() == store) {
                  basePrice += config[key].storage[storage];
                  return;
                }
              });
            }
          });
        });
        setTotalPrice(basePrice);
      }
    }
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center px-0 pb-24 pt-14`}
    >
      {!isProductPage ? (
        <div className="w-full px-6">
          <div className="mx-auto max-w-7xl flex-col justify-center text-center">
            <div className="mx-auto justify-center text-center">
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
            <div ref={sizeSelectRef}>
              <div
                className={clsx(
                  "mx-auto inline-flex min-h-20 justify-center text-center",
                  isSticky
                    ? "fixed left-0 top-0 z-50 min-h-[127px] w-screen bg-[#f9f9f9] py-5"
                    : "relative min-h-20",
                )}
              >
                <button
                  className={clsx(
                    "min-w-36 max-w-64 rounded-l-xl border border-[#86868B] bg-white px-4 py-2 text-sm font-medium text-black focus:outline-none focus:ring-1 focus:ring-[#06C]",
                    size === "14" && "z-10 ring-1 ring-[#06C]",
                  )}
                  onClick={() => handleSizeChange("14-inch")}
                >
                  14-inch
                </button>
                <button
                  className={clsx(
                    "min-w-36 max-w-64 rounded-r-xl border-y border-r border-[#86868B] bg-white px-4 py-2 text-sm font-medium text-black focus:outline-none focus:ring-1 focus:ring-[#06C]",
                    size === "16" && "z-20 border-l ring-1 ring-[#06C]",
                  )}
                  onClick={() => handleSizeChange("16-inch")}
                >
                  16-inch
                </button>
              </div>
            </div>

            <div className="mb-8 text-center">
              <p className="mb-4 mt-12 text-xs font-light">Filter by chip:</p>
              {/* Pills */}
              <div className="flex animate-fadeIn justify-center space-x-2 text-center">
                <button
                  className={clsx(
                    "rounded-full px-4 py-2 text-xs font-medium focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 focus:ring-offset-white",
                    chip === ""
                      ? "bg-black text-white"
                      : "bg-[#E8E8ED] text-black",
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {macbooks &&
                macbooks?.length > 0 &&
                macbooks.map((macbook, index) => (
                  <ProductCard key={index} product={macbook} />
                ))}
            </div>
            <div className="mt-20">
              <p className="text-4xl font-semibold pt-11 pb-10">What&apos;s in the Box</p>
              <ul className="flex w-full justify-around text-sm">
                <li className="text-center">
                  <div className="flex h-[392px] relative justify-between bg-[#fafafa]">
                    <img
                      src={`/mbp${size}-witb-${size == "14" ? "silver" : "spaceblack"}.jpg`}
                      loading="lazy"
                      width="608"
                      height="392"
                      alt="macbook"
                      className="h-[392px] w-[608px] object-cover "
                    />
                  </div>
                  <div className="px-4 pt-5">16-inch Macbook Pro</div>
                </li>
                <li className="grow basis-0 text-center">
                  <div className="flex h-[392px] relative justify-between bg-[#fafafa]">
                    <img
                      src={`/magsafe-cable-${size == "14" ? "silver" : "spaceblack"}.jpg`}
                      loading="lazy"
                      width="45"
                      height="392"
                      alt="magsafe"
                      className="mx-auto h-[392px] w-[45px] bg-[#fafafa] object-cover"
                    />

                  </div>
                  <div className="px-4 pt-5">
                    USB-C to MagSafe 3 Cable (2m)
                  </div>
                </li>
                <li className="grow basis-0 text-center">
                  <div className="flex h-[392px] relative  justify-between bg-[#fafafa]">
                    <img
                      src="/70w-adapter.jpg"
                      loading="lazy"
                      width="219"
                      height="392"
                      alt="adapter"
                      className="h-[392px] w-full object-cover align-top"
                    />
                  </div>
                  <div className="px-4 pt-5">70W Adapter</div>

                </li>
              </ul>
            </div>

            {/* WHAT TO CONSIDER */}
            <div className="mt-24 rounded-lg bg-[#FAFAFA] p-10">
              <p className="mt-4 text-3xl font-semibold">
                What to consider when choosing your MacBook Pro.
              </p>
              <p className="mt-4">Configure your laptop on the next step.</p>
              <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 font-light">
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

          {/* COMPARE MAC MODELS */}
          <div className="mt-6 w-screen bg-[#FAFAFA] py-20 text-center">
            <p className="mb-5 text-4xl font-semibold">Compare Mac models</p>
            <span className="font-light text-[#06C] hover:underline">
              <a target="_blank" href="https://contactretail.apple.com/">
                Choose the best Mac for you
              </a>
            </span>
            <img src="/mac-compare.png" alt="Mac compare" className="mx-auto h-80 text-center" />
          </div>

          {/* APPLE CARE */}
          <div className="mx-auto mt-20 max-w-7xl text-center">
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
              AppleCare+ purchase date and adds unlimited incidents of
              accidental damage protection, each subject to a service fee of RM
              469 for screen damage or external enclosure damage, or RM 1,429
              for other accidental damage. In addition, you‘ll get 24/7 priority
              access to Apple experts by chat or phone through{" "}
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
        </div>
      ) : (
        <div className="w-full animate-fadeIn">
          <div className="mx-auto flex max-w-7xl justify-center px-6">
            <div className="max-w-1/2 relative w-1/2 flex-col text-center text-sm">
              <div className="sticky top-0 mb-36">
                <img
                  src={`/mbp-${productSize}-${productColor.replace("-", "")}-cto-hero.jpg`}
                  alt="Macbook"
                  className="mx-auto w-96 cursor-pointer"
                />
                <div className="mb-9 py-6">
                  <span className="text-[#06C] hover:underline">
                    <a href="https://contactretail.apple.com">View gallery</a>
                  </span>
                </div>
                <div className="flex font-medium">
                  <div className="mx-auto text-center">
                    <svg
                      viewBox="0 0 35 35"
                      className="as-svgicon as-svgicon-shipping as-svgicon-base as-svgicon-shippingbase mx-auto"
                      role="img"
                      aria-hidden="true"
                      width="35px"
                      height="35px"
                    >
                      <path fill="none" d="M0 0h35v35H0z"></path>
                      <path d="M27.687 10.547l-9-4.852a2.5 2.5 0 00-2.373 0l-9 4.852A2.5 2.5 0 006 12.748v9.471a2.494 2.494 0 001.313 2.2l9 4.852a2.5 2.5 0 002.373 0l9-4.852a2.5 2.5 0 001.314-2.2v-9.471a2.5 2.5 0 00-1.313-2.201zm-10.9-3.971a1.5 1.5 0 011.424 0l9 4.852c.041.022.072.055.11.081l-4.41 2.507-9.628-5.55zm-4.538 2.446l9.651 5.566-4.4 2.5-9.823-5.58c.038-.026.07-.059.111-.081zM7.788 23.539A1.5 1.5 0 017 22.219v-9.471a1.494 1.494 0 01.069-.436L17 17.957v10.516a1.494 1.494 0 01-.212-.082zM28 22.219a1.5 1.5 0 01-.788 1.32l-9 4.851a1.481 1.481 0 01-.212.082V17.957l9.931-5.646a1.5 1.5 0 01.069.436z"></path>
                    </svg>
                    <p className="mt-2">Free delivery</p>
                  </div>
                  <div className="mx-auto text-center">
                    <svg
                      viewBox="0 0 35 35"
                      className="as-svgicon as-svgicon-return as-svgicon-base as-svgicon-returnbase mx-auto"
                      role="img"
                      aria-hidden="true"
                      width="35px"
                      height="35px"
                    >
                      <path fill="none" d="M0 0h35v35H0z"></path>
                      <path
                        d="M12.249 9.022l-4.461 2.4c-.041.022-.073.055-.111.081l9.823 5.588 4.4-2.5zM27.322 11.507c-.038-.025-.069-.058-.11-.081l-9-4.852a1.5 1.5 0 00-1.424 0l-3.5 1.889 9.628 5.55zM10.8 18.5a.5.5 0 01-.5.5H7v3.219a1.5 1.5 0 00.788 1.32l9 4.852a1.494 1.494 0 00.212.082V17.957l-9.931-5.645a1.494 1.494 0 00-.069.436V18h3.3a.5.5 0 01.5.5zM18 17.957v10.515a1.481 1.481 0 00.212-.082l9-4.851a1.5 1.5 0 00.788-1.32v-9.471a1.5 1.5 0 00-.069-.436z"
                        fill="none"
                      ></path>
                      <path d="M27.687 10.547l-9-4.852a2.5 2.5 0 00-2.373 0l-9 4.852A2.5 2.5 0 006 12.748V17h1v-4.252a1.494 1.494 0 01.069-.436L17 17.957v10.516a1.494 1.494 0 01-.212-.082l-9-4.852A1.5 1.5 0 017 22.219V20H6v2.219a2.494 2.494 0 001.313 2.2l9 4.852a2.5 2.5 0 002.373 0l9-4.852a2.5 2.5 0 001.314-2.2v-9.471a2.5 2.5 0 00-1.313-2.201zm-10.9-3.971a1.5 1.5 0 011.424 0l9 4.852c.041.022.072.055.11.081l-4.41 2.507-9.628-5.55zm-9.11 4.932c.038-.026.07-.059.111-.081l4.461-2.4 9.651 5.561-4.4 2.5zM28 22.219a1.5 1.5 0 01-.788 1.32l-9 4.851a1.481 1.481 0 01-.212.082V17.957l9.931-5.646a1.5 1.5 0 01.069.436z"></path>
                      <path d="M2.507 18l1.646-1.646a.5.5 0 00-.707-.707l-2.5 2.5a.5.5 0 000 .707l2.5 2.5a.5.5 0 10.707-.707L2.507 19H6v-1zM10.3 19a.5.5 0 000-1H7v1zM6 18h1v1H6z"></path>
                    </svg>
                    <p className="mt-2">Free and easy returns</p>
                  </div>
                </div>
                <div className="mt-6">
                  <p>Have questions about buying a Mac?</p>
                  <div>
                    <span className="text-[#06C] hover:underline">
                      <a href="https://contactretail.apple.com">
                        Chat with a Mac Specialist
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="ml-10 w-1/2 text-sm font-light">
              <h1 className="text-4xl font-semibold">
                Customise your {productSize}-inch Macbook Pro -{" "}
                {productColor
                  .replace("-", " ")
                  .replace(/\b\w/g, (c) => c.toUpperCase())}
              </h1>
              <div className="space-y-3 pb-10 pt-3">
                <p>
                  Apple {productChip.replace(/\b\w/g, (c) => c.toUpperCase())}{" "}
                  chip with {productCPU} core CPU, {productGPU}-core GPU and
                  16‑core Neural Engine
                </p>
                <p>{productMemory.toUpperCase()} unified memory</p>
                <p>{productStorage.toUpperCase()} SSD Storage</p>
                <p>{productSize}-inch Liquid Retina XDR display²</p>
                <p>USB-C Power Adapter</p>
                <p>
                  Three Thunderbolt 4 ports, HDMI port, SDXC card slot,
                  headphone jack, MagSafe 3 port
                </p>
                <p>Backlit Magic Keyboard with Touch ID - {selectedKeyboard}</p>
              </div>
              <hr />
              <div className="pb-7 pt-3">
                <p className="pb-3 font-medium">Add a trade-in</p>
                <p className="pb-3">
                  Get credit towards a new Mac when you trade in your eligible
                  computer. Or recycle it for free.**
                </p>
                <span className="text-[#06C] hover:underline">
                  <a href="https://contactretail.apple.com">Get started</a>
                </span>
              </div>
              <hr />

              {productConfig.chip &&
                Object.keys(productConfig.chip).length > 0 && (
                  <div className="mt-3">
                    <p className="text-base font-semibold">Chip (Processor)</p>
                    <span className="text-[#06C] hover:underline">
                      <a href="https://contactretail.apple.com">
                        Which chip is right for you?
                      </a>
                    </span>
                    <div className="mt-3 space-y-3">
                      {Object.entries(productConfig.chip).map(
                        ([key, value]: [string, any]) => (
                          <button
                            key={key}
                            onClick={() => handleChipConfigChange(key)}
                            className={clsx(
                              "flex min-h-20 w-full items-center justify-between rounded-xl border p-4 text-left",
                              key.toLowerCase() ==
                                `Apple ${productChip.replace("-", " ")} chip with ${productCPU}‑core CPU, ${productGPU}‑core GPU and 16‑core Neural Engine`.toLowerCase()
                                ? "border-2 border-[#0071E3]"
                                : "border-[#86868B]",
                            )}
                          >
                            <p className="w-1/2 text-left text-base font-medium">
                              {key}
                            </p>
                            <p
                              className={clsx(
                                "w-1/2 text-right text-base",
                                value == 0 && "hidden",
                                key.toLowerCase() ==
                                `Apple ${productChip.replace("-", " ")} chip with ${productCPU}‑core CPU, ${productGPU}‑core GPU and 16‑core Neural Engine`.toLowerCase() &&
                                "hidden",
                              )}
                            >
                              + RM{" "}
                              {value
                                .toFixed(2)
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </p>
                          </button>
                        ),
                      )}
                    </div>
                  </div>
                )}

              <div className="mt-3">
                <p className="text-base font-semibold">Memory</p>
                <span className="text-[#06C] hover:underline">
                  <a href="https://contactretail.apple.com">
                    How much memory is right for you?
                  </a>
                </span>
                <div className="mt-3 space-y-3">
                  {Object.entries(productConfig.memory).map(
                    ([key, value]: [string, any]) => (
                      <button
                        key={key}
                        disabled={
                          `${productSize}-inch-${productChip}` ==
                          "14-inch-m3-pro" &&
                          ["48gb", "64gb", "96gb", "128gb"].includes(
                            key.toLowerCase().split(" ")[0],
                          )
                        }
                        onClick={() => handleMemoryConfigChange(key)}
                        className={clsx(
                          "flex min-h-20 w-full items-center justify-between rounded-xl border p-4 text-left disabled:opacity-40",
                          productMemory.toLowerCase() ==
                            key.toLowerCase().split(" ")[0]
                            ? "border-2 border-[#0071E3]"
                            : "border-[#86868B]",
                        )}
                      >
                        <p className="w-1/2 text-base font-medium">{key}</p>
                        <p
                          className={clsx(
                            "w-1/2 text-right text-base",
                            productMemory.toLowerCase() ==
                            key.toLowerCase().split(" ")[0] && "hidden",
                          )}
                        >
                          + RM{" "}
                          {value
                            .toFixed(2)
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </p>
                      </button>
                    ),
                  )}
                </div>
              </div>
              <div className="mt-3">
                <p className="text-base font-semibold">Storage</p>
                <span className="text-[#06C] hover:underline">
                  <a href="https://contactretail.apple.com">
                    How much storage is right for you?
                  </a>
                </span>
                <div className="mt-3 space-y-3">
                  {Object.entries(productConfig.storage).map(
                    ([key, value]: [string, any]) => (
                      <button
                        key={key}
                        onClick={() => handleStorageConfigChange(key)}
                        disabled={
                          `${productSize}-inch-${productChip}` ==
                          "14-inch-m3-pro" &&
                          ["8tb"].includes(key.toLowerCase().split(" ")[0])
                        }
                        className={clsx(
                          "flex min-h-20 w-full items-center justify-between rounded-xl border p-4 text-left disabled:opacity-40",
                          productStorage.toLowerCase() ==
                            key.toLowerCase().split(" ")[0]
                            ? "border-2 border-[#0071E3]"
                            : "border-[#86868B]",
                        )}
                      >
                        <p className="w-1/2 text-base font-medium">{key}</p>
                        <p
                          className={clsx(
                            "w-1/2 text-right text-base",
                            productStorage.toLowerCase() ==
                            key.toLowerCase().split(" ")[0] && "hidden",
                          )}
                        >
                          + RM{" "}
                          {value
                            .toFixed(2)
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </p>
                      </button>
                    ),
                  )}
                </div>
              </div>
              {productConfig.power &&
                Object.keys(productConfig.power).length > 0 && (
                  <div className="mt-3">
                    <p className="text-base font-semibold">Power Adapter</p>
                    <span className="text-[#06C] hover:underline">
                      <a href="https://contactretail.apple.com">
                        Which power adapter is right for you?
                      </a>
                    </span>
                    <div className="mt-3 space-y-3">
                      {Object.entries(productConfig.power).map(
                        ([key, value]: [string, any]) => (
                          <button
                            key={key}
                            onClick={() => handleChipConfigChange(key)}
                            className="flex min-h-20 w-full items-center justify-between rounded-xl border border-[#86868B] p-4"
                          >
                            <p className="w-1/2 text-left text-base font-medium">
                              {key}
                            </p>
                            <p
                              className={clsx(
                                "w-1/2 text-right text-base",
                                value == 0 && "hidden",
                              )}
                            >
                              + RM{" "}
                              {value
                                .toFixed(2)
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </p>
                          </button>
                        ),
                      )}
                    </div>
                  </div>
                )}
              <div className="mt-3">
                <p className="text-base font-semibold">Keyboard Language</p>
                <span className="text-[#06C] hover:underline">
                  <a href="https://contactretail.apple.com">Learn more</a>
                </span>
                <div className="relative mt-3">
                  <select
                    id="countries"
                    onChange={handleSelectChange}
                    className="w-full cursor-pointer appearance-none text-ellipsis rounded-xl border border-[#86868b] bg-[#fffc] px-3 pb-2 pt-6 text-base focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="US English">
                      Backlit Magic Keyboard with Touch ID - US English
                    </option>
                    <option value="Chinese (PinYin)">
                      Backlit Magic Keyboard with Touch ID - Chinese (PinYin)
                    </option>
                    <option value="Chinese (ZhuYin)">
                      Backlit Magic Keyboard with Touch ID - Chinese (ZhuYin)
                    </option>
                    <option value="Arabic">
                      Backlit Magic Keyboard with Touch ID - Arabic
                    </option>
                    <option value="Japanese">
                      Backlit Magic Keyboard with Touch ID - Japanese
                    </option>
                  </select>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#6e6e73"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-chevron-down absolute inset-y-[1.3rem] right-3"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                  <span className="absolute left-3 top-2 text-xs text-[#6e6e73]">
                    Keyboard Language
                  </span>
                </div>
              </div>
              <div className="mt-3 bg-[#FAFAFA] p-8">
                <p className="font-medium">Need a moment?</p>
                <p className="mr-5 pb-2">
                  Keep all your selections by saving this device to Your Saves,
                  then come back anytime and pick up right where you left off.
                </p>
                <span className="text-[#06C] hover:underline">
                  <a href="https://contactretail.apple.com">Save for later</a>
                </span>
              </div>
            </div>
          </div>
          <div className="relative mx-auto mt-10 flex h-[422px] w-full items-center justify-center bg-black lg:max-w-7xl">
            <div className="absolute left-3 z-10 ml-4 text-white md:left-20 lg:left-36">
              <img
                src="/apple-tv-plus-logo.png"
                alt="Apple TV"
                className="h-5 w-12"
              />
              <p className="mt-4 text-3xl font-medium">
                Get 3 months of
                <br />
                Apple TV+ free when
                <br />
                you buy a Mac.***
              </p>
              <div className="mt-4 flex items-center space-x-7">
                <span className="text-[#06C] hover:underline">
                  <a href="https://contactretail.apple.com">Try it free</a>
                </span>
                <span className="text-[#06C] hover:underline">
                  <a href="https://contactretail.apple.com">Learn more</a>
                </span>{" "}
              </div>
            </div>
            <img
              src="/apple-tv-plus-mac-argylle.jpg"
              alt="Apple TV"
              width={1200}
              height={422}
              className="aspect-h-376 absolute right-0 aspect-[1070/376] max-h-[422px] max-w-[1200px] overflow-clip text-right"
            />
          </div>
          <div className="fixed bottom-0 z-50 min-h-32 w-screen animate-fadeIn border-t border-[#d2d2d7] bg-[#f5f5f7] px-6 duration-300">
            <div className="mx-auto flex max-w-7xl justify-between space-x-2 pt-4">
              <div className="flex">
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
                <div className="font-light">
                  <p className="text-base font-medium">Ships:</p>
                  <p className="text-sm">In stock</p>
                  <p className="text-sm">Free Shipping</p>
                  <p className="text-sm text-[#06C] hover:underline">
                    Get delivery dates
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex flex-col text-right text-2xl font-semibold">
                  <p>
                    RM
                    {totalPrice
                      .toFixed(2)
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    <span>or</span>
                  </p>
                  <p>
                    RM{" "}
                    {(totalPrice / 24)
                      .toFixed(2)
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    /mo. for 24 mo.*
                  </p>
                  <p className="text-sm font-light text-[#06C] hover:underline">
                    Explore monthly instalment options &gt;
                  </p>
                </div>
                <button className="rounded-lg bg-[#0071E3] px-4 py-2 text-sm font-light text-white">
                  Add to Bag
                </button>
                <svg
                  width="35"
                  height="35"
                  style={{ fill: "#0071E3" }}
                  className="as-svgicon as-svgicon-bookmark as-svgicon-base as-svgicon-bookmarkbase"
                  role="img"
                  aria-hidden="true"
                >
                  <path fill="none" d="M0 0h35v35H0z"></path>
                  <path d="M21.952 6.433a2.157 2.157 0 0 1 1.567.481A2.228 2.228 0 0 1 24 8.516v19.866a.709.709 0 0 1-.018.178.7.7 0 0 1-.058-.013 8.985 8.985 0 0 1-.757-.674l-4.866-4.901a1.111 1.111 0 0 0-1.602 0l-4.857 4.891a7.25 7.25 0 0 1-.754.676.145.145 0 0 1-.053.028h-.015a.681.681 0 0 1-.02-.185V8.516a2.228 2.228 0 0 1 .48-1.602 2.158 2.158 0 0 1 1.568-.48h8.904m0-1h-8.904a3.077 3.077 0 0 0-2.278.776A3.144 3.144 0 0 0 10 8.516v19.866a1.276 1.276 0 0 0 .276.868.956.956 0 0 0 .76.317 1.073 1.073 0 0 0 .632-.213 8.377 8.377 0 0 0 .874-.776l4.866-4.9a.115.115 0 0 1 .184 0l4.866 4.9a10.454 10.454 0 0 0 .868.77 1.048 1.048 0 0 0 .639.219.956.956 0 0 0 .76-.317 1.276 1.276 0 0 0 .275-.868V8.516a3.144 3.144 0 0 0-.77-2.306 3.077 3.077 0 0 0-2.278-.776Z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
