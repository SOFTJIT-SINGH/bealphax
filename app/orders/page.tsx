'use client'

import { useParams } from 'next/navigation';
import React from 'react';

const OrderConfirmationPage = () => {
  // Get the order ID from the URL
  const { id } = useParams();

  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-10rem)] gap-8 p-4 text-center">
      <h1 className="text-4xl font-bold text-green-600">Thank You!</h1>
      <p className="text-xl">Your order has been placed successfully.</p>
      <p className="text-lg">
        Your Order ID is: <span className="font-semibold text-red-500">{id}</span>
      </p>
      <p className="text-gray-600">You will receive a confirmation email shortly.</p>
    </div>
  );
};

export default OrderConfirmationPage;