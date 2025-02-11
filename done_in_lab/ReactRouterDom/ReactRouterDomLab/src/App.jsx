import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Products from './Products'
import Navbar from './Navbar'
import Footer from './Footer'
import About from './About'
import Contact from './Contact'
import Blog from './Blog'


function App() {
  

  return (
    <>
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/'  element={<h1>UrbanTotes : Carry Style, Carry Sustainability! 🛍️</h1>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/blogs' element={<Blog/>}></Route>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
