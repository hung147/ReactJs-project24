import React from "react";
import CardShop from "./Cards/Card";
import Title from "./Title/Title";
import { useState, useEffect } from "react";
const CardSectionProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("http://localhost:1337/api/products?populate=*", {
        headers: {
          Authorization: `Bearer ce5664b8779d3f83f4d8543453847150e23fe2f397a9e2473e35211a884dab202d99baaf91141b842358d52d6f64c72cce490788564528a161b566a292abc17752ecd595ac42a99db39770997676976a091694b51a06a5f8b53a2e479e7ce0df2e1f50c586997733e0ceae3dc4624d5095939b3ece125554093ff25121cc0692`,
        },
      });
      const response = await res.json();
      setProducts(response.data);
    };
    fetchProducts();
  }, []);
  const renderProducts = () => {
    return products
      .slice(0, 5)
      .map((item, index) => <CardShop key={index} product={item.attributes} />);
  };

  return (
    <div className="px-[120px] py-0">
      <Title title="SẢN PHẨM BÁN CHẠY" />
      <div className="grid grid-cols-5 gap-[14px]">{renderProducts()}</div>
    </div>
  );
};

export default CardSectionProduct;
