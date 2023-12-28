import { NavBar } from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Shop } from "./pages/Shop";
import { ShopCategory } from "./pages/ShopCategory";
import { Product } from "./pages/Product";
import { LoginSignIn } from "./pages/LoginSignIn";
import { Cart } from "./pages/Cart";
import { Footer } from "./components/Footer/Footer";
import banner_img_kids from "./assets/banner_img_kids.png";

import banner_img_men from "./assets/banner_img_men.png";
import banner_img_women from "./assets/banner_img_women.png";
export default function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Shop />} />
        <Route
          path="/men"
          element={<ShopCategory banner={banner_img_men} category="men" />}
        />
        <Route
          path="/women"
          element={<ShopCategory banner={banner_img_women} category="women" />}
        />
        <Route
          path="/kids"
          element={<ShopCategory banner={banner_img_kids} category="kid" />}
        />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>

        <Route path="/LoginSignIn" element={<LoginSignIn />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
