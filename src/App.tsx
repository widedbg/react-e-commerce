import { Routes,Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import NavBar from "./components/NavBar";
import Product from "./pages/Products";



function App() {
  

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/products/:id" element={<Product/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App
