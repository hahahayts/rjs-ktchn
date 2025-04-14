import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getAllOrders } from "@/data/orders";
import { Order } from "@prisma/client";

export const revalidate = 60; // Revalidate every 60s

export default async function AdminOrdersPage() {
  const orders: Order[] = await getAllOrders();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Orders</h1>
      </div>

      {/* Orders Table */}
      <div className="overflow-x-auto rounded-xl border shadow-sm bg-white">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="px-4 py-3">Order #</th>
              <th className="px-4 py-3">Customer</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Total</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order) => (
              <tr
                key={order.id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="px-4 py-3 font-mono">{order.orderNumber}</td>
                <td className="px-4 py-3">{order.user.name || "Unknown"}</td>
                <td className="px-4 py-3">
                  {/* <Badge
                    variant={
                      order.status === "COMPLETED"
                        ? "success"
                        : order.status === "CANCELLED"
                        ? "destructive"
                        : "default"
                    }
                  >
                    {order.status}
                  </Badge> */}
                  <div>{order.status}</div>
                </td>
                <td className="px-4 py-3">₱{order.total.toFixed(2)}</td>
                <td className="px-4 py-3">
                  {/* {format(new Date(order.createdAt), "MMM d, yyyy")} */}
                  Monday 2025
                </td>
                <td className="px-4 py-3 text-right">
                  <Link href={`/admin/orders/${order.id}`}>
                    <Button size="sm" variant="outline">
                      View
                    </Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {orders.length === 0 && (
          <div className="text-center text-gray-500 py-6">No orders found.</div>
        )}
      </div>
    </div>
  );
}
