import Product from "@/components/product";
import Top from "./_components/top";
import Footer from "@/components/footer";

const Page = () => {
  return (
    <div className="min-h-screen bg-white sm:bg-[#E9F2F8]">
      <div className="container max-w-7xl mx-auto px-3 sm:px-5 py-4 sm:py-6 mb-3">
        <Top />

        <div className="mt-4 sm:mt-10 gap-5 grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
