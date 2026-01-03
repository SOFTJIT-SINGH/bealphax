// app/api/orders/route.ts
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // Get the data from the checkout page
    const { items, totalPrice, address, userEmail } = await req.json();

    // Create the main order
    const order = await prisma.order.create({
      data: {
        totalPrice: totalPrice,
        status: "pending",
        address: address,
        userEmail: userEmail,
      },
    });

    // For each item in the cart, create a corresponding OrderItem
    const orderItems = items.map((item: any) => ({
      orderId: order.id,
      productId: item.id,
      quantity: item.quantity,
      price: item.price,
    }));

    // Save all the order items to the database
    await prisma.orderItem.createMany({
      data: orderItems,
    });

    return NextResponse.json({ message: "Order created successfully", orderId: order.id }, { status: 201 });

  } catch (err) {
    console.error("Error creating order:", err);
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
}

// Add GET method to fetch orders
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const userEmail = searchParams.get('userEmail');
    
    let whereClause = {};
    if (userEmail) {
      whereClause = { userEmail };
    }
    
    const orders = await prisma.order.findMany({
      where: whereClause,
      include: {
        // FIXED: Changed 'orderItems' to 'items' to match your schema
        items: { 
          include: {
            product: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });
    
    return NextResponse.json(orders, { status: 200 });
  } catch (err) {
    console.error("Error fetching orders:", err);
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
}