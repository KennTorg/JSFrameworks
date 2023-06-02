import React, { useState } from "react";
import ProductDetail from "../ProductDetail";
import * as Styled from "./ProductList.styles";

// Card styles
const {
  Card,
  CardImage,
  CardBody,
  CardTitle,
  CardPrice,
  ProductListWrapper,
  ViewButton,
} = Styled;

function ProductList({ products }) {
  const [selectedProduct, setSelectedProduct] = useState(null); // State for the selected product

  const handleProductClick = (product) => {
    setSelectedProduct(product); // Set the selected product when a card is clicked
  };

  return (
    <>
      <ProductListWrapper>
        {products.map((product) => (
          <Card key={product.id}>
            <CardImage src={product.imageUrl} />
            <CardBody>
              <CardTitle>{product.title}</CardTitle>
              <CardPrice>Price: ${product.price}</CardPrice>
              <ViewButton onClick={() => handleProductClick(product)}>
                View
              </ViewButton>
            </CardBody>
          </Card>
        ))}
      </ProductListWrapper>
      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
}

export default ProductList;
