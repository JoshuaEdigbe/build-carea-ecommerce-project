import  React from 'react';
import "./checkout.scss";
import Button from "../../components/Button/Button";
import Format from '../../components/Format/Format'; 
import  {chevronRight, productItem1, productItem2, productItem3} from '../../constants';


const Checkout = () =>{
   const editCart = () => {
    return console.log('button edited')
   }
    return (
      <Format>
           <div id='checkout'>
       <div className="checkout_breadcrumb-cont">
          <div className="checkout_breadcrumb">
             <h3>Checkout</h3>
             <div className="checkout_links">
                <a href="#">Ecommerce</a>
                <img src={chevronRight} alt="" />
                <a href="#">Checkout</a>
             </div>
         </div>
         <div className="checkout_hero">
             <div className="checkout-hero-wrapper">
                 <div className="checkout-shipping-add">
                  <h4>shipping adress</h4>

                   <form className='auth-checkout'>
                      <div className='item'>
                      <label htmlFor="street-addess">Street Address</label>
                      <input type="text" name='street-address' />
                      </div>

                      <div className='item2'>
                         <div>
                          <label htmlFor="city">City</label>
                          <input type="text" name='city'/>
                         </div>

                         
                         <div>
                          <label htmlFor="state">State</label>
                          <input type="text" name='state' />
                        </div>
                      </div>

                       

                        <div className='item3'>
                          <div>
                            <label htmlFor="zip code">Zip Code</label>
                            <input type="text" name='zip code'/>
                          </div>

                          <div>
                           <label htmlFor="country">Country</label>
                           <input type="Email" name='email' />
                         </div>
                       </div>

                      

                      <div className='item4'>
                         <div>
                           <label htmlFor="Email">Email</label>
                           <input type="Email" name='email' />
                         </div>

                          
                      <div>
                       <label htmlFor="Full name">Full Name</label>
                       <input type="text" name='full name' />
                      </div>
                      </div>
                   </form>
                      
                 </div>

                 <div className="checkout_order-detail">
                  <div className="order-detail-wrapper">
                      <h3>Your Order</h3>

                      <div className="product-item-wrapper">
                        <div className="product-item-img">
                           <img src={productItem1} alt="" />
                           <img src={productItem2} alt="" />
                           <img src={productItem3} alt="" />
                        </div>

                        <div className='product-item-btn'>
                          <Button
                            onClick={editCart}
                            label="Edit Cart"
                            className="edit-cart_btn"
                           />
                        </div>
                      </div>
                  </div>

                   <div className="order-price-wrapper">
                       <div>
                        <p>Subtotal: </p>
                        <span>$75.00</span>
                       </div>
                       <div>
                        <p>Shipping: </p>
                        <span>Free</span>
                       </div>
                       <div>
                        <p>Tax: </p>
                        <span>$3.00</span>
                       </div>
                       <hr />
                       <div>
                        <h5>Total</h5>
                        <span>$78.00</span>
                       </div>

                      <div className='order-now-btn'>
                      <Button
                            onClick={editCart}
                            label="Order Now"
                            className="order-btn"
                           />
                      </div>
                       
                   </div>
                 </div>
             </div>
         </div>

        </div>
     </div>
      </Format>
   
    );
};


export default Checkout;