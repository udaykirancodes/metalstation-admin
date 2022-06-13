import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import GlobalState from "./context/GlobalState"
import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './Pages/Products';
import Newproduct from './Pages/Newproduct';
import Order from './Pages/Order';
import Newsletter from './Pages/Newsletter';
import Review from './Pages/Review';
import Customer from './Pages/Customer';
import Subscriber from './Pages/Subscriber';
import Brand from './Pages/Brand';
import { useState } from 'react';
import { Alert } from './components/Alert';
import Signin from './Pages/Signin';
import Blogs from './Pages/Blogs';
import AddBlog from './Pages/AddBlog';
import Trashproduct from './Pages/Trashproduct';
import Trashblog from './Pages/Trashblog';

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }
  return (
    <>
      <GlobalState>

          <Router>
            <Navbar />
            <Alert alert={alert}/>
            <Routes>
              <Route exact path='/' element={<Home/>}/>
              <Route exact path='/product' element={<Products showAlert={showAlert}/>}/>
              <Route exact path='/newProduct' element={<Newproduct showAlert={showAlert} />}/>
              <Route exact path='/trashproduct' element={<Trashproduct showAlert={showAlert} />}/>
              <Route exact path='/order' element={<Order/>}/>
              <Route exact path='/newsletter' element={<Newsletter showAlert={showAlert}/>}/>
              <Route exact path='/review' element={<Review/>}/>
              <Route exact path='/customer' element={<Customer/>}/>
              <Route exact path='/subscriber' element={<Subscriber/>}/>
              <Route exact path='/brand' element={<Brand showAlert={showAlert}/>}/>
              <Route exact path='/login' element={<Signin showAlert={showAlert}/>}/>
              <Route exact path='/blog' element={<Blogs showAlert={showAlert}/>}/>
              <Route exact path='/trashblog' element={<Trashblog showAlert={showAlert}/>}/>
              <Route exact path='/addblog' element={<AddBlog showAlert={showAlert}/>}/>
            </Routes>

          </Router>
      </GlobalState>

    </>
  );
}

export default App;
