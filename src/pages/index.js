import ComponentLayout from "@/layouts/ComponentLayout";
import Image from "next/image";

import logo from "../../public/logo-nobg.png";

export default function Home() {
  return (
    <ComponentLayout>
      <main className="flex w-full h-screen justify-center items-center">
        <Image
          src={logo}
          alt="Welcome to Larawind UI"
          width={500}
          height={500}
        />
      </main>
    </ComponentLayout>
  );
}
