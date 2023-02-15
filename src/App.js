import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './Assets/Styles/App.css';
import { Header } from './Components';
import { Products, Cart, Login, Details, Add, NotFound, Dashboard, Checkout } from './Pages'

function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster />
        <div className="App">
          <Header />
          <Routes>
            <Route path='/' element={<Products />} ></Route>
            <Route path='/add' element={<Add />}></Route>
            <Route path="/Details/:id" element={<Details />}></Route>
            <Route path="/Cart" element={<Cart />}></Route>
            <Route path="/Cart/Checkout" element={<Checkout />}></Route>
            <Route path="/Dashboard" element={<Dashboard />}></Route>
            <Route path='/Login' element={<Login />} ></Route>
            <Route path='/404' element={<NotFound />} ></Route>
            <Route path='*' element={<NotFound />} ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
