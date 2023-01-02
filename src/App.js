
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './Add';
import './Assets/Styles/App.css';
import Cart from './Pages/Cart';
import Details from './Components/Details';
import Header from './Components/Header';
import Products from './Pages/Products'
import Login from './Pages/Login';
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="App">

          <Routes>
            <Route path='/' element={<Products />} ></Route>
            {/* <Route path='/add' element={<Add />}></Route> */}
            <Route path="/details/:id" element={<Details />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path='/login' element={<Login />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
