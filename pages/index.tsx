import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { title } from "process";
import BannerImage from "../public/BannerImage.png";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>MyCommerce</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="sticky top-0 h-16 bg-purple-400 w-full flex justify-start items-center border-b border-purple-700 md:border-0 shadow-lg">
        <span className="uppercase text-2xl font-bold px-4 text-white">
          My Commerce
        </span>
      </nav>

      <main className="bg-white flex w-full flex-1 flex-col items-center justify-start  text-center space-y-12">
        <Banner />
        <section className="w-full flex flex-col justify-center items-center space-y-12 p-4 ">
          <h2 className="uppercase text-4xl w-full text-start font-bold">
            Featured Items:
          </h2>
          <div className="flex justify-center items-center space-x-6">
            <Card product="Xbox One" price="$499.99" image="" />
            <Card product="PlayStation 5" price="$495.99" image="" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;

const Banner = () => {
  return (
    <section className="bg-purple-400 w-full flex justify-between items-center shadow-xl">
      <div className="flex justify-center items-center">
        <Image className="-ml-36 -mr-40" src={BannerImage} alt="Banner Image" />
        <h1 className="text-[3.5vh] md:text-[4vh] font-bold uppercase text-center text-white p-4 w-[40vh] ">
          Welcome to My Commerce!
        </h1>
      </div>
    </section>
  );
};

const Card = ({
  product,
  price,
  image,
}: {
  product: string;
  price: string;
  image: string;
}) => {
  return (
    <div className="w-64 h-96 bg-gradient-to-b from-purple-300 to-purple-50 rounded-xl shadow-2xl">
      <h3>{product}</h3>
      <span>{price}</span>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="flex h-12 w-full items-center justify-center bg-purple-400">
      <span className="text-white font-bold">©2023</span>
    </footer>
  );
};
