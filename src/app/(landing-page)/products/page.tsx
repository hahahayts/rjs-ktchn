import { getAllProducts } from "@/data/products";
import { ProductCard } from "./productCard";

export default async function ProductsPage() {
  const products = await getAllProducts();
  const serializedProducts = products?.map((product) => ({
    ...product,
    price: product.price.toNumber(), // or product.price.toString()
  }));
  
  return (
    <div className="px-6 py-10 max-w-7xl mx-auto">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Our Filipino Specialties</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Experience authentic Filipino flavors with our carefully selected
          products, made with traditional recipes and high-quality ingredients.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {serializedProducts?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
