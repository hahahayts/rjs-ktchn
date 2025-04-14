"use client";

import { Button } from "@/components/ui/button";
import { Product } from "@prisma/client";
import { ShoppingCartIcon } from "lucide-react";
import Image from "next/image";
import { Quantity } from "./quantity";
import { useCart } from "@/lib/store";

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const addItem = useCart((state) => state.addItem);

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-1 flex flex-col">
      {/* Product Image */}
      <div className="relative">
        <Image
          src={`/assets/${product.image}`}
          alt={product.name}
          width={400}
          height={300}
          className="w-full h-56 object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="p-5 flex flex-col flex-grow">
        <h2 className="text-xl font-semibold mb-1">{product.name}</h2>
        <p className="text-sm text-gray-600 mb-4 flex-grow">
          {product.description}
        </p>

        <div className="mt-auto space-y-4">
          {/* Price */}
          <div className="text-lg font-bold text-yellow-600">
            ₱{product.price.toString()}
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center justify-between">
            <Quantity />

            <Button
              onClick={() => addItem(product, 1)}
              className="bg-yellow-500 hover:bg-yellow-600 text-white flex items-center gap-2"
            >
              <ShoppingCartIcon size={16} />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
