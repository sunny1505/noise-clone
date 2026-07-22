import { Link } from "react-router-dom";

function ContactBanner() {
  return (
    <section
      className="relative h-[450px] md:h-[550px] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600')",
      }}
    >
      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}

      <div className="relative z-10 text-center text-white px-5">

        <h1 className="text-5xl md:text-7xl font-bold mb-5">
          Contact Us
        </h1>

        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-8">
          We'd love to hear from you. Whether you have a question about
          products, orders, support, or partnerships, our team is ready to help.
        </p>

        {/* Breadcrumb */}

        <div className="flex justify-center items-center gap-3 mt-8 text-lg">

          <Link
            to="/"
            className="hover:text-red-500 transition"
          >
            Home
          </Link>

          <span>/</span>

          <span className="text-red-500 font-semibold">
            Contact
          </span>

        </div>

      </div>

      {/* Bottom Fade */}

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>

    </section>
  );
}

export default ContactBanner;