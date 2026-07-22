import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import CategoryProducts from "../pages/CategoryProducts";
import SmartWatches from "../pages/SmartWatches";
import Cart from "../pages/Cart";
import Wishlist from "../pages/Wishlist";
import Checkout from "../pages/Checkout";
import ThankYou from "../pages/ThankYou";
import Orders from "../pages/Orders";
import Earbuds from "../pages/Earbuds";
import Contact from "../pages/Contact";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsConditions from "../pages/TermsConditions";
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/products"
            element={<Products />}
          />
          <Route
            path="/product/:id"
            element={<ProductDetails />}
          />
          <Route
            path="/category/:category"
            element={<CategoryProducts />}
          />
          <Route
          path="/cart"
          element={<Cart />}
          />
          <Route
             path="/smart-watches"
             element={<SmartWatches />}
          />
          <Route
            path="/wishlist"
            element={<Wishlist />}
          />
          <Route
            path="/checkout"
            element={<Checkout />}
          />
          <Route
            path="/thank-you"
            element={<ThankYou />}
            />
            <Route
              path="/orders"
              element={<Orders />}
            />
            <Route
              path="/earbuds"
              element={<Earbuds />}
            />

            <Route
                path="/contact"
                element={<Contact />}
            />

            <Route
              path="/privacy-policy"
              element={<PrivacyPolicy />}
            />

            <Route
              path="/terms"
              element={<TermsConditions />}
            />


        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;