import React from "react";
import ComponentLayout from "@/layouts/ComponentLayout";
import data from "@/data/components.json";
import ComponentCard from "@/components/ComponentCard/ComponentCard";

const Heros = () => {
  return (
    <ComponentLayout>
      <div className="flex justify-start items-start gap-8 p-8 overflow-auto">
        {data.components.heros.map((hero) => {
          return (
            <ComponentCard
              key={hero.id}
              href={hero.id}
              src={hero.imgPath}
              components={hero.components}
            />
          );
        })}
      </div>
    </ComponentLayout>
  );
};

export default Heros;
