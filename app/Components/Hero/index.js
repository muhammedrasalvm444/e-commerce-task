import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="max-w-2xl px-4 mx-auto sm:pb-6 lg:max-w-7xl lg:px-8">
      <div className="flex flex-wrap justify-between mb-8 md:mb-16">
        <div className="flex flex-col justify-center w-full mb-6 sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
          <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl first-letter:text-primary">
            Top Fashion for a top price!
          </h1>
          <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
            We sell only the most exclusive and high quality products for you.
            We are the best so come and shop with us.
          </p>
        </div>

        <div className="flex w-full mb-12 md:mb-16 lg:w-1/2">
          <div className="relative z-10 -ml-12 overflow-hidden bg-gray-100 rounded-lg shadow-lg left-12 top-12 md:left-16 md:top-16 lg:ml-0">
            <Image
              src={"/image1.webp"}
              alt="Great Photo"
              className="object-cover object-center w-full h-full"
              priority
              width={400}
              height={400}
            />
          </div>

          <div className="overflow-hidden bg-gray-100 rounded-lg shadow-lg">
            <Image
              src={"/image2.webp"}
              alt="Great Photo"
              className="object-cover object-center w-full h-full"
              width={400}
              height={400}
              priority
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex w-64 h-12 overflow-hidden border divide-x rounded-lg">
          <Link
            href="/Men"
            className="flex items-center justify-center w-1/3 text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            Men
          </Link>
          <Link
            href="/Women"
            className="flex items-center justify-center w-1/3 text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            Women
          </Link>
          <Link
            href="/Teens"
            className="flex items-center justify-center w-1/3 text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            Teens
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Hero;