import React from "react";
import ComponentLayout from "@/layouts/ComponentLayout";
import data from "@/data/components.json";
import ComponentCard from "@/components/ComponentCard/ComponentCard";

const Features = () => {
  return (
    <ComponentLayout>
      <div className="flex justify-start items-start gap-8 p-8 overflow-auto">
        {data.components.features.map((feature) => {
          return (
            <ComponentCard
              key={feature.id}
              href={feature.id}
              src={feature.imgPath}
              components={feature.components}
            />
          );
        })}
      </div>
    </ComponentLayout>
  );
};

export default Features;
