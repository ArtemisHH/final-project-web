import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import MenuScreen from "./screens/MenuScreen";


function App() {
  return (
      <BrowserRouter>
          <NavBar />
          <div className="container py-3">
              <Routes>
                  <Route path="/" element={<HomeScreen/>}/>
                  <Route path="/menu" element={<MenuScreen/>}/>
                  <Route path="/products/:id" element={<ProductScreen/>}/>
              </Routes>
          </div>
          <Footer />
      </BrowserRouter>
  );
}

export default App;
