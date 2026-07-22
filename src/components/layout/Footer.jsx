import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

import {
  products,
  support,
  company,
} from "../../data/footerData";

function Footer() {
  return (
    <footer className="bg-black text-white pt-20 mt-20">

      <div className="max-w-7xl mx-auto px-5">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">

          {/* Logo */}

          <div>

            <h2 className="text-4xl font-bold">
              NOISE
            </h2>

            <p className="text-gray-400 mt-5 leading-7">
              India's leading smartwatch and
              audio wearable brand.
            </p>

            <div className="flex gap-5 mt-8">

              <FaFacebookF className="cursor-pointer hover:text-red-500 transition" />

              <FaInstagram className="cursor-pointer hover:text-red-500 transition" />

              <FaYoutube className="cursor-pointer hover:text-red-500 transition" />

              <FaLinkedinIn className="cursor-pointer hover:text-red-500 transition" />

            </div>

          </div>

          {/* Products */}

          <div>

            <h3 className="text-2xl font-semibold mb-6">
              Products
            </h3>

            <ul className="space-y-3">

              {products.map((item) => (

                <li key={item.id}>

                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-white transition"
                  >
                    {item.name}
                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* Company */}

          <div>

            <h3 className="text-2xl font-semibold mb-6">
              Company
            </h3>

            <ul className="space-y-3">

              {company.map((item) => (

                <li key={item.id}>

                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-white transition"
                  >
                    {item.name}
                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* Support */}

          <div>

            <h3 className="text-2xl font-semibold mb-6">
              Support
            </h3>

            <ul className="space-y-3">

              {support.map((item) => (

                <li key={item.id}>

                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-white transition"
                  >
                    {item.name}
                  </Link>

                </li>

              ))}

            </ul>
          </div>

        </div>

        <hr className="border-gray-700 my-10" />

        <div className="flex md:flex-row flex-col justify-between items-center gap-4 pb-8">

          <p className="text-gray-400">
            © {new Date().getFullYear()} Noise Clone. All Rights Reserved.
          </p>

          <div className="flex gap-6">

            <Link
              to="/privacy-policy"
              className="text-gray-400 hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="text-gray-400 hover:text-white"
            >
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;