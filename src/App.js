import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Guard from './components/Guard';
import Shop from './pages/Shop';
import CustomerDetail from './pages/customer/CustomerDetail';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route element={<Guard />}>
            <Route path='/home' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/detail/:id' element={<CustomerDetail />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
