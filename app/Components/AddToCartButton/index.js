"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { useAppContext } from "../../../context";
import Link from "next/link";


const AddToCartButton = ({
  product,count
}) => {
// const {state}=useAppContext()
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
