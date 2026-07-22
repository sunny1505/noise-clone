import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function ContactInfoCards() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-5">

        <div className="text-center mb-14">

          <h2 className="text-4xl md:text-5xl font-bold">
            Get In Touch
          </h2>

          <p className="text-gray-500 mt-5 text-lg">
            Feel free to contact us anytime. We're here to help you.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Phone + WhatsApp */}

          <div className="group bg-white border rounded-3xl p-10 text-center shadow-md hover:bg-black hover:text-white hover:-translate-y-3 hover:shadow-2xl transition-all duration-300">

            <div className="flex justify-center gap-4 text-4xl text-green-600 group-hover:text-white mb-6">

              <FaPhoneAlt />

              <FaWhatsapp />

            </div>

            <h3 className="text-2xl font-bold mb-3">
              Phone & WhatsApp
            </h3>

            <a
              href="tel:+918219124620"
              className="block text-lg hover:text-green-400"
            >
              +91 82191 24620
            </a>

            <a
              href="https://wa.me/918219124620"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-5 px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition"
            >
              Chat on WhatsApp
            </a>

          </div>

          {/* Email */}

          <div className="group bg-white border rounded-3xl p-10 text-center shadow-md hover:bg-black hover:text-white hover:-translate-y-3 hover:shadow-2xl transition-all duration-300">

            <div className="flex justify-center text-5xl text-red-500 group-hover:text-white mb-6">

              <FaEnvelope />

            </div>

            <h3 className="text-2xl font-bold mb-3">
              Email Address
            </h3>

            <a
              href="mailto:sunnyKchamba@gmail.com"
              className="text-lg break-all hover:text-red-400"
            >
              sunnyKchamba@gmail.com
            </a>

          </div>

          {/* Address */}

          <div className="group bg-white border rounded-3xl p-10 text-center shadow-md hover:bg-black hover:text-white hover:-translate-y-3 hover:shadow-2xl transition-all duration-300">

            <div className="flex justify-center text-5xl text-blue-500 group-hover:text-white mb-6">

              <FaMapMarkerAlt />

            </div>

            <h3 className="text-2xl font-bold mb-3">
              Office Address
            </h3>

            <p className="text-lg leading-8">
              Uttam Nagar West
              <br />
              New Delhi
              <br />
              India
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ContactInfoCards;