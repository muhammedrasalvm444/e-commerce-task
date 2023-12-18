"use client";
import Link from "next/link";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "../../../components/ui/button";
import { useAppContext } from "../../../context";

// ... (import statements remain unchanged)

const Navbar = () => {
  const {first}=useAppContext()
  const router = useRouter()

  console.log(first,"ff");
  const Links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Men",
      href: "/Men",
    },
    {
      name: "Women",
      href: "/Women",
    },
    {
      name: "Teens",
      href: "/Teens",
    },
  ];

  const pathname = usePathname();
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
          <nav className="hidden gap-16 lg:flex 2xl:ml-16">
            {Links?.map((item, index) => (
              <Link
                key={index}
                href={item?.href}
                className={`text-xl font-semibold ${
                  item?.href === pathname
                    ? "lg text-2xl text-redColor"
                    : "text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
                }`}
              >
                {item?.name}
              </Link>
            ))}
          </nav>
          <div className="flex border-r divide-x sm:border-l ml-7">
        <Button onClick={()=>{handleLoginModalOpen()}}><p className="font-semibold ">Login/Sign up</p></Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;