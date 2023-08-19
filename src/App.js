import Header from "./components/Layout/Header";
import { Fragment, useState } from "react";
import Meals from "./components/Meals/Meals";
import Modal from "./components/UI/Modal";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [isModal, setisModal] = useState(false);

  const onmodal = (e) => {
    setisModal(true);
  };

  const onclose = (e) => {
    setisModal(false);
  };

  return (
    <CartProvider>
      <Header onmodal={onmodal} />
      <main>
        <Meals />
      </main>
      {isModal && <Cart onclose={onclose}></Cart>}
    </CartProvider>
  );
}

export default App;
