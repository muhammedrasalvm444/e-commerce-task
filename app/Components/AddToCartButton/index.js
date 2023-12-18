"use client";
import { Button } from "@/components/ui/button";
import React from "react";


const AddToCartButton = ({
  name,
  id,
  price,
  image,
  desc,
  currency,
  price_id,
}) => {
  console.log("prod", price_id);
  const product = {
    name: name,
    id: id,
    price: price,
    desc: desc,
    currency: currency,
    price_id: price_id,
  };
  return (
    <>
    <Button>
      Add to cart
    </Button>
    </>
  );
};

export default AddToCartButton;
