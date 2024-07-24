import React, { useContext } from 'react'
import './cart.css'
import { categoryContext } from '../context_api/category_context'
import cross from '../../assets/cart_cross_icon.png'

const cart = () => {
    const { all_product, cartItems,add_cart_item, remove_cart_item, cart_Count, setcart_Count } = useContext(categoryContext)
    const remove_item = (id)=>{
        all_product[id]=0
    }
    if (cart_Count > 0) {
        return (
            <>
                <div className="cart">
                    <div className="cart_head">
                        <ul>
                            <li>Product</li>
                            <li>Title</li>
                            <li>Price</li>
                            <li>Quantity</li>
                            <li>Total</li>
                            {/* <li>Remove</li> */}
                        </ul>
                    </div>
                    <hr />
                    {

                        all_product.map((item) => {
                            if (cartItems[item.id] > 0) {

                                return (
                                    <>
                                        <div className="cart_items">
                                            <ul>
                                                <li><img src={item.image} alt="" /></li>
                                                <li>{item.name}</li>
                                                <li>{item.new_price}</li>
                                                <li>
                                                    <button onClick={() => {
                                                    remove_cart_item(item.id)
                                                    setcart_Count(cart_Count - 1)
                                                }} className="minus_plus">-</button>
                                                        {cartItems[item.id]}
                                                    <button onClick={() => {
                                                    add_cart_item(item.id)
                                                    setcart_Count(cart_Count + 1)
                                                }} className="minus_plus">+</button>
                                                </li>
                                                <li>{item.new_price * cartItems[item.id]}</li>
                                                
                                            </ul>
                                            <hr />
                                        </div>
                                    </>
                                )

                            }
                        })

                    }

                </div>
            </>
        )
    }
    else {
        return (
            <>
                <div className="empty_cart">
                    <h1>Oops yout cart is empty !!</h1>
                </div>
            </>
        )
    }

}

export default cart