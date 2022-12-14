import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import { AuthProvider, doLoginCookie, useAuthDispatch } from './Contexts/AuthContext';
import './Assets/Styles/App.css';
import { Header } from './Components';
import { Products, Cart, Login, Details, Add, NotFound } from './Pages'
import React from 'react';
//import { getCookie } from './hooks/cookies';
function App() {


  // const dispatch = useAuthDispatch();
  // React.useEffect(() => {
  //   const userCookie = getCookie('user')
  //   if (userCookie !== "") {
  //     doLoginCookie(dispatch, userCookie)
  //   }
  // }, [dispatch])
  return (
    <>
      {/* <AuthProvider> */}
      <BrowserRouter>
        <Toaster />
        <div className="App">
          <Header />
          <Routes>
            <Route path='/' element={<Products />} ></Route>
            <Route path='/add' element={<Add />}></Route>
            <Route path="/details/:id" element={<Details />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path='/login' element={<Login />} ></Route>
            <Route path='*' element={<NotFound />} ></Route>
          </Routes>
        </div>
      </BrowserRouter>
      {/* </AuthProvider> */}
    </>
  );
}

export default App;
