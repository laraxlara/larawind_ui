import ComponentLayout from "@/layouts/ComponentLayout";
import ComponentCard from "@/components/ComponentCard/ComponentCard";

export default function Home() {
  return (
    <ComponentLayout>
      <main className="flex flex-wrap justify-start align-center">
        <ComponentCard />
        <ComponentCard />
        <ComponentCard />
        <ComponentCard />
        <ComponentCard />
      </main>
    </ComponentLayout>
  );
}
