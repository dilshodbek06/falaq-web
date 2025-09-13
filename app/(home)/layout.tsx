import BottomNavigation from "@/components/bottom-navigation";
import Footer from "@/components/footer";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <div className="hidden sm:block">
        <Footer />
      </div>
      <div className="pb-5 sm:pb-0">
        <BottomNavigation />
      </div>
    </div>
  );
}
