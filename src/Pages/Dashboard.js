import React from 'react'

import { UserInfo } from '../Components'
import { useAuthState } from '../Contexts/AuthContext'

function Dashboard() {
  const { userEmail } = useAuthState()

  return (
    <div className="d-flex justify-content-center align-items-center col-12 ">
      <div className='col-11  text-color'>
        {userEmail ?
          <UserInfo />
          : null
        }
      </div>

    </div>
  )
}

export default Dashboard