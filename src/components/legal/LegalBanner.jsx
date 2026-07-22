import { Link } from "react-router-dom";

function LegalBanner({ title }) {
  return (
    <section
      className="relative h-[350px] md:h-[450px] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600')",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 text-center text-white">

        <h1 className="text-5xl md:text-7xl font-bold">
          {title}
        </h1>

        <div className="flex justify-center gap-3 mt-6 text-lg">

          <Link to="/" className="hover:text-red-500">
            Home
          </Link>

          <span>/</span>

          <span className="text-red-500">
            {title}
          </span>

        </div>

      </div>

    </section>
  );
}

export default LegalBanner;