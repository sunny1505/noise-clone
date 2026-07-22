import { Link } from "react-router-dom";

function Orders() {

  const orders =
    JSON.parse(localStorage.getItem("orders")) || [];

  if (orders.length === 0) {

    return (

      <div className="max-w-7xl mx-auto py-24 text-center">

        <h2 className="text-4xl font-bold">
          No Orders Found
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
        My Orders
      </h1>

      {orders.map((order) => (

        <div
          key={order.id}
          className="bg-white rounded-3xl shadow-lg mb-10 p-8"
        >

          <div className="flex justify-between flex-wrap gap-4 border-b pb-5 mb-5">

            <div>

              <h3 className="font-bold text-xl">

                Order ID

              </h3>

              <p>{order.id}</p>

            </div>

            <div>

              <h3 className="font-bold">

                Date

              </h3>

              <p>{order.date}</p>

            </div>

            <div>

              <h3 className="font-bold">

                Payment

              </h3>

              <p>{order.payment}</p>

            </div>

            <div>

              <h3 className="font-bold">

                Status

              </h3>

              <span className="text-green-600 font-bold">

                {order.status}

              </span>

            </div>

          </div>

          {order.items.map((item) => (

            <div
              key={item.id}
              className="flex items-center gap-5 py-5 border-b"
            >

              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 rounded-xl object-cover"
              />

              <div className="flex-1">

                <h3 className="font-bold text-lg">

                  {item.name}

                </h3>

                <p>

                  Qty : {item.quantity}

                </p>

                <p>

                  {item.price}

                </p>

              </div>

            </div>

          ))}

          <div className="flex justify-end mt-6">

            <h3 className="text-2xl font-bold">

              Total : ₹{order.total}

            </h3>

          </div>

        </div>

      ))}

    </section>

  );

}

export default Orders;