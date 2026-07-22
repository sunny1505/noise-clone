import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {

  const [cartItems, setCartItems] = useState(() => {

    const savedCart = localStorage.getItem("cart");

    return savedCart ? JSON.parse(savedCart) : [];

  });

  useEffect(() => {

    localStorage.setItem(
      "cart",
      JSON.stringify(cartItems)
    );

  }, [cartItems]);

  // const addToCart = (product) => {

  //   setCartItems((prev) => {

  //     const exist = prev.find(
  //       (item) => item.id === product.id
  //     );

  //     if (exist) {

  //       return prev.map((item) =>

  //         item.id === product.id

  //           ? {
  //               ...item,
  //               quantity: item.quantity + 1,
  //             }

  //           : item

  //       );

  //     }

  //     return [

  //       ...prev,

  //       {
  //         ...product,
  //         quantity: 1,
  //       },

  //     ];

  //   });

  // };


  const addToCart = (product) => {

  console.log("Cart Before:", cartItems);
  console.log("Adding Product:", product);

  setCartItems((prev) => {

    const exist = prev.find(
      (item) => item.id === product.id
    );

    if (exist) {

      return prev.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );
    }

    return [
      ...prev,
      {
        ...product,
        quantity: 1,
      },
    ];
  });
};


  const increaseQty = (id) => {

    setCartItems((prev) =>

      prev.map((item) =>

        item.id === id

          ? {
              ...item,
              quantity: item.quantity + 1,
            }

          : item

      )

    );

  };

  const decreaseQty = (id) => {

    setCartItems((prev) =>

      prev

        .map((item) =>

          item.id === id

            ? {
                ...item,
                quantity: item.quantity - 1,
              }

            : item

        )

        .filter((item) => item.quantity > 0)

    );

  };

  const removeItem = (id) => {

    setCartItems((prev) =>

      prev.filter((item) => item.id !== id)

    );

  };

  const clearCart = () => {

    setCartItems([]);

  };

  const totalItems = cartItems.reduce(

    (total, item) => total + item.quantity,

    0

  );

  const totalPrice = cartItems.reduce(

    (total, item) => {

      const price = Number(

        String(item.price).replace(/[₹,]/g, "")

      );

      return total + price * item.quantity;

    },

    0

  );

  return (

    <CartContext.Provider

      value={{

        cartItems,

        addToCart,

        increaseQty,

        decreaseQty,

        removeItem,

        clearCart,

        totalItems,

        totalPrice,

      }}

    >

      {children}

    </CartContext.Provider>

  );

}