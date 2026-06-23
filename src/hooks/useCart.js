import { useEffect, useState } from 'react';

const CART_API = '/api/cart';
const CUSTOMER_ID = 1;

function normalizeItem(item) {
  return {
    id: item.id,
    productId: item.productId ?? item.product_id,
    name: item.name,
    amount: item.price ?? item.amount,
    image: item.image ?? item.imageUrl,
    category: item.category,
    quantity: Number(item.quantity),
  };
}

export default function useCart() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadCart = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${CART_API}?customerId=${CUSTOMER_ID}`);
      const data = await response.json();
      if (response.ok && data.success) {
        setCart(data.items.map(normalizeItem));
      } else {
        setCart([]);
      }
    } catch (error) {
      console.error('Cart load failed', error);
      setCart([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    async function initCart() {
      await loadCart();
    }
    initCart();
  }, []);

  const addToCart = async (product, quantity = 1) => {
    const productId = product.productId ?? product.id;
    if (!productId) return;
    const qty = Number(quantity) || 1;
    if (qty <= 0) return;

    try {
      const res = await fetch(CART_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customerId: CUSTOMER_ID,
          productId,
          quantity: qty,
        }),
      });

      const data = await res.json().catch(() => null);
      if (!res.ok) {
        console.error('Add to cart failed', res.status, data);
        return false;
      }

      await loadCart();
      return true;
    } catch (err) {
      console.error('Add to cart network error', err);
      return false;
    }
  };

  const decreaseQuantity = async (item) => {
    if (!item?.id) return;
    const nextQuantity = item.quantity - 1;
    if (nextQuantity <= 0) {
      await removeItem(item.id);
      return;
    }

    await fetch(`${CART_API}/${item.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ quantity: nextQuantity }),
    });

    await loadCart();
  };

  const removeItem = async (itemId) => {
    if (!itemId) return;
    await fetch(`${CART_API}/${itemId}`, { method: 'DELETE' });
    await loadCart();
  };

  const clearCart = async () => {
    await fetch(`${CART_API}?customerId=${CUSTOMER_ID}`, { method: 'DELETE' });
    await loadCart();
  };

  const getProductQuantity = (productId) => {
    const item = cart.find((cartItem) => cartItem.productId === productId);
    return item?.quantity || 0;
  };

  return {
    cart,
    loading,
    addToCart,
    decreaseQuantity,
    removeItem,
    clearCart,
    getProductQuantity,
  };
}
