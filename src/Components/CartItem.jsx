import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthState } from '../Contexts/AuthContext'
import { dbUserCartId, dbUserTotal, dbUserTotalId } from '../Data/data'
import './../Assets/Styles/Cart.css'
import { ImgSkeleton } from './'

const CartItem = ({ img, title, price, id, count, url }) => {
    const { userEmail } = useAuthState()
    const [cartItemCount, setCartItemCount] = React.useState(count)
    const [totalPrice, setTotalPrice] = React.useState()
    const [totalPriceId, setTotalPriceId] = React.useState()

    React.useEffect(() => {
        dbUserCartId(userEmail, id).onSnapshot(snapshot => {
            if (snapshot.data() !== undefined) setCartItemCount(snapshot.data().count)
        })
    }, [id, userEmail])

    const cartItemInc = () => {
        dbUserCartId(userEmail, id).update({
            count: cartItemCount + 1
        }, { merge: true })
        dbUserTotalId(userEmail, totalPriceId).update({
            total: totalPrice + price
        }, { merge: true })
    }
    const cartItemDec = () => {
        dbUserCartId(userEmail, id).update({
            count: cartItemCount - 1
        }, { merge: true })
        dbUserTotalId(userEmail, totalPriceId).update({
            total: totalPrice - price
        }, { merge: true })
    }

    const deleteCartItem = () => {
        setCartItemCount(0)
        dbUserCartId(userEmail, id).delete()
        dbUserTotalId(userEmail, totalPriceId).update({ total: totalPrice - price })
    }

    React.useEffect(() => {
        if (userEmail) {
            dbUserTotal(userEmail).onSnapshot(snapshot => {
                setTotalPrice(snapshot.docs[0].data().total)
                setTotalPriceId(snapshot.docs[0].id)
            })
        }
    })
    //recycle bin icon svg code in darkmode
    return (
        <div className="container cart-background text-color mb-2 rounded-3">
            <div className="inCart-container d-flex  ">
                <div className=" col-2 d-flex align-items-center ">
                    <ImgSkeleton className="col-11 p-2" style={`skeleton-img-cart card-img-cart card-img`} img={img} />
                </div>
                <div className="col-10 d-flex align-items-center justify-content-between text-center">
                    <div className=" col-4  inCart-title">
                        <Link to={`/details/${url}`} className="text-decoration-none  fw-bold text-color">
                            <span>{title}</span>
                        </Link>
                    </div>
                    <div className="col-3 ">
                        <span className='fw-bold '>{price}</span> $
                    </div>

                    <div className="cart-button-container   col-3  justify-content-center ">
                        {cartItemCount === 1 ?
                            <button className="pqt-del comp-container" onClick={deleteCartItem}>
                                <svg className='' width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
                                    <path d="M0 0h24v24H0z" fill="none" />
                                </svg>
                            </button>
                            :
                            <button className="pqt-minus" onClick={cartItemDec}>-</button>
                        }
                        <div className="cart-button-count">
                            <span className="cart-num">{cartItemCount} </span>
                        </div>
                        <button className="pqt-plus" onClick={cartItemInc}>+</button>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default CartItem



{/* {cartItemCount === 1 ?
                            <button
                                onClick={deleteCartItem}
                                className="badge text-primary border-0  p-2 bg-white text-dark"
                                style={{ fontSize: "0.8rem" }} >
                                ❌
                            </button>
                            :
                            <button
                                onClick={cartItemDec}
                                className="badge text-primary border-0  p-2 bg-white text-dark"
                                style={{ fontSize: "0.8rem" }} >
                                ➖
                            </button>}
                        <span className="h4 text-primary "> {cartItemCount} </span>
                        <button
                            onClick={cartItemInc}
                            className="badge text-primary border-0  p-2 bg-white text-dark"
                            style={{ fontSize: "0.8rem" }}  >
                            ➕
                        </button> */}