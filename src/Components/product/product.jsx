import React, { useContext } from 'react'
import './product.css'
import { categoryContext } from '../context_api/category_context'
import { useParams } from 'react-router-dom'
import arrow_icon from '../../assets/breadcrum_arrow.png'
import star_icon from '../../assets/star_icon.png'
import star_icon_dull from '../../assets/star_dull_icon.png'

const product = () => {
  const {all_product, add_cart_item, cart_Count, setcart_Count} = useContext(categoryContext)
  const { productId } = useParams()
  const product = all_product.find((e) => e.id === Number(productId))
  return (
    <>
      <div className="product">
        <div className="breadcum">
          Home <img src={arrow_icon} alt="" /> Shop <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
        </div>
        <div className="product_display">
          <div className="product_display_left">
            <div className="product_display_img_list">
              <ul>
                <li><img src={product.image} alt="" /></li>
                <li><img src={product.image} alt="" /></li>
                <li><img src={product.image} alt="" /></li>
                <li><img src={product.image} alt="" /></li>
              </ul>
            </div>
            <div className="product_display_img">
              <img src={product.image} alt="" />
            </div>
          </div>
          <div className="product_display_right">
            <h1>{product.name}</h1>
            <div className="product_rating">
              <ul>
                <li><img src={star_icon} alt="" /></li>
                <li><img src={star_icon} alt="" /></li>
                <li><img src={star_icon} alt="" /></li>
                <li><img src={star_icon} alt="" /></li>
                <li><img src={star_icon_dull} alt="" /></li>
              </ul>
            </div>
            <div className="product_price">
              <div className="old_price">
                {product.old_price} rs.
              </div>
              <div className="new_price">
                {product.new_price} rs.
              </div>
            </div>
            <div className="product_description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos amet tempore optio explicabo pariatur adipisci, ipsa laborum dolores tempora aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aperiam sapiente tempore provident reiciendis distinctio totam vitae, fugit, inventore magnam iste, sint sit cum excepturi!
            </div>
            <div className="product_size">
              <p>Select size</p>
              <ul>
                <li>S</li>
                <li>M</li>
                <li>L</li>
                <li>XL</li>
                <li>XXL</li>
              </ul>
            </div>
            <button onClick={()=>{add_cart_item(product.id)
              setcart_Count(cart_Count+1)
            }} className="add_cart">
              Add to Cart
            </button>
            <div className="product_category">
              <p>Category</p> : {product.category}
            </div>
          </div>
        </div>
        <div className="additional_info">
          <div className="info_head">
            <h3>Additional Informaton</h3>
          </div>
          <div className="info_contain">'
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt fuga, provident repellendus ipsam, sapiente, similique aliquid ut dolores saepe unde quae exercitationem rerum aperiam molestiae ea rem molestias hic quam non perferendis. Earum odio, neque magni obcaecati deserunt autem eos minima est repellat quis vitae suscipit temporibus exercitationem voluptas dolores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae qui vitae eum obcaecati ullam fugiat suscipit harum id blanditiis consequatur. Provident, accusantium quae quaerat quo voluptatem adipisci est beatae eaque cupiditate. Blanditiis enim perspiciatis dolor dignissimos consequatur inventore qui placeat.
          </div>
        </div>
      </div>
    </>
  )
}

export default product