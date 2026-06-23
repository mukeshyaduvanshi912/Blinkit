import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import products from '../Data/products.js';
import useCart from '../hooks/useCart';

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart, getProductQuantity } = useCart();
  const product = products.find((item) => item.id === Number(id));
  const cartQuantity = product ? getProductQuantity(product.id) : 0;
  const [localQty, setLocalQty] = useState(0);

  if (!product) {
    return (
      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-md bg-white p-8 text-center shadow-sm">
          <h1 className="text-3xl font-bold text-gray-900">Product not found</h1>
          <p className="mt-3 text-gray-600">The product you are looking for is not available.</p>
          <Link to="/" className="mt-6 inline-block rounded-md bg-gray-900 px-6 py-3 font-semibold text-white transition hover:bg-gray-700">
            Back to Home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gray-50 px-6 py-14">
      <div className="mx-auto max-w-6xl">
        <Link to="/" className="mb-6 inline-block text-sm font-semibold text-green-700 transition hover:text-green-900">
          Back to Products
        </Link>

        <div className="grid gap-10 rounded-md bg-white p-6 shadow-sm md:grid-cols-2 md:p-8">
          <div className="overflow-hidden rounded-md bg-gray-100">
            <img className="h-full min-h-80 w-full object-cover" src={product.image} alt={product.name} />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-green-700">{product.category}</p>
            <h1 className="mt-3 text-4xl font-bold text-gray-900">{product.name}</h1>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <span className="rounded-md bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">{product.quantity}</span>
              <span className="rounded-md bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700">{product.rating} Rating</span>
            </div>

            <p className="mt-6 text-3xl font-bold text-gray-900">Rs. {product.amount}</p>
            <p className="mt-5 text-base leading-7 text-gray-600">{product.details}</p>

            <div className="mt-5">
              {cartQuantity > 0 && (
                <p className="mt-2 rounded-md bg-gray-100 px-4 py-3 text-sm font-semibold text-gray-800">
                  In cart: {cartQuantity}
                </p>
              )}

              <div className="mt-6 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setLocalQty((q) => Math.max(0, q - 1))}
                  className="px-4 py-2 rounded-md border"
                >
                  -
                </button>

                <span className="min-w-12 text-center">{localQty}</span>

                <button
                  type="button"
                  onClick={() => setLocalQty((q) => q + 1)}
                  className="px-4 py-2 rounded-md border"
                >
                  +
                </button>

                <button
                  className="rounded-md bg-gray-900 px-6 py-3 font-semibold text-white transition hover:bg-gray-700"
                  type="button"
                  onClick={() => {
                    if (localQty > 0) {
                      addToCart(product, localQty);
                      setLocalQty(0);
                    }
                  }}
                >
                  Add to Cart
                </button>

                <button className="rounded-md border border-gray-300 px-6 py-3 font-semibold text-gray-900 transition hover:bg-gray-100">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}