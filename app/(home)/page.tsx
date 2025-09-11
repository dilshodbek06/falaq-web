import Header from "@/components/header";
import MobileNavbar from "@/components/MobileNavbar";

export default function Home() {
  return (
    <div className="xs:bg-[#E9F2F8]">
      <div className="hidden xs:block">
        <Header />
      </div>
      <div className="xs:hidden">
        <MobileNavbar />
      </div>
    </div>
  );
}
