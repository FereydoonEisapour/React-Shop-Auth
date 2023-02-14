import React from 'react'
import { useAuthState } from '../Contexts/AuthContext'
import { dbUserOrders } from '../Data/data'
import { OrderItem } from './UiComponents'

function Orders() {
    const { userEmail } = useAuthState()
    const [orders, setOrders] = React.useState('')
    React.useEffect(() => {
        dbUserOrders(userEmail).onSnapshot(snapshot => {
            console.log()
            setOrders(snapshot.docs.map(doc => ({
                id: doc.id,
                cardNumber: doc.data().cardNumber,
                cardType: doc.data().cardType,
                cardName: doc.data().name,
                price: doc.data().price,
                timestamp: String(new Date(doc.data().timestamp.seconds * 1000)),
            })))
        })
        return () => { }
    }, [userEmail])

    return (
        <div className=''>
            {orders ? orders.map(order => (
                <OrderItem
                    key={order.id}
                    // id={order.id}
                    cardName={order.cardName}
                    cardNumber={order.cardNumber}
                    cardType={order.cardType}
                    price={order.price}
                    timestamp={order.timestamp}
                />
            )) : ''}
        </div>
    )
}

export default Orders