import { AddProductModal } from "./AddProductModal";
import { Product } from "@prisma/client";
import Delete from "@/app/(protected)/admin/products/delete";
import Edit from "@/app/_components/edit";
import { getAllProducts } from "@/data/products";

export const revalidate = 60; // seconds
export default async function AdminProductsPage() {
  const products: Product[] | undefined = await getAllProducts();
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold">Product Management</h1>

        <div className="flex gap-2 w-full md:w-auto">
          {/* <Input placeholder="Search products..." /> */}
          <AddProductModal />
        </div>
      </div>

      {/* Product Table */}
      <div className="overflow-x-auto rounded-xl border shadow-sm bg-white">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Stock</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product) => (
              <tr
                key={product.id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="px-4 py-3 font-medium">{product.name}</td>
                <td className="px-4 py-3">₱{product.price.toString()}</td>
                <td className="px-4 py-3">{product.stock}</td>
                <td className="px-4 py-3 capitalize">
                  {product.status === "active" ? (
                    <span className="text-green-600 font-semibold">Active</span>
                  ) : (
                    <span className="text-red-500 font-semibold">Inactive</span>
                  )}
                </td>
                <td className="px-4 py-3 text-right space-x-2">
                  <Edit id="" />
                  <Delete id={product.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
