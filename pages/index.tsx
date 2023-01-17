import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import BannerImage from "../public/BannerImage.png";

const Banner = () => {
  return (
    <div className="bg-purple-400 w-full flex lg:max-w-[80vw]  justify-start items-center md:rounded-xl shadow-xl">
      <Image className="-ml-24 -mr-24" src={BannerImage} alt="Hero Image" />
      <h1 className="text-[3.5vh] md:text-[5vh] font-bold uppercase text-center text-white">
        Welcome to My Commerce!
      </h1>
    </div>
  );
};

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>MyCommerce</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="h-24 border-b w-full flex justify-start items-center p-4">
        My Commerce
      </nav>

      <main className="flex w-full flex-1 flex-col items-center justify-start  text-center md:p-4">
        <Banner />
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        Footer
      </footer>
    </div>
  );
};

export default Home;
