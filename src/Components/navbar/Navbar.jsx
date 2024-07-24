import React, { useContext, useState } from 'react'
import './Navbar.css'
// import { useParams } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import Cart_icon from '../../assets/cart_icon.png'
import { NavLink, useParams } from 'react-router-dom'
import { categoryContext } from '../context_api/category_context'

const Navbar = () => {
    // const params1 = useParams();
    // console.log(String(params1))
    const [menu, setMenu] = useState('shop');
    const {cart_Count} = useContext(categoryContext)
    return (
        <div className='navbar'>
            <div className="nav_logo">
                <img src={Logo} alt='' />
                <p>Shopper</p>
            </div>
            <div className="nav_menu">
                <ul>
                    <NavLink onClick={() => { setMenu("shop") }} className='nav_list' to='/'><li>Shop {menu === "shop" ? <hr /> : <></>}</li></NavLink>
                    <NavLink onClick={() => { setMenu("men") }} className='nav_list' to='/men'><li >Men {menu === "men" ? <hr /> : <></>}</li></NavLink>
                    <NavLink onClick={() => { setMenu("women") }} className='nav_list' to='/women'><li >Women {menu === "women" ? <hr /> : <></>}</li></NavLink>
                    <NavLink onClick={() => { setMenu("kids") }} className='nav_list' to='/kids'><li >Kids {menu === "kids" ? <hr /> : <></>}</li></NavLink>
                </ul>
            </div>
            <div className="login_menu">
                <NavLink to='/login_signup'><button>Login</button></NavLink>
                <NavLink to='/cart'>
                    <img src={Cart_icon} alt="" width="34px" />
                </NavLink>
                <NavLink to='/cart'>
                    <div className="nav_cart_count">
                        {cart_Count}
                    </div>
                </NavLink>
            </div>

        </div>
    )
}

export default Navbar