import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import './App.css';
import Cart from "./components/Cart.jsx";
import Checkout from "./components/Checkout.jsx";
import Footer from "./components/Footer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
import NavBar from "./components/NavBar.jsx";
import MyProvider from "./context/CartContext.jsx";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

function App() {

  const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };

  initializeApp(firebaseConfig);

  return (
    <div>
      <BrowserRouter>
        <MyProvider>
          <NavBar />
          <Routes>
          <Route path="/" element={<ItemListContainer />} />

          <Route path="/cart" element={<Cart />} />

          <Route path="/checkout" element={<Checkout />} />

          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          
          <Route path="/category/:id" element={<ItemListContainer />} />

          <Route path="*" element={<ItemListContainer />} />

          </Routes>
          <Footer/>
        </MyProvider>
      </BrowserRouter>
    </div>  

  );
}


export default App;
