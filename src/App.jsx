import './App.css'
import Navbar from './Components/navbar/Navbar.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Shop from './Components/shop/shop'
import Shop_category from './Components/category_pages/shop_category.jsx'
import Footer from './Components/footer/footer.jsx'
import { categoryContext } from './Components/context_api/category_context.js'
import all_product from './assets/all_product.js'
import men_banner from './assets/banner_mens.png'
import kid_banner from './assets/banner_kids.png'
import women_banner from './assets/banner_women.png'
import Login_signup from './Components/login_signup/login_signup.jsx'
import Product from './Components/product/product.jsx'
import { useState } from 'react'
import Cart from './Components/cart/cart.jsx'

function App() {

  const getDefault_cart = () => {
    let cart = {}
    for (let i = 0; i < all_product.length; i++) {
      cart[i] = 0
    }
    return cart
  }

  const [cartItems, setcartItems] = useState(getDefault_cart)
  const [cart_Count, setcart_Count] = useState(0)

  const add_cart_item = (itemId) => {
    setcartItems((prev) => ({
      ...prev, [itemId]: prev[itemId] + 1
    }))
  }
  const remove_cart_item = (itemId) => {
    setcartItems((prev) => ({
      ...prev, [itemId]: prev[itemId] - 1
    }))
  }
  // console.log(cart_Count);
  const router1 = createBrowserRouter([
    {
      path: '/',
      element: <><Navbar /><Shop /></>
    },
    {
      path: '/men',
      element: <><Navbar /><Shop_category category='men' banner={men_banner} /></>
    },
    {
      path: '/women',
      element: <><Navbar /><Shop_category category='women' banner={women_banner} /></>
    },
    {
      path: '/kids',
      element: <><Navbar /><Shop_category category='kid' banner={kid_banner} /></>
    },
    {
      path: '/login_signup',
      element: <><Navbar /><Login_signup /></>
    },
    {
      path: '/cart',
      element: <><Navbar /><Cart /></>
    },
    {
      path: '/product',
      element: <><Navbar /><Product /></>,
      children: [
        {
          path: ':productId',
          element: <><Navbar /><Product /></>
        }
      ]
    }

  ])

  return (
    <>
      <categoryContext.Provider value={{ all_product, cartItems, add_cart_item, remove_cart_item, getDefault_cart, cart_Count, setcart_Count }}>
        <RouterProvider router={router1} />
        <Footer />
      </categoryContext.Provider>
    </>
  )
}

export default App
