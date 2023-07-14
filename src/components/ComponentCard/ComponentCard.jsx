import React from "react";
import Link from "next/link";
import Image from "next/image";
import feature1 from "../../../public/images/wireframes/feature1.png";

const ComponentCard = ({ href, components, src }) => {
  return (
    <Link
      className="relative bg-white max-w-[350px] h-[170px] m-2 flex flex-col items-start justify-between rounded-xl border border-gray-100 shadow-xl hover:shadow-2xl p-2"
      href={`${components}/${href}`}
    >
      <div className="w-full">
        <Image
          src={src}
          alt=""
          className="rounded-xl"
          width={290}
          height={200}
        />
      </div>
    </Link>
  );
};

export default ComponentCard;
