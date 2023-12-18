"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useQuery } from "react-query";
import { Dimmer, Image, Loader, Segment } from "semantic-ui-react";



export default  function CategoriesList({params}) {
  console.log("params22",params?.slug);
  const Val=decodeURIComponent(params?.slug)

  const { isLoading, error, data } = useQuery('category Data', () =>
  fetch(`https://fakestoreapi.com/products/category/${params?.slug}`).then(res =>
    res.json()
  )
)
if (error) return 'An error has occurred: ' + error.message
console.log("");

  return (
    <div className="bg-white ">
   { isLoading? <div className="flex flex-col items-center justify-center h-screen max-w-full items-centr">

<Segment>
  <Dimmer active>
    <Loader><p className="text-red-600">Loading</p></Loader>
  </Dimmer>

  <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
</Segment>

<Segment>
  <Dimmer active inverted>
  </Dimmer>

  <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
</Segment>
</div>:
      <div className="max-w-2xl px-4 py-16 mx-auto sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Our  products of {Val}
          </h2>
        </div>

        <div className="grid grid-cols-1 mt-6 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((product) => (
            <div key={product._id} className="relative group">
              <div className="w-full overflow-hidden bg-gray-200 rounded-md aspect-square group-hover:opacity-75 lg:h-80">
                <Link href={`/product/${product.slug}`}>
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
                 
                  </div>
                </div>
              </div>
             
           
            </div>
          ))}
        </div>
   
      </div>
   }
   
    </div>
   
  );
}