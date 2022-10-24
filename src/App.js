import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Cart from "./components/Cart";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { useState } from "react";


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="App">
      <Router>
        <Navbar state={loggedIn} changeState={setLoggedIn}/>
        <Routes>
          <Route exact path="/" element={<ProductList/>} />
          <Route exact path="/product/:productId" element={<ProductDetails/>} />
          <Route exact path="/cart" element={<Cart/>} />
          <Route exact path="/login" element={<Login changeState={setLoggedIn}/>} />
          <Route exact path="/signup" element={<SignUp/>} />
          <Route exact path="*" element={<ProductList/>} />
          <Route />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
