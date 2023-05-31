import React, { useEffect, useState } from "react";
import ProductList from "../ProductPage/ProductList";
import { Container, SearchBar, SearchInput } from "./Home.styles";

const Home = () => {
  const [products, setProducts] = useState([]); // State for all products
  const [filteredProducts, setFilteredProducts] = useState([]); // State for filtered products
  const [searchText, setSearchText] = useState(""); // State for search input text

  useEffect(() => {
    // Fetch products from API when the component mounts
    fetch("https://api.noroff.dev/api/v1/online-shop")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data); // Set all products
        setFilteredProducts(data); // Set filtered products to all products initially
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSearch = (event) => {
    const searchValue = event.target.value;
    setSearchText(searchValue); // Update search input text

    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchValue.toLowerCase())
    ); // Filter products based on search input
    setFilteredProducts(filtered); // Update filtered products
  };

  if (!products) {
    return <div>Loading Products...</div>; // Display loading message if products are not available yet
  }

  return (
    <Container>
      <SearchBar>
        <SearchInput
          type='text'
          placeholder='Search products...'
          value={searchText}
          onChange={handleSearch}
        />
      </SearchBar>
      {filteredProducts.length > 0 ? (
        <ProductList products={filteredProducts} /> // Display filtered products if there are any
      ) : (
        <div>
          {products.length > 0 ? (
            <ProductList products={products} /> // Display all products if no filtered products are available
          ) : (
            <p>No products found.</p> // Display message if no products are available
          )}
        </div>
      )}
    </Container>
  );
};

export default Home;
