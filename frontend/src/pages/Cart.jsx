import { Link } from "react-router-dom";
import useCart from "../hooks/useCart";

export default function Cart() {

  const {
    cart,
    loading,
    addToCart,
    decreaseQuantity,
    removeItem,
    clearCart
  } = useCart();


  const items = cart || [];


  const totalAmount = items.reduce(
    (sum, item) =>
      sum + Number(item.price || item.amount) * item.quantity,
    0
  );


  const totalItems = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );



  return (

    <div className="page-section" style={{maxWidth:"1000px"}}>


      <div style={{
        display:"flex",
        justifyContent:"space-between",
        marginBottom:"20px"
      }}>


        <h1>
          Your Cart
        </h1>


        <Link to="/">
          Continue Shopping
        </Link>


      </div>




      {loading ? (

        <h2>
          Loading cart...
        </h2>


      ) : items.length === 0 ? (

        <div>

          <h2>
            Your cart is empty
          </h2>


          <Link to="/">
            Shop now
          </Link>


        </div>


      ) : (


      <>


      <button
        onClick={clearCart}
      >
        Clear Cart
      </button>



      {items.map((item)=>(


        <div
          key={item.id}
          className="cart-item-grid"
        >


          {/* IMAGE FROM DATABASE URL */}

          <img

            src={item.image}

            alt={item.name}

            style={{
              width:"120px",
              height:"120px",
              objectFit:"cover",
              borderRadius:"12px"
            }}

          />




          <div>


            <h2>
              {item.name}
            </h2>


            <p>
              Quantity: {item.quantity}
            </p>


            <p>
              ₹{item.price || item.amount} each
            </p>


          </div>





          <div>


            <button

              onClick={()=>decreaseQuantity(item)}

            >
              -
            </button>



            <span style={{margin:"0 10px"}}>

              {item.quantity}

            </span>



            <button

              onClick={()=>
                addToCart({
                  id:item.productId
                })
              }

            >
              +
            </button>





            <br/>


            <button

              onClick={()=>removeItem(item.id)}

            >

              Remove

            </button>




            <h3>

              ₹
              {(item.price || item.amount) *
              item.quantity}

            </h3>


          </div>



        </div>


      ))}





      <h2>

        Total: ₹{totalAmount}

      </h2>




      <button>

        Checkout

      </button>



      </>


      )}


    </div>

  );

}