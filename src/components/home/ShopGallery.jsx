const galleryItems = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    title: "NoiseFit Halo 2",
    price: "₹3,999",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    title: "Master Buds",
    price: "₹2,999",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80",
    title: "Airwave Max",
    price: "₹4,999",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80",
    title: "ColorFit Pro",
    price: "₹5,499",
  },
];

function ShopGallery() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-5">

        <div className="text-center mb-14">

          <h2 className="text-5xl font-bold">
            See it. Love it. Shop it.
          </h2>

          <p className="text-gray-500 mt-4 text-lg">
            Discover trending products loved by our customers.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {galleryItems.map((item) => (

            <div
              key={item.id}
              className="group overflow-hidden rounded-[30px] bg-white shadow-sm hover:shadow-2xl duration-500"
            >

              <div className="overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[420px] object-cover group-hover:scale-110 duration-700"
                />

              </div>

              <div className="p-6">

                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-2">
                  {item.price}
                </p>

                <button className="mt-5 w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 duration-300">
                  Shop Now
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default ShopGallery;