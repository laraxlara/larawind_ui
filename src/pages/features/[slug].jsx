import React from "react";
import { useRouter } from "next/router";
import path from "path";
import fs from "fs/promises";
import ComponentLayout from "@/layouts/ComponentLayout";
import Component from "@/components/Component/Component";
import hero1 from "../../docs/heros/hero1.html";

async function getData() {
  const filePath = path.join(process.cwd(), "/src/data", "components.json");
  const fileData = await fs.readFile(filePath);
  const data = JSON.parse(fileData.toString());

  return data;
}

export const getStaticProps = async (context) => {
  const componentID = context.params?.slug;
  const data = await getData();
  const foundComponent = data.components.features.find(
    (component) => componentID === component.id
  );

  if (!foundComponent) {
    return {
      props: { hasError: true },
    };
  }

  return {
    props: {
      componentData: foundComponent,
    },
  };
};

export const getStaticPaths = async () => {
  const data = await getData();
  const pathsWithParams = data.components.features.map((component) => ({
    params: { slug: component.id },
  }));

  return {
    paths: pathsWithParams,
    fallback: true,
  };
};

function featurePage({ componentData, hasError }) {
  const router = useRouter();

  if (hasError) {
    return <h1>Error - please try another parameter</h1>;
  }

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <ComponentLayout>
      <div className="flex flex-col w-full justify-center items-start gap-8 p-8 overflow-auto">
        <h1 className="font-mono font-bold text-5xl">{componentData.name}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non
          pellentesque quam. Duis et orci ornare erat mollis dapibus in non
          felis. Aliquam mollis tristique odio a ornare. Morbi ut purus eu est
          luctus blandit. Maecenas laoreet viverra nunc, suscipit rhoncus ex
          lacinia et. Vestibulum ullamcorper eros neque, a tempor lacus
          tincidunt sed. Quisque eget tempus nisl. Nunc elementum condimentum
          est, nec mattis quam volutpat vitae. Donec nibh orci, dignissim
          sodales congue sit amet, maximus quis elit.
        </p>

        <Component srcDoc={hero1} />
      </div>
    </ComponentLayout>
  );
}

export default featurePage;
