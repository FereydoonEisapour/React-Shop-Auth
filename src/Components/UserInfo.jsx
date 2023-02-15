import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthDispatch, useAuthState, doLogOut } from '../Contexts/AuthContext'

function UserInfo() {
    const { userEmail } = useAuthState()
    const navigate = useNavigate()
    const dispatch = useAuthDispatch()
    const logOut = () => {
        doLogOut(dispatch)
        navigate('/')
    };
    return (
        <div className='col-6 p-3 comp-container text-color rounded-4'>
            <div className="p-2 m-2 mb-4">Email :  {userEmail}</div>
            <button className='btn btn-danger mx-2' onClick={logOut}>Log out</button>
        </div>
    )
}
export default UserInfo