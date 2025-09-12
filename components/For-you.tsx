"use client";

import React from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

type CarouselProps = {
  children: React.ReactNode;
  className?: string;
};

const Carousel: React.FC<CarouselProps> = ({ children, className = "" }) => {
  return <div className={`relative ${className}`}>{children}</div>;
};

type CarouselContentProps = {
  children: React.ReactNode;
};

const CarouselContent: React.FC<CarouselContentProps> = ({ children }) => {
  return (
    <div className="flex overflow-x-auto scrollbar-hide space-x-4 pb-4">
      {children}
    </div>
  );
};

type CarouselItemProps = {
  children: React.ReactNode;
};

const CarouselItem: React.FC<CarouselItemProps> = ({ children }) => {
  return <div className="flex-none">{children}</div>;
};

type CarouselButtonProps = {
  onClick?: () => void;
};

const CarouselPrevious: React.FC<CarouselButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute -left-4 top-[43%] -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-200 hover:scale-105"
    >
      <ChevronLeft className="w-5 h-5 text-gray-700" />
    </button>
  );
};

const CarouselNext: React.FC<CarouselButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute -right-4 top-[43%] -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-200 hover:scale-105"
    >
      <ChevronRight className="w-5 h-5 text-gray-700" />
    </button>
  );
};

// ----------------- BOOK CARD -----------------

interface Book {
  title: string;
  image?: string;
  bgColor?: string;
}

const BookCard: React.FC<Book> = ({
  title,
  image,
  bgColor = "bg-blue-500",
}) => {
  return (
    <div className="w-32 h-44 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
      <div
        className={`w-full h-full ${bgColor} relative flex items-center justify-center p-3`}
      >
        <div className="text-white text-center">
          <div className="text-sm font-semibold leading-tight">{title}</div>
          {image && <div className="mt-2 text-xs opacity-90">{image}</div>}
        </div>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
      </div>
    </div>
  );
};

// ----------------- MAIN SECTION -----------------

const BookShowcaseSection: React.FC = () => {
  const forYouBooks: Book[] = [
    { title: "BARAKA 700 SAVOQ", bgColor: "bg-teal-600" },
    { title: "CHUNKI SIZ MU'AMMOSIZ", bgColor: "bg-orange-800" },
    { title: "RASULULOH 101 QISSA", bgColor: "bg-red-900" },
    { title: "SEHRLANGAN QOR", bgColor: "bg-yellow-600" },
  ];

  const popular2024Books: Book[] = [
    { title: "BARAKA 700 SAVOQ", bgColor: "bg-gray-800" },
    { title: "АЛОМ СИРИ УНДИРГА ЁКИНИ", bgColor: "bg-sky-400" },
    { title: "ЧУНКИ СИЗ МУ'АММОСИЗ", bgColor: "bg-slate-700" },
    { title: "РАСУЛУЛЛОХ МУ'ДЖАЗ ҲИКОЯЛАРИ", bgColor: "bg-green-700" },
  ];

  const scrollCarousel = (direction: "next" | "prev", containerId: string) => {
    const container = document.getElementById(containerId);
    if (container) {
      const scrollAmount = 200;
      container.scrollBy({
        left: direction === "next" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full container max-w-7xl mx-auto py-6 px-3 sm:px-1 space-y-6">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* For You Section */}
        <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-3xl  p-5 sm:p-8">
          <div className="mb-6">
            <h2 className="text-xl sm:text-3xl font-bold text-gray-800 mb-2">
              Siz uchun maxsus
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <Carousel className="relative">
            <CarouselContent>
              <div
                id="carousel-1"
                className="flex overflow-x-auto scrollbar-hide space-x-4 pb-4"
              >
                {forYouBooks.map((book, index) => (
                  <CarouselItem key={index}>
                    <BookCard {...book} />
                  </CarouselItem>
                ))}
              </div>
            </CarouselContent>
            <CarouselPrevious
              onClick={() => scrollCarousel("prev", "carousel-1")}
            />
            <CarouselNext
              onClick={() => scrollCarousel("next", "carousel-1")}
            />
          </Carousel>
        </div>

        {/* Popular 2024 Section */}
        <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl p-5 sm:p-8">
          <div className="mb-6">
            <h2 className="text-xl sm:text-3xl font-bold text-gray-800 mb-2">
              2024-yilda mashhur
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <Carousel className="relative">
            <CarouselContent>
              <div
                id="carousel-2"
                className="flex overflow-x-auto scrollbar-hide space-x-4 pb-4"
              >
                {popular2024Books.map((book, index) => (
                  <CarouselItem key={index}>
                    <BookCard {...book} />
                  </CarouselItem>
                ))}
              </div>
            </CarouselContent>
            <CarouselPrevious
              onClick={() => scrollCarousel("prev", "carousel-1")}
            />
            <CarouselNext
              onClick={() => scrollCarousel("next", "carousel-2")}
            />
          </Carousel>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default BookShowcaseSection;
