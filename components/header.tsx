import {
  ChevronDown,
  CircleUser,
  SearchIcon,
  ShoppingCart,
} from "lucide-react";
import Logo from "./logo";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="min-h-[84px] flex items-center bg-white shadow-[0px_7px_16px_0px_rgba(87,143,183,0.10),0px_115px_46px_0px_rgba(87,143,183,0.01)]">
      <div className="container max-w-7xl mx-auto flex items-center justify-between px-3">
        <Logo />
        <div className="relative w-1/3 hidden sm:block">
          <SearchIcon
            size={18}
            className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-3"
          />
          <Input placeholder="Qidirish..." className="pl-10" />
          <ChevronDown
            size={18}
            className="text-gray-400 absolute top-1/2 -translate-y-1/2 right-3"
          />
        </div>
        <div className="flex items-center gap-2">
          <Button
            size={"icon"}
            variant={"link"}
            className="cursor-pointer group"
          >
            <ShoppingCart
              size={24}
              className="size-6 group-hover:scale-105 transition-all duration-300"
            />
          </Button>
          <Button
            size={"icon"}
            variant={"link"}
            className="cursor-pointer group"
          >
            <CircleUser
              size={24}
              className="size-6 group-hover:scale-105 transition-all duration-300"
            />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
