import React from 'react'
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom'
import { ImgSkeleton } from './index';
const ProductItem = ({ img, title, price, id }) => {
    return (
        <div className=" cart-background card text-center border-0   m-2 col-12  " style={{ width: "18rem" }} id="cart">
            <ImgSkeleton img={img} title={title} style={`card-img card-img-top `} />
            <div className=" card-body d-flex row align-items-between  p-1 m-3 rounded-3  ">
                <Link to={`/details/${id}`} className="text-decoration-none text-dark">
                    <div className="card-title text-color">{title}</div>
                </Link>
                <div className=" fw-bold text-color">$  {price}</div>
            </div>
        </div>
    );
}
ProductItem.propType = {
    id: PropTypes.string,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
}
export default ProductItem


