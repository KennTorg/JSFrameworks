import React from "react";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/ContactPage";
import Checkout from "./pages/CheckoutPage";
import CheckoutSuccess from "./pages/CheckoutPage/CheckoutSuccess";
import ProductList from "./pages/ProductPage/ProductList";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/checkoutSuccess' element={<CheckoutSuccess />} />
        <Route path='/product/:id' element={<ProductList />} />
      </Route>
    </Routes>
  );
}

export default App;
