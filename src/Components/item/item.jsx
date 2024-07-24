import React from 'react'
import './item.css'
import { NavLink } from 'react-router-dom'

const item = (props) => {
    return (
        <NavLink className='item_link' to={`/product/${props.id}`}>
            <div className="item">
                <img src={props.image} alt="" />
                <p>{props.name}</p>
                <div className="item_prices">
                    <div className="price_new">
                        {props.new_price} rs.
                    </div>
                    <div className="old_price">
                        {props.old_price} rs.
                    </div>
                </div>
            </div>
        </NavLink>
    )
}

export default item