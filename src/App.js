
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './Add';
import './Assets/Styles/App.css';
import { Header } from './Components'
import { Cart, Details, Products, Login } from './Pages'

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
