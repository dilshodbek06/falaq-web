import { ChevronRight } from "lucide-react";
import Product from "./product";
import { Button } from "./ui/button";

const BooksWithType = () => {
  return (
    <div className="container max-w-7xl mx-auto px-3 sm:px-1 pb-3 sm:py-6 mb-3">
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-xl md:text-3xl">Siz uchun mahsus</h1>
        <Button
          variant={"link"}
          className="cursor-pointer text-[16px] text-[#348AEC] font-semibold"
        >
          Ko&apos;proq
          <ChevronRight size={20} className="-ml-1 mt-[3px] text-black" />
        </Button>
      </div>
      <div className="mt-6 grid grid-flow-col auto-cols-[minmax(150px,1fr)] sm:auto-cols-[minmax(180px,1fr)] md:auto-cols-[minmax(200px,1fr)] gap-5 overflow-x-auto scrollbar-hide overflow-y-hidden">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default BooksWithType;
