import React from 'react'
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom'
import ImgSkeleton from './ImgSkeleton';
const ProductItem = ({ img, title, price, id }) => {
    return (
        <div className=" card text-center border-0   m-2 col-12 " style={{ width: "18rem" }} id="cart">
            <ImgSkeleton img={img} title={title}/>
            <div className=" card-body ">
                <Link to={`/details/${id}`} className="text-decoration-none text-dark">
                    <h5 className="card-title ">{title}</h5>
                </Link>
                <div className=" fw-bold">$  {price}</div>
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


