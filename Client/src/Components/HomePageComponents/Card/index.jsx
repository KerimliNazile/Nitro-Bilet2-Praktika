import React, { useContext } from 'react'
import './index.scss'
import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { WishlistContext } from '../../../context/WishlistContext';
const Card = ({id,image,title,category,product}) => {
const {addWish}=useContext(WishlistContext)
console.log(id);

  return (
    <>
      <div className="Card">
        <div className="CardIcon">
       <div onClick={()=>addWish(product)}> <FaHeart className='FaHeart' /></div>
       <div><Link to={`/${id}`}><FaEye className='FaEye' /></Link></div>
        </div>
        <div className="image">
            <i className={image}></i>
        </div>
        <div className="content">
            <h1>{title}</h1>
            <p>{category}</p>
        </div>
      </div>
    </>
  )
}

export default Card
