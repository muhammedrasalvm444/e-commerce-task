"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { useAppContext } from "../../../context";


const AddToCartButton = ({
  product,count
}) => {
const {state}=useAppContext()
console.log("state",state);
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
