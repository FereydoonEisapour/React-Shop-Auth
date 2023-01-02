import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthState } from '../Contexts/AuthContext'
import { dbUserCartId } from '../Data/data'
const CartItem = ({ img, title, price, id, count }) => {
    const { user } = useAuthState()
    const [cartItemCount, setCartItemCount] = React.useState(count)
    React.useEffect(() => {
        dbUserCartId(user, id).onSnapshot(snapshot => {
            if (snapshot.data() !== undefined) {
                setCartItemCount(snapshot.data().count)
            }
        })
    }, [id, user])

    const cartItemInc = () => {
        dbUserCartId(user, id).set({
            count: cartItemCount + 1
        }, { merge: true })
    }
    const cartItemDec = () => {
        dbUserCartId(user, id).set({
            count: cartItemCount - 1
        }, { merge: true })
    }

    const deleteCartItem = () => {
        setCartItemCount(0)
        dbUserCartId(user, id).delete()
    }
    return (
        <div className="container bg-white mb-2 rounded-3">
            <div className="row  d-flex ">
                <div className="col-4 d-flex align-items-center ">
                    <img className="col-11 p-2" src={img} alt="" />
                </div>
                <div className="col-8 d-flex row ">
                    <div className="">
                        <Link to="/details" className="text-decoration-none text-dark fw-bold ">
                            <span>{title}</span>
                        </Link>
                    </div>
                    <div className=" ">
                        <span className='fw-bold '> Price :</span>
                        <span className='fw-bold px-2'>{price}</span> $
                    </div>

                    <div className=" ">
                        {cartItemCount === 1 ?
                            <button
                                onClick={deleteCartItem}
                                className="badge text-primary border-0  p-2 bg-white text-dark"
                                style={{ fontSize: "1.2rem" }} >
                                ❌
                            </button>
                            :
                            <button
                                onClick={cartItemDec}
                                className="badge text-primary border-0  p-2 bg-white text-dark"
                                style={{ fontSize: "1.2rem" }} >
                                ➖
                            </button>}

                        <span className="h3 text-primary "> {cartItemCount} </span>
                        <button
                            onClick={cartItemInc}
                            className="badge text-primary border-0  p-2 bg-white text-dark"
                            style={{ fontSize: "1.2rem" }}  >
                            ➕
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem