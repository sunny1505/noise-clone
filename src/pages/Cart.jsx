import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {

  const {
    cartItems,
    increaseQty,
    decreaseQty,
    removeItem,
    totalPrice,
  } = useCart();

  if (cartItems.length === 0) {

    return (

      <div className="max-w-7xl mx-auto py-24 text-center">

        <h2 className="text-4xl font-bold">
          Your Cart is Empty
        </h2>

        <Link
          to="/"
          className="inline-block mt-8 bg-black text-white px-8 py-4 rounded-full"
        >
          Continue Shopping
        </Link>

      </div>

    );

  }

  return (

    <section className="max-w-7xl mx-auto px-5 py-16">

      <h1 className="text-5xl font-bold mb-10">

        Shopping Cart

      </h1>

      <div className="grid lg:grid-cols-3 gap-10">

        <div className="lg:col-span-2 space-y-6">

          {cartItems.map((item) => (

            <div
              key={item.id}
              className="flex items-center justify-between bg-white shadow rounded-2xl p-5"
            >

              <div className="flex gap-5">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-28 h-28 rounded-xl object-cover"
                />

                <div>

                  <h3 className="text-xl font-bold">

                    {item.name}

                  </h3>

                  <p className="mt-2">

                    {item.price}

                  </p>

                </div>

              </div>

              <div className="flex items-center gap-3">

                <button
                  onClick={() => decreaseQty(item.id)}
                  className="border px-3 py-1 rounded"
                >
                  -
                </button>

                <span>

                  {item.quantity}

                </span>

                <button
                  onClick={() => increaseQty(item.id)}
                  className="border px-3 py-1 rounded"
                >
                  +
                </button>

              </div>

              <button
                onClick={() => removeItem(item.id)}
                className="text-red-600"
              >
                Remove
              </button>

            </div>

          ))}

        </div>

        <div className="bg-gray-100 rounded-3xl p-8 h-fit">

          <h2 className="text-3xl font-bold mb-6">

            Order Summary

          </h2>

          <div className="flex justify-between mb-4">

            <span>Total</span>

            <span>

              ₹{totalPrice}

            </span>

          </div>

          <Link
            to="/checkout"
            className="block text-center bg-black text-white py-4 rounded-full mt-8"
          >

            Proceed To Checkout

          </Link>

        </div>

      </div>

    </section>

  );

}

export default Cart;