import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma";

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id);


  console.log(`Attempting to delete product with id: ${id}`); // Debug log

  try {
    // Make sure the product exists before attempting deletion
    const product = await prisma.product.findUnique({ where: { id } });
    if (!product) {
      console.log(`Product not found with id: ${id}`); // Debug log
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    await prisma.product.delete({
      where: { id },
    });

    console.log(`Product with id: ${id} deleted successfully`); // Debug log
    return NextResponse.json({ message: "Product deleted successfully" });
  } catch (err) {
    console.error("Error deleting product:", err); // Debug log
    return NextResponse.json({ error: "Failed to delete product" }, { status: 500 });
  }
}
