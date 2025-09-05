// app/api/products/route.ts
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

// GET all products
export async function GET() {
  try {
    const products = await prisma.product.findMany();
    return NextResponse.json(products, { status: 200 });
  } catch (err) {
    console.error("Error in GET /api/products:", err);
    return NextResponse.json(
      { message: "Something went wrong fetching products!" },
      { status: 500 }
    );
  }
}

// CREATE a new product
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, desc, price, img } = body;

    const product = await prisma.product.create({
      data: {
        title,
        desc,
        price: parseFloat(price),
        img,
      },
    });

    return NextResponse.json(product, { status: 201 });
  } catch (err) {
    console.error("Error in POST /api/products:", err);
    return NextResponse.json(
      { message: "Something went wrong during product creation!" },
      { status: 500 }
    );
  }
}