"use client";
import { Button } from "@/components/ui/button";
import React from "react";


const AddToCartButton = ({
  product,count
}) => {
 const {addToCart}=useAppContext()

  return (
    <>
    <Link href="/" onClick={()=>{addToCart(product,count)}}>
    <Button >
      Add to cart
    </Button>
    </Link>
    </>
  );
};

export default AddToCartButton;
