import { Heart } from "lucide-react";
import Image from "next/image";

const Product = () => {
  return (
    <div className="max-w-[194px] shrink-0 w-full rounded-md cursor-pointer hover:scale-[101%] transition-all duration-300">
      <div className="max-w-[194px] relative flex justify-center items-center">
        <Image
          src={"/images/book2.png"}
          alt=""
          width={194}
          height={271}
          quality={100}
          priority
          className={`w-full transition-opacity duration-300 `}
        />
        <div className="w-[35px] h-[35px] rounded-full flex justify-center items-center absolute top-2 right-3 bg-white">
          <Heart size={18} />
        </div>
      </div>
      <div>
        <p className="line-clamp-1 text-lg font-semibold mt-2">
          Mashaqqatlar sari
        </p>
        <p className="text-[#7C7C7C] text-[13px] line-clamp-1">
          Abdulloh Muhammad
        </p>
        <div className="flex items-center justify-between mt-1">
          <p className="font-bold text-xl mt-2 text-[#207BBE]">24 000 so’m</p>
        </div>
      </div>
    </div>
  );
};

export default Product;

//  <Card className="w-[20rem] border-0 bg-transparent py-3 shadow-none gap-0 pt-0">
//       <CardContent className="mt-1 text-[15px] text-muted-foreground px-5 relative">
//         <div className="mt-5 w-full aspect-square flex justify-center items-center bg-[#F7F7F7] rounded-xl">
//           <Image
//             alt="image"
//             src={"/images/product.png"}
//             width={190}
//             height={200}
//           />
//         </div>
//         <div className="flex justify-center items-center rounded-full w-[40px] h-[40px] bg-white absolute top-7 right-9 cursor-pointer">
//           <Heart size={20} />
//         </div>
//       </CardContent>
//       <CardHeader className="pt-3 px-5 gap-0 flex flex-col">
//         <h1 className="text-lg font-semibold text-[#11142D] line-clamp-1">
//           Mashaqqatlar sari
//         </h1>
//         <p className="text-[#7C7C7C] text-[13px] line-clamp-1">
//           Abdulloh Muhammad
//         </p>
//         <p className="font-semibold text-lg mt-3 text-[#207BBE]">34 000 so’m</p>
//       </CardHeader>

//       <CardFooter className="mt-3 px-5">
//         <Button className=" hover:bg-[#348aec3a] py-5 cursor-pointer active:scale-95 transition-all duration-300 bg-opacity-50 rounded-xl w-full bg-[#348AEC26] text-[#348AEC]">
//           Savatga qo’shish
//         </Button>
//       </CardFooter>
//     </Card>
