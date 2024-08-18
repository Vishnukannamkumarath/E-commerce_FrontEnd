import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import  Home from './components/signup';
import HomeP from './components/homepage';
import HomeL from './components/login';
import CartL from './components/cart';
import HelpL from './components/help';
import Groc from './components/grocery';
import Mob from './components/mobiles';
import MobileAdmin from './components/madmin';
import Sam from './components/samdetails';
import OneP from './components/onep';
import Iphone from './components/iphone';
import Fas from './components/fashion';
import Elec from './components/electronics';
import Fur from './components/furniture';
import ProfileSettings from './components/profile';
import Wishlist from './components/wishlist';
import CheckoutForm from './components/checkout';
import AdminPage from './components/admin';
import Fasadmin from './components/fadmin'
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
      <Route path="/madmin" element={<MobileAdmin/>}></Route>
      <Route path="/samdetails" element={<Sam/>}></Route>
      <Route path="/onep" element={<OneP/>}></Route>
      <Route path="/iphone" element={<Iphone/>}></Route>
      <Route path="/fashion" element={<Fas/>}></Route>
      <Route path="/electronics" element={<Elec/>}></Route>
      <Route path="/furniture" element={<Fur/>}></Route>
      <Route path="/profile" element={<ProfileSettings/>}></Route>
      <Route path="/wishlist" element={<Wishlist/>}></Route>
      <Route path="/checkout" element={<CheckoutForm/>}></Route>
      <Route path="/admin" element={<AdminPage/>}></Route>
      <Route path="/fadmin" element={<Fasadmin/>}></Route> 
    </Routes>
    
    
    </BrowserRouter>
   
  );
}

export default App;
