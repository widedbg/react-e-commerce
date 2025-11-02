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
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <NavBar />
        <Toaster position="top-center" />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/products" element={<Products />}></Route>
          <Route path="/categories/:category" element={<ProductCategorie />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
