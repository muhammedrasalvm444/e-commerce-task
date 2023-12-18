"use client";
import Link from "next/link";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "../../../components/ui/button";
import { useQuery } from "react-query";
import { ShoppingBag } from "lucide-react";

// ... (import statements remain unchanged)

const Navbar = () => {
  const router = useRouter()
  const { isLoading, error, data } = useQuery('catData', () =>
  fetch('https://fakestoreapi.com/products/categories').then(res =>
    res.json()
  )
)
 

  const pathname = usePathname();
  console.log("path",pathname);
  const handleLoginModalOpen=()=>{
    router?.push("/login")
    
  }

  return (
    <header className="mb-8 border-b">
      <div className="flex items-center justify-between max-w-2xl px-4 py-2 mx-auto sm:px-6 lg:max-w-7xl">
        <Link href={"/"}>
          <h1 className="text-2xl font-bold md:text-4xl text-redColor">
           E <span className="">Commerce</span>
          </h1>
        </Link>
        <div className="flex items-center">
          <nav className="hidden gap-8 lg:flex 2xl:ml-16">
            {data?.map((item, index) => (
              <Link
                key={index}
                href={`/category/${item}?htab=${item}`}
                className={`text-xl font-semibold ${
                  item== pathname
                    ? "lg text-2xl text-redColor"
                    : "text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
                }`}
              >
                {item}
              </Link>
            ))}
          </nav>
          <div className="flex ml-4 border-r divide-x sm:border-l">
        <Button onClick={()=>{handleLoginModalOpen()}}><p className="font-semibold ">Login/Sign up</p></Button>
          </div>
          <div className="flex ml-4 border-r divide-x sm:border-l">
            <Button
              variant={"outline"}
              onClick={() => {router?.push("/cart")}}
              className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none"
            >
              <ShoppingBag />
              <span className="hidden text-xs font-semibold text-gray-500 sm:block">
                Cart
              </span>
            </Button>
          </div>
         
        </div>
      </div>
    </header>
  );
};

export default Navbar;