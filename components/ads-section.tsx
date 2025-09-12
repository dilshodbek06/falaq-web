import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";

const AdsSection = () => {
  return (
    <div className="container mx-auto max-w-7xl border py-6 md:py-14 px-3 md:px-1">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch">
        {/* CENTER CARD - First on mobile/tablet, middle on desktop */}
        <div className="lg:col-span-2 lg:order-2">
          <div className="relative flex flex-row justify-between bg-gradient-to-r from-blue-300 to-blue-400 rounded-2xl p-4 sm:p-8 md:p-12 shadow-lg items-center sm:items-start h-full">
            <div className="flex-1 text-left space-y-2 sm:space-y-4 pr-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-black leading-tight">
                Yangi kitoblar kelib tushdi!
              </h2>
              <p className="hidden sm:block text-sm sm:text-base md:text-lg text-black/80">
                Bolalar, badiiy va ilmiy adabiyotlar — barchasi bizda!
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-xl text-sm sm:text-base md:text-lg shadow cursor-pointer">
                Hozir xarid qiling
              </Button>
            </div>
            <div className="flex-shrink-0 relative flex justify-center items-end">
              <div className="relative w-24 h-32 sm:w-32 sm:h-44 md:w-52 md:h-72 lg:w-64 lg:h-86">
                <Image
                  src="/images/product.png"
                  alt="50 Ta Yopq"
                  width={200}
                  height={200}
                  className="object-contain drop-shadow-2xl absolute bottom-0 right-0 sm:bottom-3 sm:right-3 rotate-12 w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* SIDE CARDS CONTAINER - Row on mobile/tablet after center card */}
        <div className="col-span-1 lg:hidden grid grid-cols-2 gap-4">
          {/* LEFT CARD */}
          <div className="w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-lg p-4 sm:p-6 text-center bg-[url('/images/ads-overlay1.svg')] bg-cover bg-center h-full">
              <div className="relative z-10">
                <h2 className="text-white text-xl sm:text-3xl font-bold">
                  Best Seller
                </h2>
                <p className="text-white/90 text-xs sm:text-[15px] mb-2 sm:mb-4">
                  Bu hafta eng ko&apos;p sotilgan
                </p>

                <Carousel className="w-full">
                  <CarouselContent>
                    {[1, 2, 3].map((item) => (
                      <CarouselItem key={item}>
                        <div className="flex flex-col items-center">
                          <div className="relative w-24 h-32 sm:w-40 sm:h-56 mb-2 sm:mb-4">
                            <Image
                              src="/images/product.png"
                              alt="Yig'loqi bolaga 50 ta chora"
                              width={200}
                              height={200}
                              className="rounded-lg object-cover w-full h-full"
                            />
                          </div>
                          <p className="text-white text-sm sm:text-lg font-semibold mb-1 sm:mb-2 line-clamp-2">
                            Yig&apos;loqi bolaga 50 ta chora {item}
                          </p>
                          <button className="bg-white text-black font-bold text-sm sm:text-lg px-3 py-1 sm:px-6 sm:py-2 rounded-xl shadow cursor-pointer hover:opacity-80">
                            99 000 UZS
                          </button>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="-left-2 sm:-left-3 top-1/3 bg-white/30 hover:bg-white/50 text-white w-6 h-6 sm:w-8 sm:h-8" />
                  <CarouselNext className="-right-2 sm:-right-3 top-1/3 bg-white/30 hover:bg-white/50 text-white w-6 h-6 sm:w-8 sm:h-8" />
                </Carousel>
              </div>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-lg p-4 sm:p-6 text-center bg-[url('/images/ads-overlay2.svg')] bg-cover bg-center h-full">
              <div className="relative z-10">
                <h2 className="text-white text-xl sm:text-3xl font-bold">
                  Chegirma
                </h2>
                <p className="text-white/90 text-xs sm:text-[15px] mb-2 sm:mb-4">
                  Bu hafta eng ko&apos;p sotilgan
                </p>

                <Carousel className="w-full">
                  <CarouselContent>
                    {[1, 2, 3].map((item) => (
                      <CarouselItem key={item}>
                        <div className="flex flex-col items-center">
                          <div className="relative w-24 h-32 sm:w-40 sm:h-56 mb-2 sm:mb-4">
                            <Image
                              src="/images/product.png"
                              alt="Yig'loqi bolaga 50 ta chora"
                              width={200}
                              height={200}
                              className="rounded-lg object-cover w-full h-full"
                            />
                          </div>
                          <p className="text-white text-sm sm:text-lg font-semibold mb-1 sm:mb-2 line-clamp-2">
                            Eng go&apos;zal qissalar {item}
                          </p>
                          <button className="bg-white text-black font-bold text-sm sm:text-lg px-3 py-1 sm:px-6 sm:py-2 rounded-xl shadow cursor-pointer hover:opacity-80">
                            99 000 UZS
                          </button>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="-left-2 sm:-left-3 top-1/3 bg-white/30 hover:bg-white/50 text-white w-6 h-6 sm:w-8 sm:h-8" />
                  <CarouselNext className="-right-2 sm:-right-3 top-1/3 bg-white/30 hover:bg-white/50 text-white w-6 h-6 sm:w-8 sm:h-8" />
                </Carousel>
              </div>
            </div>
          </div>
        </div>

        {/* DESKTOP ONLY - LEFT CARD */}
        <div className="hidden lg:block lg:order-1">
          <div className="relative rounded-2xl overflow-hidden shadow-lg p-6 text-center bg-[url('/images/ads-overlay1.svg')] bg-cover bg-center max-w-sm mx-auto h-full">
            <div className="relative z-10">
              <h2 className="text-white text-3xl font-bold">Best Seller</h2>
              <p className="text-white/90 text-[15px] mb-4">
                Bu hafta eng ko&apos;p sotilgan
              </p>

              <Carousel className="w-full">
                <CarouselContent>
                  {[1, 2, 3].map((item) => (
                    <CarouselItem key={item}>
                      <div className="flex flex-col items-center">
                        <div className="relative w-40 h-56 mb-4">
                          <Image
                            src="/images/product.png"
                            alt="Yig'loqi bolaga 50 ta chora"
                            width={200}
                            height={200}
                            className="rounded-lg object-cover"
                          />
                        </div>
                        <p className="text-white text-lg font-semibold mb-2">
                          Yig&apos;loqi bolaga 50 ta chora {item}
                        </p>
                        <button className="bg-white text-black font-bold text-lg px-6 py-2 rounded-xl shadow cursor-pointer hover:opacity-80">
                          99 000 UZS
                        </button>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="-left-3 top-1/3 bg-white/30 hover:bg-white/50 text-white" />
                <CarouselNext className="-right-3 top-1/3 bg-white/30 hover:bg-white/50 text-white" />
              </Carousel>
            </div>
          </div>
        </div>

        {/* DESKTOP ONLY - RIGHT CARD */}
        <div className="hidden lg:block lg:order-3">
          <div className="relative rounded-2xl overflow-hidden shadow-lg p-6 text-center bg-[url('/images/ads-overlay2.svg')] bg-cover bg-center max-w-sm mx-auto h-full">
            <div className="relative z-10">
              <h2 className="text-white text-3xl font-bold">Chegirma</h2>
              <p className="text-white/90 text-[15px] mb-4">
                Bu hafta eng ko&apos;p sotilgan
              </p>

              <Carousel className="w-full">
                <CarouselContent>
                  {[1, 2, 3].map((item) => (
                    <CarouselItem key={item}>
                      <div className="flex flex-col items-center">
                        <div className="relative w-40 h-56 mb-4">
                          <Image
                            src="/images/product.png"
                            alt="Yig'loqi bolaga 50 ta chora"
                            width={200}
                            height={200}
                            className="rounded-lg object-cover"
                          />
                        </div>
                        <p className="text-white text-lg font-semibold mb-2">
                          Eng go&apos;zal qissalar {item}
                        </p>
                        <button className="bg-white text-black font-bold text-lg px-6 py-2 rounded-xl shadow cursor-pointer hover:opacity-80">
                          99 000 UZS
                        </button>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="-left-3 top-1/3 bg-white/30 hover:bg-white/50 text-white" />
                <CarouselNext className="-right-3 top-1/3 bg-white/30 hover:bg-white/50 text-white" />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdsSection;
