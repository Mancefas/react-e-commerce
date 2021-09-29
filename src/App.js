import { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import LandingPage from "./Components/LandingPage";
import Footer from "./Components/Footer/Footer";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import Products from "./Components/Products/Products";

import data from "./Merch/data";
import BlogSection from "./Components/Blog/BlogSection";
import PolicySample from "./Components/Footer/Policy/PolicySample";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const [policyShown, setPolicyShown] = useState(false);
  const showPolicyHandler = () => {
    setPolicyShown(true);
  };
  const closePolicyhandler = () => {
    setPolicyShown(false);
  };

  const [dataSorted, setDataSorted] = useState([]);

  const sortMerch = (type) => {
    const sorted = [...products].filter((item) => item.categorie === type);
    setDataSorted(sorted);
  };

  const clickedLogo = () => {
    setDataSorted([]);
  };

  const [cartItems, setCartItems] = useState([]);
  const { products } = data;
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCarthandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && (
        <Cart
          onClose={hideCarthandler}
          onAdd={onAdd}
          onRemove={onRemove}
          cartItems={cartItems}
          products={products}
        />
      )}
      <NavBar
        onClicked={showCartHandler}
        onAdd={onAdd}
        products={products}
        cartItems={cartItems}
        sortMerch={sortMerch}
        clickedLogo={clickedLogo}
      />
      {dataSorted.length === 0 && <LandingPage />}
      {dataSorted.length !== 0 && (
        <Products onAdd={onAdd} products={dataSorted} />
      )}
      <BlogSection />
      {policyShown && (
        <PolicySample
          onClicked={showPolicyHandler}
          onClose={closePolicyhandler}
        />
      )}
      <Footer onClick={showPolicyHandler} />
    </CartProvider>
  );
}

export default App;
