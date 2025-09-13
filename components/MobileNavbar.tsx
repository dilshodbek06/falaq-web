import Image from "next/image";
import { Button } from "./ui/button";
import { Heart } from "lucide-react";

const MobileNavbar = () => {
  return (
    <header>
      <div className="container px-3 py-2 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-[48px] h-[48px] rounded-full bg-gradient-to-tr to-[#00BCE6]  from-[#D500F9]">
            <Image
              alt="logo"
              src={"./images/user.svg"}
              width={80}
              height={80}
              priority
            />
          </div>
          <div>
            <h4 className="text-gray-900 text-[14px] font-semibold">
              Islom Muhammad
            </h4>
            <p className="text-gray-400 text-[11px]">+998 88 111 47 47</p>
          </div>
        </div>
        <Button
          aria-label="Heart"
          size={"icon"}
          className="cursor-pointer bg-blue-100 hover:bg-blue-100 w-10 h-10"
        >
          <Heart className="size-5 text-blue-500" />
        </Button>
      </div>
    </header>
  );
};

export default MobileNavbar;
