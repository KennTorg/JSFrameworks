import React, { useContext } from "react";
import { CartContext } from "../../pages/Cart/CartContext";
import { Link } from "react-router-dom";

function CartIcon() {
  const { cart, addToCart } = useContext(CartContext);
  const { products } = cart;

  // Render the list of products in the cart
  const productItems = products.map((product) => {
    return (
      <li key={product.id}>
        {product.title} - ${product.price}
      </li>
    );
  });

  // Add a product to the cart
  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div>
      {/* Shopping cart icon */}
      <i className='fa fa-shopping-cart'></i>
      {/* Link to the checkout page */}
      <Link to='/checkout'>
        <ul>{productItems}</ul>
      </Link>
      {/* Button to add a product to the cart */}
      <button
        onClick={() =>
          handleAddToCart({ id: 1, title: "Product 1", price: 10.99 })
        }
      >
        Add to Cart
      </button>
      {/* Display the number of items in the cart */}
      <p>Number of items: {products ? products.length : 0}</p>
    </div>
  );
}

export default CartIcon;
