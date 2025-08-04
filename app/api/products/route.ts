// app/api/products/route.ts

import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

// This is the function we are adding back in
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

// This is the function you just fixed! It stays the same.
export async function POST(req: Request) {
  try {
    const body = await req.formData();
    const title = body.get("title") as string;
    const desc = body.get("desc") as string;
    const price = parseFloat(body.get("price") as string);
    const img = body.get("img") as string;

    const product = await prisma.product.create({
      data: {
        title: title,
        desc: desc,
        price: price,
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