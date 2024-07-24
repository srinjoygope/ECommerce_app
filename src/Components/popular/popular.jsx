import React from 'react'
import './popular.css'
import data_product from '../../assets/data'
import Item from '../item/item'

const popular = () => {
    return (
        <div className="popular">
            <h1>Popular in women</h1>
            <hr />
            <div className="popular_item">
                {
                    data_product.map((item,i)=>{
                        return (<Item key={i} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price} />)
                    })
                }
            </div>
        </div>
    )
}

export default popular