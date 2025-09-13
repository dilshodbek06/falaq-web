import AdsSection from "@/components/ads-section";
import Benefits from "@/components/benefits";
import BookWithTypeWrapper from "@/components/BookWithTypeWrapper";
import BookShowcaseSection from "@/components/For-you";
import Header from "@/components/header";
import MobileNavbar from "@/components/MobileNavbar";

export default function Home() {
  return (
    <div className="sm:bg-[#E9F2F8]">
      {/* Header */}
      <div className="hidden xs:block">
        <Header />
      </div>
      {/* Mobile Header */}
      <div className="xs:hidden">
        <MobileNavbar />
      </div>
      {/* Ads Section */}
      <div>
        <AdsSection />
      </div>
      {/* Benefits Section */}
      <div>
        <Benefits />
      </div>
      {/* For you and Famous Section */}
      <div>
        <BookShowcaseSection />
      </div>
      {/* Books with type Section */}
      <div>
        <BookWithTypeWrapper />
      </div>
      {/* Footer */}
    </div>
  );
}
