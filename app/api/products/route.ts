// // app/api/products/route.ts
// import { NextRequest, NextResponse } from "next/server";
// import { prisma } from "@/lib/db/prisma";

// export async function GET(req: NextRequest) {
//   try {
//     const products = await prisma.product.findMany();
//     return NextResponse.json(products);
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
//   }
// }

import { prisma } from "@/lib/db/prisma";
import { NextResponse } from "next/server";

// GET all products
export async function GET() {
  try {
    const products = await prisma.product.findMany();
    return NextResponse.json(products); // ✅ send the products back
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}

// POST a new product
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const product = await prisma.product.create({
      data: {
        name: body.name,
        description: body.description,
        price: body.price,
        imageUrl: body.imageUrl,
        inStock: true,
      },
    });

    return NextResponse.json(product);
    
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to create product" }, { status: 500 });
  }
}
