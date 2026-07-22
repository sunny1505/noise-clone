import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    title: "Smart Watches",
    slug: "smart-watches",
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Audio",
    slug: "audio",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Power Series",
    slug: "power-series",
    image:
      "https://images.unsplash.com/photo-1585338447937-7082f8fc763d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Noise Junior",
    slug: "noise-junior",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
  },
];

function Categories() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-5">

        <h2 className="text-4xl font-bold text-center mb-12">
          Explore By Category
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {categories.map((item) => (

            <Link
              key={item.id}
              to={`/category/${item.slug}`}
            >

              <div className="group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 cursor-pointer">

                <div className="overflow-hidden">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-72 object-cover group-hover:scale-110 transition duration-700"
                  />

                </div>

                <div className="p-5 text-center bg-white">

                  <h3 className="font-bold text-xl">
                    {item.title}
                  </h3>

                </div>

              </div>

            </Link>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Categories;