import React from 'react'
import { useAuthState } from '../Contexts/AuthContext'
import { CartItem, EmptyCart, Loading, TotalCart } from '../Components'
import { dbUserCart } from '../Data/data'

const Cart = () => {
  const { userEmail } = useAuthState()
  const [inCart, setInCart] = React.useState([])
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    setLoading(true)
    if (userEmail) {
      dbUserCart(userEmail).onSnapshot(snapshot => {
        setInCart(snapshot.docs.map((doc) => ({
          id: doc.id,
          title: doc.data().title,
          price: doc.data().price,
          img: doc.data().img,
          count: doc.data().count,
          url: doc.data().url
        })))
        setLoading(false)
      })
    }
  }, [userEmail])

  return (
    <div className='d-flex justify-content-center '>
      {userEmail ?
        <div className="container d-flex row justify-content-center ">
          {
            loading ? <Loading /> : <div></div>
          }
          {
            inCart.length > 0 ?
              <div className="col-12 col-md-8 ">
                {
                  inCart.map(item => <CartItem
                    key={item.id}
                    id={item.id}
                    img={item.img}
                    title={item.title}
                    price={item.price}
                    count={item.count}
                    url={item.url}
                  />)
                }
              </div>
              :
              <div className="col-12  d-flex justify-content-center">
                {
                  loading === false ? <EmptyCart /> : null
                }
              </div>
          }
          <div className="col-12  col-md-4">
            {inCart.length > 0 ? <TotalCart /> : ""}
          </div>
        </div>
        :
        <div className="">Login</div>}
    </div>
  )
}
export default Cart