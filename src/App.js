import logo from "./logo.svg";
import "./App.css";

import Body from "./Components/Body";
import { Provider } from "react-redux";
import store from "./Store/Store";
import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import AddProduct from "./Components/AddProduct";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/addproduct" element={<AddProduct />} />
        </Routes>
      
        <Footer/>
      </Provider>
    </div>
  );
}

export default App;
