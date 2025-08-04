import prisma from "@/lib/prisma";
import Link from "next/link";
import Image from "next/image";

const AdminProductsPage = async () => {
  const products = await prisma.product.findMany();

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Manage Products</h1>
        <Link href="/add-product" className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">
          + Add New Product
        </Link>
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Image</th>
              <th className="p-3 text-left">Title</th>
              <th className="p-3 text-left">Price</th>
              <th className="p-3 text-left">Created At</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b">
                <td className="p-3">
                  <div className="relative w-16 h-16">
                    {product.img ? (
                      <Image src={product.img} alt={product.title} layout="fill" objectFit="cover" className="rounded-md" />
                    ) : (
                      <div className="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center text-xs text-gray-500">No Img</div>
                    )}
                  </div>
                </td>
                <td className="p-3 font-medium">{product.title}</td>
                <td className="p-3">${product.price.toFixed(2)}</td>
                <td className="p-3 text-gray-600">{new Date(product.createdAt).toLocaleDateString()}</td>
                <td className="p-3 text-center">
                  <div className="flex justify-center gap-2">
                    <button className="text-blue-500 hover:text-blue-700">Edit</button>
                    <button className="text-red-500 hover:text-red-700">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProductsPage;