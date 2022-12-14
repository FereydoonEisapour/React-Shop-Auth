import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthState } from '../Contexts/AuthContext'
import { dbUserCartId } from '../Data/data'
import './../Assets/Styles/Cart.css'
// import ImgSkeleton from './ImgSkeleton'
const CartItem = ({ img, title, price, id, count }) => {
    const { userEmail } = useAuthState()
    const [cartItemCount, setCartItemCount] = React.useState(count)
    React.useEffect(() => {
        dbUserCartId(userEmail, id).onSnapshot(snapshot => {
            if (snapshot.data() !== undefined) {
                setCartItemCount(snapshot.data().count)
            }
        })
    }, [id, userEmail])

    const cartItemInc = () => {
        dbUserCartId(userEmail, id).set({
            count: cartItemCount + 1
        }, { merge: true })
    }
    const cartItemDec = () => {
        dbUserCartId(userEmail, id).set({
            count: cartItemCount - 1
        }, { merge: true })
    }

    const deleteCartItem = () => {
        setCartItemCount(0)
        dbUserCartId(userEmail, id).delete()
    }

    return (
        <div className="container bg-white mb-2 rounded-3">
     
            <div className="row  d-flex ">
                <div className="col-4 d-flex align-items-center ">
             <img className="col-11 p-2" src={img} alt="" /> 
                    {/* <ImgSkeleton className="col-11 p-2" img={img} /> */}
                </div>
                <div className="col-8 d-flex row ">
                    <div className=" mt-3">
                        <Link to="/details" className="text-decoration-none text-dark fw-bold ">
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
                                ???
                            </button>
                            :
                            <button
                                onClick={cartItemDec}
                                className="badge text-primary border-0  p-2 bg-white text-dark"
                                style={{ fontSize: "0.8rem" }} >
                                ???
                            </button>}

                        <span className="h4 text-primary "> {cartItemCount} </span>
                        <button
                            onClick={cartItemInc}
                            className="badge text-primary border-0  p-2 bg-white text-dark"
                            style={{ fontSize: "0.8rem" }}  >
                            ???
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem