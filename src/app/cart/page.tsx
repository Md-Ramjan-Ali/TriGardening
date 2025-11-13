"use client";
import Image from "next/image";
import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const totalPrice = cart.reduce((acc, item) => {
    const price = parseFloat(item.priceRange);
    return acc + price * item.quantity;
  }, 0);

  if (cart.length === 0) {
    return <div className="text-center py-20">
      <h2 className="text-2xl font-semibold mb-3 text-gray-700">
        🛒 Your cart is empty
      </h2>
      <p
        className="text-gray-500"
      >
        Add to Product cart.
      </p>
    </div>
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-green-900">Your Shopping Cart</h1>

      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-white shadow-md rounded-lg p-4"
          >
            <div className="flex items-center gap-4">
              <Image
                src={item.image}
                alt={item.name}
                width={80}
                height={80}
                className="rounded-md object-cover"
              />
              <div>
                <h3 className="font-semibold text-green-900">{item.name}</h3>
                <p className="text-gray-500 text-sm">{item.type}</p>
                <p className="text-orange-600 font-semibold">
                  ৳ {item.priceRange} × {item.quantity}
                </p>
              </div>
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-600 font-semibold hover:text-red-800"
            >
              ✖ Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 border-t pt-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold text-green-900">
          Total: ৳ {totalPrice.toFixed(2)}
        </h2>

        <div className="flex gap-4">
          <button
            onClick={clearCart}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
          >
            Clear Cart
          </button>
          <button className="bg-green-900 text-white px-5 py-2 rounded-lg hover:bg-green-800">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
