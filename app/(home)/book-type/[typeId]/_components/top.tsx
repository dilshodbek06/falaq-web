"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const Top = () => {
  const router = useRouter();

  const handleBack = () => router.back();

  return (
    <div
      onClick={handleBack}
      role="button"
      className="flex items-center w-fit cursor-pointer select-none"
    >
      <Button
        variant="link"
        size="icon"
        className="p-0 -ml-2 text-base text-[#348AEC] font-semibold"
      >
        <ChevronLeft className="size-6 text-black" />
      </Button>
      <h1 className="ml-1 font-semibold text-xl md:text-3xl">
        Siz uchun mahsus
      </h1>
    </div>
  );
};

export default Top;
