// import AddToCartButton from "@/app/components/AddToCartButton";
// import CheckOutNowButton from "@/app/components/CheckOutNowButton";
"use client";

import AddToCartButton from "@/app/Components/AddToCartButton";
import ImageGallery from "@/app/Components/ImageGallary";
import { Button } from "@/components/ui/button";
import { Star, Truck } from "lucide-react";
import React from "react";
import { useQuery } from "react-query";


const detailPage = (params) => {
    console.log("params",params);
    const { isLoading, error, data } = useQuery('repoData', () =>
    fetch(`https://fakestoreapi.com/products/${params?.params?.slug}`).then(res =>
      res.json()
    )
  )

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message
  console.log("data",data);
 

  return (
    <div className="bg-white">
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
              {/* <Button>Add to cart</Button> */}
              {/* <AddToCartButton
                name={data?.name}
                price={data?.price}
                id={data?._id}
                image={data?.image}
                currency="USD"
                desc={data?.description}
                price_id={data?.price_id}
              />
              <CheckOutNowButton
                name={data?.name}
                price={data?.price}
                id={data?._id}
                image={data?.image}
                currency="USD"
                desc={data?.description}
                price_id={data?.price_id}
              /> */}
            </div>
            <div className="mt-10 mb-4 md:mb-18">
              <p className="text-justify text-medium">{data?.description}</p>
            </div>
               {/* <AddToCartButton
                name={data?.name}
                price={data?.price}
                id={data?._id}
                image={data?.image}
                currency="USD"
                desc={data?.description}
                price_id={data?.price_id}
              /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default detailPage;