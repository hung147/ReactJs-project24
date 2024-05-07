import React, { useState, useEffect } from "react";
import { IconButton, ButtonGroup } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import CardShop from "../../components/Cards/Card";
export function PaginationGroup3() {
  const [active, setActive] = useState(1);
  const [products, setProducts] = useState([]);
  const itemsPerPage = 16;
  const totalPages = 3;
  http: useEffect(() => {
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
    const startIdx = (active - 1) * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;
    const currentPageProducts = products.slice(startIdx, endIdx);

    return currentPageProducts.map((item, index) => (
      <CardShop key={index} product={item.attributes} />
    ));
  };

  const next = () => {
    if (active < totalPages) {
      setActive(active + 1);
    }
  };

  const prev = () => {
    if (active > 1) {
      setActive(active - 1);
    }
  };

  return (
    <div>
      <div className="product-row grid grid-cols-4 grid-rows-4 gap-4 ml-[20px] mt-[40px]">
        {renderProducts()}
      </div>
      <ButtonGroup
        variant="outlined"
        className="mb-4 flex items-center justify-center mt-[60px]"
      >
        <IconButton onClick={prev}>
          <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
        </IconButton>
        {[...Array(totalPages).keys()].map((pageNum) => (
          <IconButton
            key={pageNum + 1}
            onClick={() => setActive(pageNum + 1)}
            active={active === pageNum + 1 ? "true" : "false"}
            className={
              active === pageNum + 1 ? "bg-gray-100  text-[#fe5e35]" : ""
            }
          >
            {pageNum + 1}
          </IconButton>
        ))}
        <IconButton onClick={next}>
          <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
        </IconButton>
      </ButtonGroup>
    </div>
  );
}
