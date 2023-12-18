"use client";
import React from "react";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Image from "next/image";

export function CartModal() {
  const {
    cartCount,
    shouldDisplayCart,
    handleCartClick,
    cartDetails,
    removeItem,
    totalPrice,
    
  } = useShoppingCart();


  

  return (
    <Sheet
      open={shouldDisplayCart}
      onOpenChange={() => {
        handleCartClick();
      }}
    >
      <SheetContent className="sm:max-w-lg w-[90vw]">
        <SheetHeader>
          {" "}
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col justify-between h-full">
          <div className="flex-1 mt-8 overflow-y-auto">
            <ul className="mt-6 divide-y divide-gray-200">
              {cartCount == 0 ? (
                <div className="flex items-center justify-center">
                  <h1 className="text-3xl font-semibold">
                    You have no cart items
                  </h1>
                </div>
              ) : (
                <>
                  {" "}
                  {Object.values(cartDetails ?? {}).map((entry) => (
                    <li
                      className="flex py-6 border-b border-gray-200 "
                      key={entry?.id}
                    >
                      <div className="flex-shrink-0 w-24 h-24 overflow-hidden border border-gray-200 rounded-md sm:h-20 sm:w-20">
                        <Image
                          src={entry?.image || ""}
                          alt="cart image"
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="flex flex-col flex-1 ml-3 overflow-x-hidden">
                        <div className="flex justify-between">
                          <h1 className="text-xl font-semibold md:text-sm ">
                            {entry?.name}
                          </h1>
                          <h2 className="mt-1 text-2xl font-semibold">
                            {entry?.price}
                          </h2>
                        </div>
                        <div className="mt-1 overflow-x-hidden">
                          <p className="text-sm text-justify text-gray-700 line-clamp-2 ">
                            {entry?.desc}
                          </p>
                        </div>
                        <div className="flex items-end justify-between flex-1 text-sm">
                          <p className="text-gray-500">QTY: {entry.quantity}</p>

                          <div className="flex">
                            <button
                              type="button"
                              onClick={() => removeItem(entry.id)}
                              className="font-medium text-primary hover:text-primary/80"
                            >
                              Remove
                            </button>
                          </div>
                          {}
                        </div>
                      </div>
                    </li>
                  ))}{" "}
                </>
              )}
            </ul>
          </div>

          {cartCount != 0 && (
            <div className="px-4 py-6 border-t border-gray-200 sm:px-6">
              {/* Subtotal Section */}
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Subtotal:</p>
                <p>${totalPrice}</p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">
                Shipping and taxes are calculated at checkout.
              </p>
              <div className="mt-6">
                <div className="w-full">
                  <Button className="w-full" onClick={handleCheckoutClick}>
                    CheckOut
                  </Button>
                </div>
                <div className="flex items-center justify-center mt-3">
                  <p className="text-sm text-gray-500">
                    Or{" "}
                    <span
                      className="cursor-pointer text-primary"
                      onClick={() => {
                        handleCartClick();
                      }}
                    >
                      Continue shopping
                    </span>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}