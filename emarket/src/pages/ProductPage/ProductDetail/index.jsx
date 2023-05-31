import React, { useEffect, useState, useContext } from "react";
import { FaStar } from "react-icons/fa";
import { CartContext } from "../../Cart/CartContext";
import * as Styled from "./Product.styles";

// ProductDetail Imported Styles
const {
  ModalOverlay,
  ModalContainer,
  CloseButton,
  ProductImage,
  ProductDetails,
  ProductTitle,
  ProductDescription,
  ProductPrice,
  ProductDiscountedPrice,
  ProductRating,
  ReviewList,
  Review,
  ReviewUser,
  ReviewRating,
  ReviewDescription,
  AddToCartButton,
} = Styled;

const ProductDetail = ({ product, onClose }) => {
  const { addToCart } = useContext(CartContext);
  const [averageRating, setAverageRating] = useState(0); // State for average rating

  useEffect(() => {
    // Calculate average rating of product
    const ratings = product.reviews.map((review) => review.rating);
    const sum = ratings.reduce((a, b) => a + b, 0);
    const average = ratings.length > 0 ? sum / ratings.length : 0; // Calculate average rating, handle division by zero
    setAverageRating(average); // Update average rating state
  }, [product.reviews]);

  return (
    <ModalOverlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>X</CloseButton>
        <ProductImage src={product.imageUrl} alt={product.title} />
        <ProductDetails>
          <ProductTitle>{product.title}</ProductTitle>
          <ProductDescription>{product.description}</ProductDescription>
          {product.discountedPrice !== product.price && (
            <>
              <ProductPrice>
                <span style={{ textDecoration: "line-through", color: "red" }}>
                  ${product.price}
                </span>{" "}
                <span style={{ marginLeft: "10px" }}>
                  <ProductDiscountedPrice>
                    ${product.discountedPrice}
                  </ProductDiscountedPrice>
                </span>
              </ProductPrice>
            </>
          )}
          {product.discountedPrice === product.price && (
            <ProductPrice>${product.price}</ProductPrice>
          )}

          <ProductRating>
            {/* Render star icons based on average rating */}
            {Array.from({ length: 5 }).map((_, index) => (
              <FaStar
                key={index}
                size={24}
                color={index + 1 <= averageRating ? "gold" : "gray"}
              />
            ))}
          </ProductRating>

          <ReviewList>
            <h3>Reviews</h3>
            {/* Render review items */}
            {product.reviews.map((review) => (
              <Review key={review.id}>
                <ReviewUser>{review.username}</ReviewUser>
                <ReviewRating>
                  {/* Render star icons based on review rating */}
                  {Array.from({ length: 5 }).map((_, index) => (
                    <FaStar
                      key={index}
                      size={18}
                      color={index + 1 <= review.rating ? "gold" : "gray"}
                    />
                  ))}
                </ReviewRating>
                <ReviewDescription>{review.description}</ReviewDescription>
              </Review>
            ))}
          </ReviewList>
          <AddToCartButton onClick={() => addToCart(product)}>
            Add to Cart
          </AddToCartButton>
        </ProductDetails>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default ProductDetail;
