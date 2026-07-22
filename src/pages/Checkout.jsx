import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Checkout() {
  const navigate = useNavigate();

  const {
    cartItems,
    totalPrice,
    clearCart,
  } = useCart();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    payment: "Cash On Delivery",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePlaceOrder = () => {
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.address ||
      !formData.city ||
      !formData.state ||
      !formData.pincode
    ) {
      alert("Please fill all required fields.");
      return;
    }

    if (cartItems.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    const order = {
      id: "NOISE" + Date.now(),
      date: new Date().toLocaleDateString("en-IN"),
      status: "Confirmed",
      payment: formData.payment,
      total: totalPrice,
      shippingAddress: formData,
      items: [...cartItems],
    };

    const oldOrders =
      JSON.parse(localStorage.getItem("orders")) || [];

    oldOrders.unshift(order);

    localStorage.setItem(
      "orders",
      JSON.stringify(oldOrders)
    );

    clearCart();

    navigate("/thank-you");
  };

  return (
    <section className="bg-gray-100 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-5">

        <h1 className="text-5xl font-bold mb-10">
          Checkout
        </h1>

        <div className="grid lg:grid-cols-3 gap-10">

          <div className="lg:col-span-2 bg-white rounded-3xl shadow-lg p-8">

            <h2 className="text-3xl font-bold mb-8">
              Shipping Details
            </h2>

            <div className="grid md:grid-cols-2 gap-5">

              <input
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="border p-4 rounded-xl"
              />

              <input
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="border p-4 rounded-xl"
              />

              <input
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="border p-4 rounded-xl"
              />

              <input
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="border p-4 rounded-xl"
              />

            </div>

            <textarea
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className="border rounded-xl p-4 w-full mt-5 h-32"
            />

            <div className="grid md:grid-cols-3 gap-5 mt-5">

              <input
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                className="border p-4 rounded-xl"
              />

              <input
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleChange}
                className="border p-4 rounded-xl"
              />

              <input
                name="pincode"
                placeholder="Pincode"
                value={formData.pincode}
                onChange={handleChange}
                className="border p-4 rounded-xl"
              />

            </div>

            <select
              name="payment"
              value={formData.payment}
              onChange={handleChange}
              className="border p-4 rounded-xl w-full mt-6"
            >
              <option>Cash On Delivery</option>
              <option>UPI</option>
              <option>Credit Card</option>
              <option>Debit Card</option>
            </select>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">

            <h2 className="text-3xl font-bold mb-6">
              Order Summary
            </h2>

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 mb-5"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-xl object-cover"
                />

                <div>
                  <h3 className="font-bold">
                    {item.name}
                  </h3>

                  <p>Qty : {item.quantity}</p>

                  <p>{item.price}</p>
                </div>
              </div>
            ))}

            <hr className="my-6" />

            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span>₹{totalPrice}</span>
            </div>

            <button
              onClick={handlePlaceOrder}
              className="w-full bg-black text-white py-4 rounded-full mt-8"
            >
              Place Order
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Checkout;