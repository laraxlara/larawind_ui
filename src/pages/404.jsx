import React from "react";
import Image from "next/image";
import Link from "next/link";
import img404 from "../../public/images/404.svg";

const NotFoundPage = () => {
  return (
    <div className="h-screen w-full flex flex-col gap-6 justify-center items-center text-center">
      <Image src={img404} width={500} height={500} alt="Page Not Found" />
      <p className="text-md font-bold font-mono text-[#19FFBD]">Error 404</p>
      <h1 className="font-bold font-mono text-5xl">Page not found</h1>
      <p className="text-lg font-normal font-mono text-gray-500">
        The page you have asked doesnt exist.
      </p>
      <Link href="/" className="underline text-gray-400">
        Go to home page &rarr;
      </Link>
    </div>
  );
};

export default NotFoundPage;
