import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import {useState} from "react";
function App() {
  const [cartIsShown, setCartIsShow] = useState(false);

  const showCartHandler = () => {
    setCartIsShow(true);
  };

  const hideCartHandler = () => {
    setCartIsShow(false);
  };

  return (
    <>
      <Header onShowCart={showCartHandler} />
      {cartIsShown ? <Cart onClose={hideCartHandler} /> : null}
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
