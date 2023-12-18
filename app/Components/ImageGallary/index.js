"use client";
import React, { useState } from "react";
import Image from "next/image";

const ImageGallery = ( images ) => {
  const [bigImage, setBigImage] = useState(images[0]);
  const handleImageChange = (image) => {
    setBigImage(image);
  };
  console.log("imGES",images);

  return (
    <div className="grid gap-4 lg:grid-cols-5">
      {/* <div className="flex order-last gap-4 lg:order-none lg:flex-col">
        {images?.map((image, id) => (
          <div className="overflow-hidden bg-gray-100 rounded-lg" key={id}>
            <Image
              src={image}
              height={400}
              width={400}
              alt="Photos"
              className="object-cover object-center w-full h-full cursor-pointer"
              onClick={() => handleImageChange(image)}
            />
          </div>
        ))}
      </div> */}
      <div className="relative overflow-hidden bg-gray-100 rounded-lg lg:col-span-4">
        <Image
          src={images?.images}
          height={400}
          width={400}
          alt="Photos"
          className="object-cover object-center w-full h-full cursor-pointer"
        />

        <span className="px-4 py-1.5 absolute top-0 left-0 rounded-br-lg bg-red-500  text-sm uppercase tracking-wider text-white">
          Sale
        </span>
      </div>
    </div>
  );
};

export default ImageGallery;