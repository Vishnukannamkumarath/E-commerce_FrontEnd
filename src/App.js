import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import  Home from './components/signup';
import HomeP from './components/homepage';
import HomeL from './components/login';
import CartL from './components/cart';
import HelpL from './components/help';
import Groc from './components/grocery';
import Mob from './components/mobiles';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<Home/>}></Route>
      <Route path="/login" element={<HomeL/>}></Route>
      <Route path="/help" element={<HelpL/>}></Route>
      <Route path="/homepage" element={<HomeP/>}></Route>
      <Route path="/cart" element={<CartL/>}></Route>
      <Route path="/grocery" element={<Groc/>}></Route>
      <Route path="/mobiles" element={<Mob/>}></Route>
    </Routes>
    
    
    </BrowserRouter>
   
  );
}

export default App;
