"use client";

import { useCart } from "@/lib/store";

export default function Cart() {
  const { items } = useCart();

  return (
    <div>
      {items.map(({ product, quantity }) => (
        <div
          className="absolute left-0 px-2 rounded-full bg-white/90 text-slate-900 "
          key={product.id}
        >
          <p> {quantity}</p>
        </div>
      ))}
    </div>
  );
}
