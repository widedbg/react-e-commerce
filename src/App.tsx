import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Product from "./pages/Product";
import { Products } from "./pages/Products";
import NavBar from "./components/NavBar";
import { ProductCategorie } from "./components/ProductsCategorie";
import { ThemeProvider } from "./providers/theme-provider";
import { Toaster } from "sonner";
import { UserProvider } from "./providers/users-provider";
import { CartProvider } from "./providers/cart-provider";
import { Checkout } from "./pages/Checkout";
import Footer from "./components/Footer"; // ← import Footer

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <UserProvider>
          <CartProvider>
            <div className="flex flex-col min-h-screen">
              {" "}
              {/* full-height layout */}
              <NavBar />
              <Toaster position="top-center" />
              <main className="flex-1">
                {" "}
                {/* takes remaining space */}
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/sign-up" element={<SignUp />} />
                  <Route path="/products/:id" element={<Product />} />
                  <Route path="/products" element={<Products />} />
                  <Route
                    path="/categories/:category"
                    element={<ProductCategorie />}
                  />
                  <Route path="/checkout" element={<Checkout />} />
                </Routes>
              </main>
              <Footer /> {/* ← footer at the bottom */}
            </div>
          </CartProvider>
        </UserProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
