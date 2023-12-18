"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useQuery } from "react-query";

export default  function Categories() {
    const { isLoading, error, data } = useQuery('catData', () =>
    fetch('https://fakestoreapi.com/products/categories').then(res =>
      res.json()
    )
  )

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div className="bg-white ">
      <div className="max-w-2xl px-4 py-16 mx-auto sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Our Newest products
          </h2>

          <Link
            className="flex items-center text-primary gap-x-1"
            href="/all-product-list"
          >
            See All{" "}
            <span>
              <ArrowRight />
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 mt-6 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((product) => (
            <div key={product._id} className="relative group">
              <div className="w-full overflow-hidden bg-gray-200 rounded-md aspect-square group-hover:opacity-75 lg:h-80">
                <Link href={`/product/${product.slug}`}>
                  {" "}
                  <Image
                    src={product?.image ?? ""}
                    alt="Product image"
                    className="object-cover object-center w-full h-full lg:h-full lg:w-full"
                    width={300}
                    height={300}
                  />
                </Link>
              </div>
              <div className="flex justify-between mt-3">
                <div>
                  <h3 className="text-xl font-semibold">
                    {" "}
                    <Link href={`/product/${product.id}`}>
                      {product.title}
                    </Link>
                  </h3>
                  <p className="mt-4 text-xl font-semibold text-gray-900">
                    {" "}
                    {product.categoryName}
                  </p>
                </div>
                <div className="flex ">
                  <h1 className="pl-2 text-xl font-semibold text-primary">
                    <div className="flex gap-2">
                      $<span>{product?.price}</span>
                    </div>
                  </h1>
                  <div className="text-2xl">
                    {" "}
                    {/* Adjust the size here */}
                    {/* <IndianRupee /> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}