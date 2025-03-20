import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const categories = [
  { id: 1, title: "Project Management", jobs: 35, icon: "📧" },
  { id: 2, title: "Customer Service", jobs: 46, icon: "📦" },
  { id: 3, title: "Software Engineering", jobs: 60, icon: "💻" },
  { id: 4, title: "Human Resource HR", jobs: 74, icon: "📂" },
  { id: 5, title: "IT & Networking", jobs: 20, icon: "🔌" },
  { id: 6, title: "IT & Networking", jobs: 20, icon: "🔌" },
  { id: 7, title: "IT & Networking", jobs: 20, icon: "🔌" },
];

export default function Cetagories() {
  return (
    <div className="max-w-7xl mx-auto py-10">
      <h2 className="text-center text-3xl font-bold">Popular Categories</h2>
      <p className="text-center text-gray-500 mt-2">
        Search all open positions on the web. Get your own personalized salary estimate.
      </p>

      <div className="relative mt-6 p-3">
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation
          loop={true}
        >
          {categories.map((category) => (
            <SwiperSlide key={category.id}>
              <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
                <div className="text-4xl bg-gray-100 p-4 rounded-full">{category.icon}</div>
                <h3 className="mt-4 text-lg font-semibold">{category.title}</h3>
                <p className="text-gray-500">{category.jobs} Jobs</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
