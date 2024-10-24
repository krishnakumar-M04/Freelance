
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Product from './Components/Product';
import Productdetails from './Components/Productdetails';
import Notfound from './Components/Notfound';

function App() {
  return (
    < >
      <Header />
      <Routes>
        <Route path='/'>    
          {/* this is the parent Route and the index is directly point 
          to the parent route */}
        <Route index element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<Product />} >
          <Route path=':id' element={<Productdetails />} />
          </Route>
          </Route>
        <Route path='*' element={<Notfound/>}/>
      </Routes>
    </>
  );
}

export default App;
