import React, { useState } from "react";
import { IconButton, ButtonGroup } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import CardShop from "../../components/Cards/Card";

export function PaginationGroup() {
  const [active, setActive] = useState(1);

  const next = () => {
    if (active === 5) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };

  const renderProducts = () => {
    const products = Array.from(
      { length: 16 },
      (_, index) => index + 1 + (active - 1) * 16
    );
    return products.map((productId) => <CardShop key={productId} />);
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
        <IconButton onClick={() => setActive(1)}>{1}</IconButton>
        <IconButton onClick={() => setActive(2)}>{2}</IconButton>
        <IconButton onClick={() => setActive(3)}>{3}</IconButton>
        <IconButton onClick={() => setActive(4)}>{4}</IconButton>
        <IconButton onClick={() => setActive(5)}>{5}</IconButton>
        <IconButton onClick={next}>
          <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
        </IconButton>
      </ButtonGroup>
    </div>
  );
}
