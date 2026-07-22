import { Link } from "react-router-dom";

function CollectionBanner() {
  return (
    <section className="bg-gradient-to-r from-black via-neutral-900 to-zinc-800 overflow-hidden">
      <div className="max-w-7xl mx-auto min-h-[650px] px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 items-center gap-16 min-h-[650px]">

          {/* Left Content */}

          <div className="text-white">

            <span className="inline-block px-5 py-2 rounded-full bg-white/10 border border-white/20 text-sm tracking-[3px] uppercase">
              Premium Collection
            </span>

            <h1 className="mt-8 text-5xl lg:text-7xl font-black leading-tight">
              Master
              <br />
              Smart Watches
            </h1>

            <p className="mt-8 text-lg text-gray-300 leading-8 max-w-xl">
              Discover premium smartwatches crafted with an AMOLED display,
              Bluetooth calling, AI health tracking, premium metal body,
              and 7-day battery life.
            </p>

            <div className="flex gap-5 mt-10">

              <Link
                to="/products"
                className="bg-white text-black px-9 py-4 rounded-full font-semibold hover:scale-105 transition"
              >
                Shop Now
              </Link>

              <a
                href="#products"
                className="border border-white px-9 py-4 rounded-full hover:bg-white hover:text-black transition"
              >
                Explore
              </a>

            </div>

            <div className="grid grid-cols-3 gap-8 mt-14">

              <div>
                <h3 className="text-3xl font-bold">1.96"</h3>
                <p className="text-gray-400 mt-2">AMOLED Display</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">7 Days</h3>
                <p className="text-gray-400 mt-2">Battery</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">120+</h3>
                <p className="text-gray-400 mt-2">Sports Modes</p>
              </div>

            </div>

          </div>

          {/* Right Image */}

          <div className="relative flex justify-center">

            <div className="absolute w-[520px] h-[520px] rounded-full bg-white/10 blur-3xl"></div>

            <img
              src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=900&q=80"
              alt="Smart Watch"
              className="relative z-10 w-[520px] hover:scale-105 transition duration-700"
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default CollectionBanner;