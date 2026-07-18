import { Link } from 'react-router-dom';
import useCart from '../hooks/useCart';

export default function Cart() {
  const { cart, loading, addToCart, decreaseQuantity, removeItem, clearCart } = useCart();
  const items = cart || [];
  const totalAmount = items.reduce((sum, item) => sum + item.amount * item.quantity, 0);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="page-section" style={{ maxWidth: '1000px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div>
          <h1 style={{ fontSize: '2rem', margin: 0 }}>Your Cart</h1>
          <p style={{ margin: '8px 0 0', color: '#555' }}>Review items before checkout.</p>
        </div>
        <Link to='/' style={{ textDecoration: 'none', color: '#0070f3' }}>
          Continue Shopping
        </Link>
      </div>

      {loading ? (
        <div style={{ padding: '26px', textAlign: 'center', border: '1px solid #e5e7eb', borderRadius: '12px' }}>
          <h2 style={{ marginBottom: '12px' }}>Loading cart...</h2>
        </div>
      ) : items.length === 0 ? (
        <div style={{ padding: '26px', textAlign: 'center', border: '1px solid #e5e7eb', borderRadius: '12px' }}>
          <h2 style={{ marginBottom: '12px' }}>Your cart is empty</h2>
          <p style={{ marginBottom: '18px', color: '#6b7280' }}>Add some products to your cart to see them here.</p>
          <Link
            to='/'
            style={{
              background: '#111827',
              color: '#fff',
              padding: '12px 22px',
              borderRadius: '8px',
              textDecoration: 'none',
            }}
          >
            Shop now
          </Link>
        </div>
      ) : (
        <>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <p style={{ margin: 0, color: '#6b7280' }}>Total items</p>
              <h2 style={{ margin: '6px 0 0' }}>{totalItems}</h2>
            </div>
            <button
              type='button'
              onClick={clearCart}
              style={{
                background: '#dc2626',
                color: '#fff',
                border: 'none',
                padding: '12px 18px',
                borderRadius: '10px',
                cursor: 'pointer',
              }}
            >
              Clear Cart
            </button>
          </div>

          <div style={{ display: 'grid', gap: '24px' }}>
            {items.map((item) => (
              <div
                key={item.id}
                className="cart-item-grid"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: '120px', height: '120px', objectFit: 'cover', borderRadius: '12px' }}
                />

                <div>
                  <h2 style={{ margin: '0 0 8px' }}>{item.name}</h2>
                  <p style={{ margin: '0 0 8px', color: '#6b7280' }}>{item.quantity} pcs</p>
                  <p style={{ margin: 0, fontWeight: 600 }}>₹{item.amount} each</p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', justifyContent: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <button
                      onClick={() => decreaseQuantity(item)}
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '8px',
                        border: '1px solid #d1d5db',
                        background: '#fff',
                        cursor: 'pointer',
                        fontSize: '18px',
                      }}
                    >
                      -
                    </button>
                    <span style={{ minWidth: '32px', textAlign: 'center', fontWeight: 600 }}>{item.quantity}</span>
                    <button
                      onClick={() => addToCart({ id: item.productId })}
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '8px',
                        border: '1px solid #d1d5db',
                        background: '#fff',
                        cursor: 'pointer',
                        fontSize: '18px',
                      }}
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    style={{
                      background: '#f87171',
                      color: '#fff',
                      border: 'none',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                    }}
                  >
                    Remove item
                  </button>
                  <strong style={{ fontSize: '1rem', textAlign: 'right' }}>₹{item.amount * item.quantity}</strong>
                </div>
              </div>
            ))}

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '22px',
                border: '1px solid #e5e7eb',
                borderRadius: '14px',
                background: '#f9fafb',
              }}
            >
              <div>
                <p style={{ margin: 0, color: '#6b7280' }}>Total</p>
                <h2 style={{ margin: '6px 0 0' }}>₹{totalAmount}</h2>
              </div>
              <button
                style={{
                  background: '#111827',
                  color: '#fff',
                  border: 'none',
                  padding: '14px 24px',
                  borderRadius: '10px',
                  cursor: 'pointer',
                }}
              >
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

