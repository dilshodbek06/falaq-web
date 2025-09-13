"use client";

import { House, Search, Trash2, User } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRouter } from "nextjs-toploader/app";

const BottomNavigation = () => {
  const pathName = usePathname();
  const router = useRouter();

  const navItems = [
    {
      id: "asosiy",
      label: "Asosiy",
      href: "/",
      icon: <House className="w-6 h-6" />,
      isActive: pathName === "/",
    },
    {
      id: "qidirish",
      label: "Qidirish",
      href: "/books",
      icon: <Search className="w-6 h-6" />,
      isActive: pathName === "/books",
    },
    {
      id: "falaq",
      label: "",
      href: "/",
      isActive: pathName === "/",
      icon: (
        <div>
          <Image
            alt="Falaq Nashr"
            src={"/images/bottom-logo.svg"}
            width={44}
            height={44}
          />
        </div>
      ),
    },
    {
      id: "savatcha",
      label: "Savatcha",
      href: "/cart",
      isActive: pathName === "/cart",
      icon: <Trash2 className="w-6 h-6" />,
    },
    {
      id: "profil",
      label: "Profil",
      href: "/settings/profile",
      isActive: pathName === "/settings/profile",
      icon: <User className="w-6 h-6" />,
    },
  ];

  return (
    <div className="fixed z-[100] bottom-0 left-0 right-0 bg-white px-3 py-2 sm:hidden">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => router.push(item.href)}
            className={`flex flex-col items-center py-2 px-3 min-w-0 cursor-pointer ${
              item.isActive ? "text-[#2962FF]" : "text-[#A9C0FF]"
            }`}
          >
            <div className="mb-1 flex-shrink-0">{item.icon}</div>
            <div className="text-center">
              <div
                className={`text-xs font-medium leading-tight ${
                  item.isActive ? "text-[#2962FF]" : "text-[#A9C0FF]"
                }`}
              >
                {item.label}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BottomNavigation;
