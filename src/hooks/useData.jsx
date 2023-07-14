import { useEffect, useState } from "react";
import path from "path";
import fs from "fs/promises";

export function useStaticData() {
  const [data, setData] = useState(null);

  async function getData() {
    const filePath = path.join(process.cwd(), "/src/data", "components.json");
    const fileData = await fs.readFile(filePath);
    const data = JSON.parse(fileData.toString());

    return data;
  }

  async function getComponentDataByID(componentID) {
    const data = await getData();
    const foundComponent = data.components.heros.find(
      (component) => componentID === component.id
    );

    return foundComponent;
  }

  const getStaticProps = async (context) => {
    const componentID = context.params?.slug;
    const componentData = getComponentDataByID(componentID);

    if (!componentData) {
      return {
        props: { hasError: true },
      };
    } else {
      setData(componentData);
    }

    return data;
  };
}

export const getStaticPaths = async ({ typeOfComponents }) => {
  const data = await getData();
  const componentData = { typeOfComponents };
  const pathsWithParams = data.components.componentData.map((component) => ({
    params: { slug: component.id },
  }));

  return {
    paths: pathsWithParams,
    fallback: true,
  };
};
