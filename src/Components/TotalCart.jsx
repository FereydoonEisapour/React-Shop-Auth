import React from 'react'
import { useAuthState } from '../Contexts/AuthContext'
import { dbUserCart } from '../Data/data'
const TotalCart = () => {
    const { user } = useAuthState()
    const [inCartPrice, setInCartPrice] = React.useState([])
    React.useEffect(() => {
        if (user) {
            dbUserCart(user).onSnapshot(snapshot => {
                setInCartPrice(snapshot.docs.map((doc) => ({
                    total: doc.data().price * doc.data().count
                })))
            })
        }
    }, [user])

    const initialValue = 0;
    const inCartTotalsPirce = inCartPrice.reduce(
        (previousValue, currentValue) => previousValue + currentValue.total,
        initialValue
    );
    return (
        <div className='bg-white py-4 rounded-3 text-center fw-bold'>
            <div className=''>{inCartTotalsPirce}  $</div>
            <div className="btn btn-primary mt-3">Checkout</div>
        </div>
    )
}

export default TotalCart