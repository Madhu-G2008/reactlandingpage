import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import './Cart.css';
import { FaShoppingCart } from "react-icons/fa";

function Cart() {
  const location = useLocation();
  const navigate = useNavigate();

  const [cart, setCart] = useState([]);


  const [step, setStep] = useState("cart"); 
  const [paymentMethod, setPaymentMethod] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  
  const deleteItem = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  },[]);

  return (
    <div className="cart-page">

      
      <button className="back-btn" onClick={() => navigate("/home")}>
        ⬅ Back
      </button>

      <h2 className="cart-title">Your Cart <FaShoppingCart /></h2>

     
      {cart.length === 0 && step === "cart" && (
        <p className="empty-text">No items in cart</p>
      )}

      
      {step === "cart" && cart.length > 0 && (
        <>
          <div className="cart-container">
            {cart.map((item, index) => (
              <div key={index} className="cart-item">

                <img src={item.image} alt={item.name} />

                <div className="cart-details">
                  <h3>{item.name}</h3>
                  <p>₹{item.price} / {item.unit}</p>
                </div>

                <div className="cart-buttons">
                  <button className="delete-btn" onClick={() => deleteItem(index)}>
                    Delete
                  </button>
                </div>

              </div>
            ))}
          </div>

         
          <div className="cart-summary">
            <h3 className="summary-title">Selected Items</h3>

            <ul className="summary-list">
              {cart.map((item, index) => (
                <li key={index}>
                  {item.name} - ₹{item.price}
                </li>
              ))}
            </ul>

            <h3 className="total-price">
              Total: ₹{cart.reduce((total, item) => total + item.price,0)}
            </h3>

            <button className="confirm-btn" onClick={() => setStep("payment-method")}>
              Confirm Payment
            </button>
          </div>
        </>
      )}

      
      {step === "payment-method" && (
        <div className="payment-box">
          <h3>Select Payment Method</h3>

          <button onClick={() => { setPaymentMethod("gpay"); setStep("pin"); }}>
            GPay
          </button>

          <button onClick={() => { setPaymentMethod("card"); setStep("pin"); }}>
            Card
          </button>

          <button onClick={() => { setPaymentMethod("cash"); setStep("confirm-cash"); }}>
            Cash on Delivery
          </button>
        </div>
      )}

      
      {step === "pin" && (
        <div className="payment-box">
          <h3>{paymentMethod === "gpay" ? "Enter UPI PIN" : "Enter Card PIN"}</h3>

          <input type="password" className="pin-input" placeholder="****" />

          <button 
            onClick={() => {
              setIsProcessing(true);
              setTimeout(() => {
                setIsProcessing(false);
                setStep("success");
              }, 3000);
            }}
          >
            Pay Now
          </button>
        </div>
      )}

     
      {step === "confirm-cash" && (
        <div className="payment-box">
          <h3>Confirm Cash on Delivery?</h3>

          <button 
            onClick={() => {
              setIsProcessing(true);
              setTimeout(() => {
                setIsProcessing(false);
                setStep("success");
              }, 3000);
            }}
          >
            Yes, Place Order
          </button>
        </div>
      )}

      
      {isProcessing && (
        <div className="processing-box">
          <div className="loader"></div>
          <p>Processing your payment...</p>
        </div>
      )}

      
      {step === "success" && (
        <div className="success-box">
          <h2>🎉 Order Confirmed!</h2>
        </div>
      )}

    </div>
  );
}

export default Cart; 