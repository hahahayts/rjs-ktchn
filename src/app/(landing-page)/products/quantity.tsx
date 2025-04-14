"use client";

import { MinusIcon, PlusIcon } from "lucide-react";
import React, { useState } from "react";

export const Quantity = () => {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  return (
    <div className="flex items-center border rounded-lg overflow-hidden">
      <button
        onClick={decreaseQuantity}
        className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors"
      >
        <MinusIcon size={16} />
      </button>
      <span className="px-4 py-1">{quantity}</span>
      <button
        onClick={increaseQuantity}
        className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors"
      >
        <PlusIcon size={16} />
      </button>
    </div>
  );
};
