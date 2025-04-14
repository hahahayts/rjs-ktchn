import { User } from "@prisma/client";
import { getAllUsers } from "@/data/user";
import { DeleteUser } from "./delete-user";

export const revalidate = 60; // seconds
export default async function AdminProductsPage() {
  const users: User[] | undefined = await getAllUsers();
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold">Users Management</h1>

        <div className="flex gap-2 w-full md:w-auto">
          {/* <Input placeholder="Search users..." /> */}
        </div>
      </div>

      {/* Product Table */}
      <div className="overflow-x-auto rounded-xl border shadow-sm bg-white">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Role</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <tr
                key={user.id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="px-4 py-3 font-medium">{user.name}</td>
                <td className="px-4 py-3">{user.email}</td>
                <td className="px-4 py-3">{user.role}</td>

                <td className="px-4 py-3 text-right space-x-2">
                  <DeleteUser id={user.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
