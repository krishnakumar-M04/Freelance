import logo from './logo.svg';
import './App.css';
import Purchase from './Components/Purchase';
import Total from './Components/Total';
import Cart from './Components/Cart';
import User from './Components/User';

function App() {
  return (
    <div className="App">
      <User/>
      <Purchase />
      <Cart/>
      <Total />
      
    </div>
  );
}

export default App;
