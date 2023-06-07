import { createContext, useState, useContext, useEffect } from "react";

// Create a new context for the cart
export const CartContext = createContext();

// Retrieve the cart data from LocalStorage
const savedCart = localStorage.getItem("cart");
const parsedCart = JSON.parse(savedCart);

// CartProvider component
export const CartProvider = ({ children }) => {
  // State variables
  const [cart, setCart] = useState(parsedCart || { products: [] });
  const [discountAmount, setDiscountAmount] = useState(0);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  // Add a product to the cart
  const addToCart = (product) => {
    const productIndex = cart.products.findIndex((p) => p.id === product.id);

    if (productIndex >= 0) {
      // Update the quantity of an existing product in the cart
      const updatedProducts = [...cart.products];
      updatedProducts[productIndex] = {
        ...updatedProducts[productIndex],
        quantity: updatedProducts[productIndex].quantity + 1,
      };
      setCart({ products: updatedProducts });
    } else {
      // Add a new product to the cart with quantity 1
      setCart({ products: [...cart.products, { ...product, quantity: 1 }] });
    }
    setCartCount(cartCount + 1);
  };

  // Remove a product from the cart
  const removeProduct = (productId) => {
    const updatedProducts = cart.products.filter(
      (product) => product.id !== productId
    );
    setCart({ products: updatedProducts });
    setCartCount(cartCount - 1);
  };

  // Clear the entire cart
  const clearCart = () => {
    setCart({ products: [] });
    setCartCount(0);
  };

  // Increment the quantity of a product in the cart
  const incrementProduct = (productId) => {
    const updatedProducts = [...cart.products];
    const productIndex = updatedProducts.findIndex((p) => p.id === productId);

    updatedProducts[productIndex] = {
      ...updatedProducts[productIndex],
      quantity: updatedProducts[productIndex].quantity + 1,
    };

    setCart({ products: updatedProducts });
    setCartCount(cartCount + 1);
  };

  // Decrement the quantity of a product in the cart
  const decrementProduct = (productId) => {
    const updatedProducts = [...cart.products];
    const productIndex = updatedProducts.findIndex((p) => p.id === productId);

    if (updatedProducts[productIndex].quantity > 1) {
      updatedProducts[productIndex] = {
        ...updatedProducts[productIndex],
        quantity: updatedProducts[productIndex].quantity - 1,
      };
      setCart({ products: updatedProducts });
      setCartCount(cartCount - 1);
    } else {
      removeProduct(productId);
    }
  };

  // Handle the checkout process
  const handleCheckout = () => {
    setCheckoutSuccess(true);
    clearCart();
  };

  // Update the cart in LocalStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartCount(cart.products.length); // Update cartCount whenever cart changes
  }, [cart]);

  // Context values to be provided
  const contextValues = {
    cart,
    addToCart,
    removeProduct,
    clearCart,
    incrementProduct,
    decrementProduct,
    discountAmount,
    setDiscountAmount,
    checkoutSuccess,
    handleCheckout,
    cartCount,
    setCartCount,
    setCheckoutSuccess,
  };

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to access the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be within a CartProvider");
  }
  return context;
};
