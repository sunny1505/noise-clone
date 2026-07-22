import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    tag: "NEXT GEN SMARTWEAR",
    title: "NoiseFit Halo 2",
    description:
      "Premium AMOLED Display, Bluetooth Calling & Advanced Fitness Tracking.",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
    link: "/product/noisefit-halo-2",
  },

  {
    id: 2,
    tag: "PREMIUM AUDIO",
    title: "Master Buds",
    description:
      "Crystal Clear Sound with Active Noise Cancellation.",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80",
    link: "/product/master-buds",
  },

  {
    id: 3,
    tag: "WIRELESS EXPERIENCE",
    title: "Airwave Max",
    description:
      "Wireless Headphones with 70 Hours Battery Backup.",
    image:
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=1200&q=80",
    link: "/product/airwave-max",
  },
];



function HeroSlider() {
  return (
    <section className="h-screen overflow-hidden">

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>

            <div className="h-screen bg-gradient-to-r from-black via-gray-900 to-black text-white">

              <div className="max-w-7xl mx-auto h-full px-6">

                <div className="grid lg:grid-cols-2 items-center h-full">

                  {/* Left Content */}

                  <div>

                    <span className="uppercase tracking-[5px] text-gray-400 text-sm">
                      {slide.tag}
                    </span>

                    <h1 className="text-5xl md:text-7xl font-black mt-4 leading-tight">
                      {slide.title}
                    </h1>

                    <p className="text-gray-300 text-lg mt-6 max-w-lg leading-8">
                      {slide.description}
                    </p>

                    <div className="flex gap-4 mt-10">

                      <Link to={slide.link}>
                        <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 duration-300">
                          Shop Now
                        </button>
                      </Link>

                      <button className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-black duration-300">
                        Explore
                      </button>

                    </div>

                  </div>

                  {/* Right Image */}

                  <div className="flex justify-center">

                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full max-w-xl object-contain drop-shadow-[0_0_50px_rgba(255,255,255,0.15)]"
                    />

                  </div>

                </div>

              </div>

            </div>

          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}

export default HeroSlider;