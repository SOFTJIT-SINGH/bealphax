import prisma from "@/lib/prisma";
import { useCartStore } from "@/store/cartStore";
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