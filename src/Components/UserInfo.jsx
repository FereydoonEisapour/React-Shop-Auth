import React from 'react'
import { useAuthDispatch, useAuthState ,doLogOut} from '../Contexts/AuthContext'

function UserInfo() {
    const { userEmail } = useAuthState()
    const dispatch=useAuthDispatch()
    const logOut = () => {
        doLogOut(dispatch);
      };
    return (
        <div className='col-5 p-3 comp-container text-color rounded-4'>
            <div className="p-2 m-2 mb-4">Email :  {userEmail}</div>
            <button className='btn btn-danger mx-2' onClick={logOut}>Log out</button>
        </div>
    )
}
export default UserInfo