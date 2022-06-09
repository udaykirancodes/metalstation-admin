import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Newproduct from './components/Newproduct';
import Order from './components/Order';
import Newsletter from './components/Newsletter';
import Review from './components/Review';
import Customer from './components/Customer';
import Subscriber from './components/Subscriber';
import Brand from './components/Brand';
import { useState } from 'react';
import { Alert } from './components/Alert';

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  return (
    <>
      <Router>
        <Navbar />
        <Alert alert={alert}/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/product' element={<Products showAlert={showAlert}/>}/>
          <Route exact path='/newProduct' element={<Newproduct showAlert={showAlert} />}/>
          <Route exact path='/order' element={<Order/>}/>
          <Route exact path='/newsletter' element={<Newsletter showAlert={showAlert}/>}/>
          <Route exact path='/review' element={<Review/>}/>
          <Route exact path='/customer' element={<Customer/>}/>
          <Route exact path='/subscriber' element={<Subscriber/>}/>
          <Route exact path='/brand' element={<Brand showAlert={showAlert}/>}/>
        </Routes>

      </Router>
    </>
  );
}

export default App;
