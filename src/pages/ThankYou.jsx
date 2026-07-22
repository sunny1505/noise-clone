import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

function ThankYou() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 py-16">

      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full p-12 text-center">

        {/* Success Icon */}

        <FaCheckCircle className="text-green-500 text-8xl mx-auto mb-8" />

        {/* Heading */}

        <h1 className="text-5xl font-bold text-gray-900 mb-5">
          Order Placed Successfully!
        </h1>

        {/* Message */}

        <p className="text-gray-600 text-lg leading-8">

          Thank you for shopping with <strong>NOISE</strong>.

          <br />

          Your order has been received successfully.

        </p>

        {/* Order Details */}

        <div className="bg-gray-100 rounded-2xl p-8 mt-10 text-left">

          <div className="flex justify-between py-3 border-b">

            <span className="font-semibold">
              Order ID
            </span>

            <span>
              #NOISE2026001
            </span>

          </div>

          <div className="flex justify-between py-3 border-b">

            <span className="font-semibold">
              Payment
            </span>

            <span>
              Cash On Delivery
            </span>

          </div>

          <div className="flex justify-between py-3 border-b">

            <span className="font-semibold">
              Delivery
            </span>

            <span>
              3 - 5 Business Days
            </span>

          </div>

          <div className="flex justify-between py-3">

            <span className="font-semibold">
              Status
            </span>

            <span className="text-green-600 font-bold">
              Confirmed
            </span>

          </div>

        </div>

        {/* Buttons */}

        <div className="flex flex-wrap justify-center gap-5 mt-12">

          <Link
            to="/"
            className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition"
          >
            Continue Shopping
          </Link>

          <Link
            to="/orders"
            className="border border-black px-8 py-4 rounded-full hover:bg-black hover:text-white transition"
          >
            View Orders
          </Link>

        </div>

      </div>

    </section>
  );
}

export default ThankYou;