import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Cart from "./components/Cart";


function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<ProductList/>} />
          <Route exact path="/product/:productId" element={<ProductDetails/>} />
          <Route exact path="/cart" element={<Cart/>} />
          <Route exact path="*" element={<ProductList/>} />
          <Route />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
