import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <div className="flex items-center gap-3">
        <Image
          alt="Falaq Nashr logo"
          src={"./images/logo.svg"}
          width={50}
          height={50}
        />
        <h1 className="text-2xl font-medium">Falaq Nashr</h1>
      </div>
    </Link>
  );
};

export default Logo;
