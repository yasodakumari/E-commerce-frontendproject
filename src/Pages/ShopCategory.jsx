import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import  { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext)
  return (
    <div className='shop-category'>
      <div  className='shopcategory-banner' >
        <div className='shopcategory-banner-left'>
      <h1>FLAT 50% OFF</h1>
      <h4>12 Hours 20 Mins</h4>
      <button>Explore now</button>
      </div>
      <img  src={props.banner}  alt=""   />
     </div>
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span>out of 68 products
        </p>
        <div className="shopcategory-sort">
               Sort by <img src={dropdown_icon}  alt="" />
        </div>

      </div>
      <div className="shopcategory-products">
        {all_product.map((item,i)=>{
          if (props.category===item.category){
              return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          else{
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
           Explore More
      </div>
   
    </div>
  )
}

export default ShopCategory
