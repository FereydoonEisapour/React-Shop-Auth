import React from 'react'
//import { useParams } from 'react-router-dom'
import { useAuthState } from '../Contexts/AuthContext'

import { CartItem, TotalCart } from '../Components'
import { dbUserCart } from '../Data/data'

const Cart = () => {
  // const { id } = useParams()
  const { userEmail } = useAuthState()
  const [inCart, setInCart] = React.useState([])

  React.useEffect(() => {
    if (userEmail) {
      dbUserCart(userEmail).onSnapshot(snapshot => {
        setInCart(snapshot.docs.map((doc) => ({
          id: doc.id,
          title: doc.data().title,
          price: doc.data().price,
          img: doc.data().img,
          count: doc.data().count
        })))

      })
    }
  }, [userEmail])

  return (
    <>
      {userEmail ?
        <div className="container d-flex row">
          {
            inCart.length ?
              (
                <div className="col-12 col-md-8 ">
                  {inCart.map(item => <CartItem
                    key={item.id}
                    id={item.id}
                    img={item.img}
                    title={item.title}
                    price={item.price}
                    count={item.count}
                  />)}
                </div>
              ) :
              (
                <div className="col-12  d-flex justify-content-center">
                  <div className="col-10 text-center bg-light ">
                    <div className="">your cart is empty</div>
                  </div>
                </div>
              )
          }

          <div className="col-12  col-md-4">
            {inCart.length > 0 ? <TotalCart /> : ""}
          </div>
        </div>
        :
        <div className="">Login</div>}
    </>
  )
}

export default Cart