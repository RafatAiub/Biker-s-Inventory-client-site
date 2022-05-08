
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Shared/Footer';
import Header from './Shared/Header';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';

import Contact from './Pages/Home/Contact/Contact';
import HomeView from './Pages/Home/HomeView/HomeView';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import RequiredAuth from './Pages/Login/RequiredAuth';

import NotFound from './Shared/NotFound';
import Inventory from './Pages/Inventory/Inventory';
import ManageInventory from './Pages/Inventory/ManageInventory';
import AddInventory from './Pages/Inventory/AddInventory';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<HomeView></HomeView>}></Route>

        <Route path='/about-me' element={<About></About>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/home' element={<HomeView></HomeView>}></Route>
        {/* <Route path='/inventory/:_id' element={<Inventory></Inventory>} ></Route> */}
        <Route path='/inventory/added' element={<AddInventory></AddInventory>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/inventory/:_id' element={<RequiredAuth>
          <Inventory></Inventory>
        </RequiredAuth>}></Route>
        <Route path='/inventory/manage' element={<RequiredAuth>
          <ManageInventory></ManageInventory>
        </RequiredAuth>}></Route>
        <Route path='/contact-us' element={<Contact></Contact>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
