import { FaTimes } from "react-icons/fa";

function FilterSidebar({
  selectedColor,
  setSelectedColor,
  priceRange,
  setPriceRange,
}) {
  const colors = [
    { name: "Black", value: "black", code: "#000000" },
    { name: "Blue", value: "blue", code: "#2563eb" },
    { name: "Silver", value: "silver", code: "#c0c0c0" },
    { name: "Green", value: "green", code: "#22c55e" },
    { name: "Gold", value: "gold", code: "#d4af37" },
    { name: "White", value: "white", code: "#ffffff" },
  ];

  const features = [
    "Bluetooth Calling",
    "AMOLED Display",
    "Heart Rate Monitor",
    "SpO2 Monitor",
    "Sleep Tracking",
    "AI Voice Assistant",
  ];

  const playtime = [
    "Up to 20 Hours",
    "Up to 30 Hours",
    "Up to 40 Hours",
    "Up to 60 Hours",
  ];

  const drivers = [
    "10mm",
    "11mm",
    "13mm",
    "16mm",
  ];

  return (
    <aside className="bg-white rounded-3xl shadow-xl p-6 sticky top-24 h-fit">

      {/* Header */}

      <div className="flex justify-between items-center border-b pb-4">

        <h2 className="text-2xl font-bold">
          Filters
        </h2>

        <button
          onClick={() => {
            setSelectedColor("");
            setPriceRange(10000);
          }}
          className="flex items-center gap-2 text-red-500 hover:text-red-600"
        >
          <FaTimes />
          Clear All
        </button>

      </div>

      {/* Price */}

      <div className="mt-8">

        <h3 className="font-bold text-lg mb-4">
          Price
        </h3>

        <input
          type="range"
          min="1000"
          max="10000"
          step="500"
          value={priceRange}
          onChange={(e) =>
            setPriceRange(Number(e.target.value))
          }
          className="w-full"
        />

        <div className="flex justify-between mt-3 text-sm text-gray-500">

          <span>₹1000</span>

          <span className="font-semibold">
            ₹{priceRange}
          </span>

        </div>

      </div>

      {/* Colors */}

      <div className="mt-10">

        <h3 className="font-bold text-lg mb-5">
          Color
        </h3>

        <div className="grid grid-cols-3 gap-4">

          {colors.map((color) => (

            <button
              key={color.value}
              onClick={() =>
                setSelectedColor(color.value)
              }
              className={`flex flex-col items-center gap-2 border rounded-xl p-3 transition ${
                selectedColor === color.value
                  ? "border-black shadow-lg scale-105"
                  : "border-gray-200"
              }`}
            >

              <span
                className="w-8 h-8 rounded-full border"
                style={{
                  background: color.code,
                }}
              ></span>

              <span className="text-xs">
                {color.name}
              </span>

            </button>

          ))}

        </div>

      </div>

      {/* Preferred Features */}

      <div className="mt-10">

        <h3 className="font-bold text-lg mb-5">
          Preferred Features
        </h3>

        <div className="space-y-3">

          {features.map((item) => (

            <label
              key={item}
              className="flex items-center gap-3 cursor-pointer"
            >

              <input type="checkbox" />

              <span>{item}</span>

            </label>

          ))}

        </div>

      </div>

      {/* Audio Playtime */}

      <div className="mt-10">

        <h3 className="font-bold text-lg mb-5">
          Audio Playtime
        </h3>

        <div className="space-y-3">

          {playtime.map((item) => (

            <label
              key={item}
              className="flex items-center gap-3"
            >

              <input type="checkbox" />

              <span>{item}</span>

            </label>

          ))}

        </div>

      </div>

      {/* Driver */}

      <div className="mt-10">

        <h3 className="font-bold text-lg mb-5">
          Driver
        </h3>

        <div className="space-y-3">

          {drivers.map((item) => (

            <label
              key={item}
              className="flex items-center gap-3"
            >

              <input type="checkbox" />

              <span>{item}</span>

            </label>

          ))}

        </div>

      </div>

    </aside>
  );
}

export default FilterSidebar;