import { Link } from "react-router-dom";
import { FaVolumeUp, FaBatteryFull, FaBluetoothB, FaMicrophone } from "react-icons/fa";

function EarbudsBanner() {
  return (
    <section className="bg-gradient-to-r from-black via-gray-900 to-black overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 items-center min-h-[700px] gap-16">


          <div>

            <span className="inline-block bg-white/10 text-white px-5 py-2 rounded-full text-sm tracking-widest uppercase">
              Wireless Audio
            </span>

            <h1 className="text-white text-5xl lg:text-7xl font-black leading-tight mt-7">
              Premium
              <br />
              Earbuds
            </h1>

            <p className="text-gray-300 text-lg mt-8 leading-8 max-w-xl">
              Immerse yourself in crystal-clear sound with
              Active Noise Cancellation, Quad Mic ENC,
              50 Hours Playtime and Ultra Low Latency.
            </p>

            {/* Features */}

            <div className="grid grid-cols-2 gap-5 mt-12">

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center text-xl">

                  <FaVolumeUp />

                </div>

                <div>

                  <h4 className="text-white font-bold">
                    ANC
                  </h4>

                  <p className="text-gray-400 text-sm">
                    Active Noise Cancellation
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center text-xl">

                  <FaBatteryFull />

                </div>

                <div>

                  <h4 className="text-white font-bold">
                    50 Hours
                  </h4>

                  <p className="text-gray-400 text-sm">
                    Total Playtime
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center text-xl">

                  <FaBluetoothB />

                </div>

                <div>

                  <h4 className="text-white font-bold">
                    Bluetooth 5.3
                  </h4>

                  <p className="text-gray-400 text-sm">
                    Stable Connection
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center text-xl">

                  <FaMicrophone />

                </div>

                <div>

                  <h4 className="text-white font-bold">
                    Quad Mic ENC
                  </h4>

                  <p className="text-gray-400 text-sm">
                    Crystal Clear Calls
                  </p>

                </div>

              </div>

            </div>

            <div className="flex gap-5 mt-14">

              <Link
                to="#products"
                className="bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-gray-200 transition"
              >
                Shop Now
              </Link>

              <button className="border border-white text-white px-10 py-4 rounded-full hover:bg-white hover:text-black transition">
                Learn More
              </button>

            </div>

          </div>

          {/* Right */}

          <div className="relative flex justify-center">

            {/* Background Circle */}

            <div className="absolute w-[520px] h-[520px] rounded-full bg-white/10 blur-3xl"></div>

            {/* Product */}

            <img
              src="https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=900&q=80"
              alt="Earbuds"
              className="relative z-10 w-[520px] hover:scale-105 duration-500"
            />

            {/* Offer */}

            <div className="absolute top-12 right-5 bg-red-600 text-white rounded-full w-32 h-32 flex flex-col justify-center items-center shadow-2xl z-20">

              <span className="text-4xl font-black">
                30%
              </span>

              <span className="text-sm">
                OFF
              </span>

            </div>

            {/* Glass Card */}

            <div className="absolute bottom-8 left-0 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl px-8 py-6 z-20">

              <h3 className="text-white font-bold text-xl">
                Noise Master Buds
              </h3>

              <p className="text-gray-300 mt-2">
                Hi-Res Audio
              </p>

              <h4 className="text-white text-3xl font-black mt-3">
                ₹2,999
              </h4>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default EarbudsBanner;