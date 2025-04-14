"use client";

import { useState } from "react";
import { useCart } from "@/lib/store";
import { MinusCircle, PlusCircle, ShoppingBag, Trash2 } from "lucide-react";
import Link from "next/link";
import { createOrder } from "@/actions/db/orders";

export default function OrdersPage() {
  const { items, removeItem, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);

  // Calculate total price and item count
  const cartTotal = items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );
  const itemCount = items.reduce((count, item) => count + item.quantity, 0);

  // Handle checkout process
  const handleCheckout = async () => {
    setIsProcessing(true);
    try {
      // Gather necessary data
      const orderData = {
        userId: "12345", // Get the user ID dynamically (e.g., from session)
        cartItems: items.map((item) => ({
          productId: item.product.id,
          quantity: item.quantity,
          price: item.product.price,
        })),
        total: cartTotal,
      };

      // Call the server-side createOrder function
      const order = await createOrder(
        orderData.userId,
        orderData.cartItems,
        orderData.total
      );
      alert("Order placed successfully!");
      clearCart();
    } catch (error) {
      console.error("Error during checkout:", error);
      alert("An error occurred. Please try again.");
    }
    setIsProcessing(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Your Cart</h1>
        <div className="flex items-center gap-2 text-gray-600">
          <ShoppingBag size={20} />
          <span>
            {itemCount} {itemCount === 1 ? "item" : "items"}
          </span>
        </div>
      </div>

      {items.length === 0 ? (
        <div className="text-center py-16 bg-gray-50 rounded-lg">
          <ShoppingBag size={64} className="mx-auto text-gray-300 mb-4" />
          <p className="text-xl text-gray-500 mb-4">Your cart is empty</p>
          <Link
            href="/products
            "
            className="inline-block px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-md font-medium"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="space-y-8">
          {/* Cart Items */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="hidden md:grid md:grid-cols-12 text-sm font-medium text-gray-500 bg-gray-50 px-6 py-3">
              <div className="col-span-6">Product</div>
              <div className="col-span-2 text-center">Quantity</div>
              <div className="col-span-2 text-right">Price</div>
              <div className="col-span-2 text-right">Subtotal</div>
            </div>

            <div className="divide-y">
              {items.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center"
                >
                  {/* Product Info */}
                  <div className="md:col-span-6 flex gap-4">
                    <div className="bg-gray-100 rounded w-16 h-16 flex-shrink-0 flex items-center justify-center">
                      {product.image ? (
                        <img
                          src={product.image}
                          alt={product.name}
                          className="object-contain h-14"
                        />
                      ) : (
                        <ShoppingBag size={24} className="text-gray-400" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">{product.name}</h3>
                      {product.variant && (
                        <p className="text-sm text-gray-500">
                          {product.variant}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="md:col-span-2 flex items-center justify-between md:justify-center gap-2">
                    <button
                      onClick={() =>
                        updateQuantity(product.id, Math.max(1, quantity - 1))
                      }
                      className="text-gray-500 hover:text-yellow-600"
                      disabled={quantity <= 1}
                    >
                      <MinusCircle
                        size={20}
                        className={quantity <= 1 ? "opacity-50" : ""}
                      />
                    </button>
                    <span className="w-8 text-center font-medium">
                      {quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(product.id, quantity + 1)}
                      className="text-gray-500 hover:text-yellow-600"
                    >
                      <PlusCircle size={20} />
                    </button>
                  </div>

                  {/* Price */}
                  <div className="md:col-span-2 text-right">
                    <p className="text-gray-700">₱{product.price.toFixed(2)}</p>
                  </div>

                  {/* Subtotal + Remove */}
                  <div className="md:col-span-2 flex justify-between md:justify-end items-center">
                    <p className="font-medium md:pr-4">
                      ₱{(product.price * quantity).toFixed(2)}
                    </p>
                    <button
                      onClick={() => removeItem(product.id)}
                      className="text-gray-400 hover:text-red-500"
                      aria-label="Remove item"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Coupon Code */}
            <div className="space-y-4">
              <h2 className="text-lg font-medium">Have a coupon?</h2>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Enter coupon code"
                  className="flex-grow px-4 py-2 border rounded-l focus:outline-none focus:ring-1 focus:ring-yellow-500"
                />
                <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-r font-medium">
                  Apply
                </button>
              </div>
              <button
                onClick={clearCart}
                className="flex items-center gap-2 text-gray-500 hover:text-gray-700"
              >
                <Trash2 size={16} />
                <span>Clear cart</span>
              </button>
            </div>

            {/* Totals */}
            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
              <h2 className="text-lg font-medium">Order Summary</h2>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>₱{cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span>{cartTotal >= 1000 ? "Free" : "₱100.00"}</span>
                </div>
                {cartTotal >= 1000 && (
                  <div className="flex justify-between text-green-600">
                    <span>Shipping Discount</span>
                    <span>-₱100.00</span>
                  </div>
                )}
              </div>

              <div className="border-t pt-4 mt-2">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-yellow-600">
                    ₱{(cartTotal + (cartTotal >= 1000 ? 0 : 100)).toFixed(2)}
                  </span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                disabled={isProcessing}
                className="w-full py-3 bg-yellow-500 hover:bg-yellow-600 disabled:bg-yellow-300 text-white rounded-md font-medium mt-4 flex items-center justify-center"
              >
                {isProcessing ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  "Proceed to Checkout"
                )}
              </button>

              <p className="text-xs text-gray-500 text-center mt-2">
                Secure checkout powered by PayMongo
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Continue Shopping Link */}
      {items.length > 0 && (
        <div className="mt-8 text-center">
          <a href="/" className="text-yellow-600 hover:underline font-medium">
            Continue Shopping
          </a>
        </div>
      )}
    </div>
  );
}
