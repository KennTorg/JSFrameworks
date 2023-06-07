import { useContext, useState } from "react";
import { CartContext } from "../Cart/CartContext";
import {
  Card,
  List,
  ListItem,
  Input,
  Buttons,
  RemoveButton,
  CheckoutButton,
  CartPage,
} from "./Checkout.styles";
import { Link } from "react-router-dom";

// Extracted component for rendering individual products in the list
const ProductItem = ({
  product,
  handleIncrement,
  handleDecrement,
  handleRemoveProduct,
}) => (
  <ListItem key={product.id}>
    <span>
      {product.title} - ${product.price}
    </span>
    <div>
      <Input
        type='number'
        min='1'
        value={product.quantity}
        onChange={() => handleIncrement(product.id)}
      />
      <Buttons onClick={() => handleIncrement(product.id)}>+</Buttons>
      <Buttons onClick={() => handleDecrement(product.id)}>-</Buttons>
      <RemoveButton
        className='RemoveButton'
        onClick={() => handleRemoveProduct(product.id)}
      >
        X
      </RemoveButton>
    </div>
  </ListItem>
);

const Checkout = () => {
  // Destructure CartContext directly in the function
  const {
    cart,
    removeProduct,
    clearCart,
    incrementProduct,
    decrementProduct,
    setDiscountAmount,
  } = useContext(CartContext);

  const [discountCode, setDiscountCode] = useState("");
  const [discountAmountLocal, setDiscountAmountLocal] = useState(0);

  const handleDiscountCodeChange = (event) => {
    setDiscountCode(event.target.value);
  };

  const handleApplyDiscount = () => {
    if (discountCode === "SALE") {
      const newDiscountAmount = 10;
      setDiscountAmountLocal(newDiscountAmount);
      setDiscountAmount(newDiscountAmount);
    }
  };

  const handleIncrement = (productId) => {
    incrementProduct(productId);
  };

  const handleDecrement = (productId) => {
    decrementProduct(productId);
  };

  const handleRemoveProduct = (productId) => {
    removeProduct(productId);
  };

  const handleClearCart = () => {
    clearCart();
  };

  // Calculate total and discounted prices
  const totalPrice = cart.products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const discountedPrice = (
    totalPrice -
    (totalPrice * discountAmountLocal) / 100
  ).toFixed(2);

  const discountText =
    discountAmountLocal > 0 ? (
      <span>
        <s>${totalPrice.toFixed(2)}</s> ${discountedPrice} (
        {discountAmountLocal}% off){" "}
      </span>
    ) : (
      <span>${totalPrice.toFixed(2)}</span>
    );

  return (
    <CartPage>
      <Card>
        <h2>Products:</h2>
        {cart.products.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            <List>
              {cart.products.map((product) => (
                <ProductItem
                  key={product.id}
                  product={product}
                  handleIncrement={handleIncrement}
                  handleDecrement={handleDecrement}
                  handleRemoveProduct={handleRemoveProduct}
                />
              ))}
            </List>
            <p>Total Price: {discountText}</p>
            <div>
              <input
                type='text'
                placeholder='Enter Discount Code'
                value={discountCode}
                onChange={handleDiscountCodeChange}
              />
              <Buttons onClick={handleApplyDiscount}>Apply Discount</Buttons>
            </div>
            <div>
              <Buttons onClick={handleClearCart}>Clear Cart</Buttons>
              <Link to='/checkoutSuccess'>
                <CheckoutButton className='CheckoutButton'>
                  Checkout
                </CheckoutButton>
              </Link>
            </div>
          </div>
        )}
      </Card>
    </CartPage>
  );
};

export default Checkout;
