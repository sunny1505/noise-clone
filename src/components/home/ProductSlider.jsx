import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import { products } from "../../data/products";
import ProductCard from "../product/ProductCard";

function ProductSlider() {
  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-5">

        <div className="flex justify-between items-center mb-10">

          <h2 className="text-4xl font-bold">
            Trending Products
          </h2>

          <span className="text-gray-500">
            Premium Collection
          </span>

        </div>

        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={25}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1400: {
              slidesPerView: 5,
            },
          }}
        >

          {products.map((product) => (

            <SwiperSlide key={product.id}>

              <ProductCard product={product} />

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

    </section>
  );
}

export default ProductSlider;