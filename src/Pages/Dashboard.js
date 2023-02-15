import { UserInfo } from '../Components'
import Orders from '../Components/Orders'
import { useAuthState } from '../Contexts/AuthContext'
import { dbUserOrders } from '../Data/data'

function Dashboard() {
  const { userEmail } = useAuthState()

  const delAllOrders = () => {
    dbUserOrders(userEmail).get()
      .then(function (querySnapshot) { querySnapshot.forEach(function (doc) { doc.ref.delete() }) })
  }
  return (
    <div className="d-flex justify-content-center align-items-center col-12 ">
      <div className='col-11  text-color'>
        {userEmail ?
          <>
            <UserInfo />
            <button className='btn btn-danger m-2' onClick={delAllOrders}>del all orders</button>
            <Orders />
          </>
          : null
        }
      </div>

    </div>
  )
}

export default Dashboard