"use client";
import AddToCartButton from "@/app/Components/AddToCartButton";
import ImageGallery from "@/app/Components/ImageGallary";
import { Button } from "@/components/ui/button";
import { Star, Truck } from "lucide-react";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { Dimmer, Loader, Segment } from "semantic-ui-react";


const detailPage = (params) => {
    const { isLoading, error, data } = useQuery('productData', () =>
    fetch(`https://fakestoreapi.com/products/${params?.params?.slug}`).then(res =>
      res.json()
    )
  )


  if (error) return 'An error has occurred: ' + error.message
 
const [count, setCount] = useState(1)
const handleCountChangePlus=()=>{
  setCount(count+1)
}
const handleCountChangeMinus=()=>{
  setCount(count-1)
}
  return (
    <div className="bg-white">
    {isLoading?
    <div className="flex flex-col items-center justify-center h-screen max-w-full">

    <Segment>
      <Dimmer active>
        <Loader><p className="text-red-600">Loading...</p></Loader>
      </Dimmer>

    </Segment>

    
  </div>:
      <div className="max-w-screen-xl px-4 mx-auto md:px-8 sm:mx-4 sm:px-4">
        <div className="grid gap-8 md:grid-cols-2">
          {" "}
          <ImageGallery images={data?.image} />
          <div className="md:py-6">
            <div className="my-4 ">
              <span className="inline-block text-xl font-medium text-gray-500">
                {data?.category}
              </span>
              <h1 className="my-3 text-2xl font-semibold lg:text-2xl">
                {data?.title}
              </h1>
            </div>
            <div className="flex gap-6 mb-6 md:mb-10">
              <Button className="flex gap-2 rounded-2xl ">
                <span className="text-sm">{data?.rating?.rate}</span>
                <Star className="w-5 h-5" />
              </Button>
              <span className="text-sm text-gray-500 transition duration-100 ">
                59 Ratings
              </span>
            </div>
            <div className="flex items-center gap-4 ">
              <p className="text-xl font-medium">Price:</p>
              <span className="text-xl font-medium text-red-500 line-through">
                ${data?.price + 30}
              </span>
              <span className="text-2xl font-semibold">${data?.price}</span>
            </div>

            <span className="my-3 text-sm font-medium text-gray-400">
              Include Vat plus shipping{" "}
            </span>
            <div className="flex items-center gap-3 my-3 text-gray-500">
              <Truck className="w-5 h-5" />
              <span className="text-sm">2-4 Days</span>
            </div>
            <div className="flex items-center gap-3 mt-6 mb-6 cursor-pointer">
            <Button onClick={handleCountChangeMinus} disabled={count<=1}>
-
            </Button>
        <p>{count}</p>
            <Button onClick={handleCountChangePlus}>
    +
            </Button>
             
            </div>
            <div className="mt-10 mb-4 md:mb-18">
              <p className="text-justify text-medium">{data?.description}</p>
            </div>
               <AddToCartButton
           data={data}
           count={count}
              />
          </div>
        </div>
      </div>}
    </div>
  );
};

export default detailPage;