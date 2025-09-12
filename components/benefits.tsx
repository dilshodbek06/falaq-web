// components/FeaturesSection.tsx
import { Bolt, ShieldCheck, ThumbsUp, Star } from "lucide-react";

const features = [
  {
    icon: <Bolt className="h-6 w-6 text-blue-700" />,
    title: "Tez yetkazib berish",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-blue-700" />,
    title: "Xavfsiz to'lov",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli.",
  },
  {
    icon: <ThumbsUp className="h-6 w-6 text-blue-700" />,
    title: "Eng yaxshi sifat",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli.",
  },
  {
    icon: <Star className="h-6 w-6 text-blue-700" />,
    title: "Qaytish kafolati",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli.",
  },
];

export default function Benefits() {
  return (
    <section className="bg-[#E9F2F8] py-7">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-xs flex items-start gap-4 hover:shadow-sm transition"
          >
            <div className="bg-blue-100 p-3 rounded-xl flex items-center justify-center">
              {feature.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
