import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthState } from '../Contexts/AuthContext'
import { dbUserCart } from '../Data/data'
const TotalCart = () => {
    const { userEmail } = useAuthState()
    const [inCartPrice, setInCartPrice] = React.useState([])
    
    React.useEffect(() => {
        if (userEmail) {
            dbUserCart(userEmail).onSnapshot(snapshot => {
                setInCartPrice(snapshot.docs.map((doc) => ({
                    total: doc.data().price * doc.data().count
                })))
            })
        }
    }, [userEmail])

    const initialValue = 0;
    const inCartTotalsPirce = inCartPrice.reduce(
        (previousValue, currentValue) => previousValue + currentValue.total,
        initialValue
    );

    return (
        <div className='cart-background text-color py-4 rounded-3 text-center fw-bold'>
            <div className=''>Total Price : {inCartTotalsPirce}  $</div>
            <div className="py-2">
                <Link to={`/Cart/Checkout`} className=" text-color link " > Checkout</Link>
            </div>
        </div>
    )
}

export default TotalCart