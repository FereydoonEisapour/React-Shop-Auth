import React from 'react'
import './../Assets/Styles/Button.css'
import { useParams } from 'react-router-dom'
import { PhoneSVG, CartSVG } from './../Assets/Images/svg'
import { useAuthState } from '../Contexts/AuthContext'
import { dbUserCart } from '../Data/data'
const AddButton = ({ title, price, img }) => {
    const [clicked, setClicked] = React.useState('')
    const [added, setAdded] = React.useState('')
    const [disabled, setDisabled] = React.useState(Boolean)
    const { id } = useParams()
    const { user } = useAuthState()

    const buttonClick = () => {
        if (user) { dbUserCart(user).add({ id: id, title, price, img, count: 1 }) }
        setDisabled(true)
        setClicked("clicked")
    }
    React.useEffect(() => {
        if (user) {
            dbUserCart(user).where('id', "==", id).onSnapshot((snapshot) => {
                if (typeof snapshot.docs[0] === "undefined") { setAdded("") }
                if (typeof snapshot.docs[0] !== "undefined") {
                    if (id === snapshot.docs[0].data().id) { setAdded("inCart"); setDisabled(true) }
                }
            });
        }
    }, [id, user])
    return (
        <>
            {user ?
                <button className={`cart-button  ${clicked} ${added}`} onClick={buttonClick} disabled={disabled}>
                    <span className="add-to-cart ">Add to cart</span>
                    <span className="added">Added</span>
                    <img src={CartSVG} className="shopping-cart" alt="cart" />
                    <img src={PhoneSVG} className="box" alt="phone" />
                </button>
                :
                <button className={`cart-button  `}>
                    <span className="add-to-cart ">Login</span>
                </button>}
        </>
    )
}

export default AddButton