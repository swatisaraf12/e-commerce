import React, { Suspense, lazy, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import TopMenu from "./components/TopMenu";
import "./App.min.css";
import { AppContext } from "./reducers";
const ProductListView = lazy(() => import("./views/product/List"));

const ProductDetailView = lazy(() => import("./views/product/Detail"));

const CartView = lazy(() => import("./views/cart/Cart"));
const CheckoutView = lazy(() => import("./views/cart/Checkout"));

function App() {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({});
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();

  return (
    <BrowserRouter>
      <AppContext.Provider
        value={{
          cart,
          user,
          addToCart: (newItem) => setCart(newItem),
          removeFromCart: (removeVal) => {
            setCart(cart.filter((product) => product.id !== removeVal.id));
          },
          updateUser: (user) => setUser(user),
          products,
          setProducts: (products) => setProducts(products),
          selectedCategory,
          setSelectedCategory: (category) => setSelectedCategory(category),
        }}
      >
        <TopMenu />
        <Suspense
          fallback={
            <div className="text-white text-center mt-3">Loading...</div>
          }
        >
          <Routes>
            <Route exact path="/" element={<ProductListView />} />
            <Route exact path="/cart" element={<CartView />} />
            <Route exact path="/checkout" element={<CheckoutView />} />
            <Route
              exact
              path="/product/detail/id/:id"
              element={<ProductDetailView />}
            />
          </Routes>
        </Suspense>
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;
