import React, { useContext } from 'react'
import { categoryContext } from '../context_api/category_context'
import './shop_category.css'
import dropdown from '../../assets/dropdown_icon.png'
import Item from '../item/item'

const shop_category = (props) => {
  const {all_product} = useContext(categoryContext)

  return (
    <>
      <div className="shop_category">
        <div className="banner">
          <img src={props.banner} alt="" />

        </div>
        <div className="shop_category_sort_index">
          <p>Showing 1-12 out of 36 products</p>
          <div className="shop_category_sort">
            Sort by
            <img src={dropdown} alt="" />
          </div>
        </div>
        <div className="category_items">
          {
            all_product.map((item, i) => {
              if (props.category === item.category) {
                return (<Item key={i} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} />)
              }
              else {
                return (null)
              }
            })
          }
        </div>
      </div>
    </>
  )
}

export default shop_category