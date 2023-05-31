import { useContext, useEffect } from "react";
import { CartContext } from "../../Cart/CartContext";
import { BackToStore, Card, Heading, Message } from "./CheckoutSuccess.styles";
import { Link } from "react-router-dom";

const CheckoutSuccess = () => {
  const { clearCart, setCartCount, setCheckoutSuccess } =
    useContext(CartContext);

  useEffect(() => {
    clearCart();
    setCartCount(0);
    setCheckoutSuccess(false);
  }, [clearCart, setCartCount, setCheckoutSuccess]);

  return (
    <Card>
      <Heading>Checkout Success!</Heading>
      <Message>Thank you for your purchase.</Message>
      <BackToStore as={Link} to='/'>
        Back to store
      </BackToStore>
    </Card>
  );
};

export default CheckoutSuccess;
