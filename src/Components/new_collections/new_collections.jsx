import React from 'react'
import './new_collections.css'
import Item from '../item/item'
import new_collec_items from '../../assets/new_collections'

const new_collections = () => {
  return (
    <>
        <div className="new_collections">
            <h1>New Collections</h1>
            <hr />
            <div className="new_items">
                {
                    new_collec_items.map((item,i)=>{
                        return( <Item key={i} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} />)
                    })
                }
            </div>
        </div>
    </>
  )
}

export default new_collections