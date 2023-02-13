import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthState } from '../Contexts/AuthContext'
import { dbUserCartId, dbUserTotal, dbUserTotalId } from '../Data/data'
import './../Assets/Styles/Cart.css'
import { ImgSkeleton } from './'
// import ImgSkeleton from './ImgSkeleton'
const CartItem = ({ img, title, price, id, count, url }) => {
    const { userEmail } = useAuthState()
    const [cartItemCount, setCartItemCount] = React.useState(count)
    const [totalPrice, setTotalPrice] = React.useState()
    const [totalPriceId, setTotalPriceId] = React.useState()
    React.useEffect(() => {
        dbUserCartId(userEmail, id).onSnapshot(snapshot => {
            if (snapshot.data() !== undefined) {
                setCartItemCount(snapshot.data().count)
            }
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

        dbUserTotalId(userEmail, totalPriceId).update({
            total: totalPrice - price
        })
    }


    React.useEffect(() => {
        if (userEmail) {
            dbUserTotal(userEmail).onSnapshot(snapshot => {
                setTotalPrice(snapshot.docs[0].data().total)
                setTotalPriceId(snapshot.docs[0].id)
            })

        }
    })
    return (
        <div className="container cart-background text-color mb-2 rounded-3">

            <div className="row  d-flex ">
                <div className="col-4 d-flex align-items-center ">
                    {/* <img className="col-11 p-2" src={img} alt="" />  */}
                    <ImgSkeleton className="col-11 p-2" style={`skeleton-img-cart card-img-cart card-img`} img={img} />
                </div>
                <div className="col-8 d-flex row ">
                    <div className=" mt-3">
                        <Link to={`/details/${url}`} className="text-decoration-none  fw-bold text-color">
                            <span>{title}</span>
                        </Link>
                    </div>
                    <div className=" ">
                        <span className='fw-bold '> Price :</span>
                        <span className='fw-bold px-1'>{price}</span> $
                    </div>

                    <div className=" ">
                        {cartItemCount === 1 ?
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
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem