import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

const SignUpPage = () => {
  return (
    <div className="h-screen flex lg:flex-row items-center p-4 md:p-[10px] gap-5">
      <div className="w-full max-w-[705px] h-auto md:h-full rounded-[16px] bg-[#7BCFEB] justify-center items-center hidden md:flex">
        <Image
          alt="image"
          src={"./images/signup.svg"}
          width={400}
          height={400}
        />
      </div>
      <div className=" w-full h-full flex justify-center items-center">
        <div className="max-w-[24rem]  w-full">
          <h1 className="text-center text-gray-900 font-semibold text-xl md:text-2xl">
            Ro&apos;yhatdan o&apos;tish
          </h1>
          <div className="mt-3">
            <div>
              <label htmlFor="name" className="text-gray-700 text-sm">
                To&apos;liq ism
              </label>
              <br />
              <Input
                type="text"
                id="name"
                placeholder="ism familiya..."
                className="mt-1 py-6"
              />
            </div>
            <div className="mt-2">
              <label htmlFor="phone" className="text-gray-700 text-sm">
                Telefon raqam
              </label>
              <br />
              <Input
                type="tel"
                id="phone"
                placeholder="+998..."
                className="mt-1 py-6"
              />
            </div>
            <div className="mt-2">
              <label htmlFor="password" className="text-gray-700 text-sm">
                Parol
              </label>
              <br />
              <Input
                type="password"
                id="password"
                placeholder="password..."
                className="mt-1 py-6"
              />
            </div>
            <div className="mt-3">
              <label htmlFor="term" className="flex items-start gap-3">
                <Checkbox
                  id="term"
                  className="data-[state=checked]:bg-[#007AFF] data-[state=checked]:border-[#007AFF] w-5 h-5 mt-[2px]"
                />
                <span className="select-none">
                  I have read and agree to the{" "}
                  <Link className="text-[#007AFF]" href={""}>
                    Terms of Use
                  </Link>{" "}
                  and{" "}
                  <Link href={"/"} className="text-[#007AFF]">
                    Privacy Policy
                  </Link>
                </span>
              </label>
            </div>
            <Button className="w-full bg-[#007AFF] hover:bg-[#007bffe5] active:scale-95 transition-all duration-300 cursor-pointer py-7 mt-10 font-bold text-[15px]">
              Tizimga kirish
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
