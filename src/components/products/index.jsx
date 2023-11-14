import ProductCard from "./productCard";
import { dummyData } from "../../assets/data";

function ProductSection() {
  return (
    <section className="min-h-screen py-16 px-6 max-w-[1120px] mx-auto">
      <div className="text-center space-y-3">
        <h2 className="text-5xl font-semibold">Products</h2>git
        <p className="text-lg text-gray-800">Get all you need from here</p>
      </div>
      <div className="flex gap-4 mt-10">
        {dummyData.map((product, id) => (
          <ProductCard key={id + product.name} {...product} />
        ))}
      </div>
    </section>
  );
}

export default ProductSection;
