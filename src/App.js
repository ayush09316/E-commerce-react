import React,{useState} from 'react';
import { Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Contact from './components/Contact';
import Home from './components/Home';
import Pages from './components/Pages';
import Blog from './components/Blog';
import Brand from './components/Brand'
import Shop from './components/Shop';
import Menu from './components/Menu';


const App = () => {
  const [data,setData]=useState('');
  const [badge,setBadge]=useState(0);
  return (
    <div>
      <Navbar data={data}setData={setData}badge={badge}setBadge={setBadge}/>
      <Routes>
      <Route path='/'index element={<Home setBadge={setBadge}setData={setData}data={data}/>}/>
      <Route path='/brands' element={<Brand/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/menu' element={<Menu/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/pages' element={<Pages/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
