import {useState} from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css'
import NotFound from './NotFound.jsx'
import Head from './Head.jsx'
import Home from './Home.jsx'
import Blog from './Blog.jsx'
import Post from './Post.jsx'
import About from './About.jsx'
import Admin from './Admin.jsx'
import Background from './assets/background.jpg'
import IcePlanet1 from './assets/ice-planet.png'
import SpaceIce from './assets/space-ice.png'

function App() {
  const [head, setHead] = useState(true)
  const [admin, setAdmin] = useState(false)
  const [pass, setPass] = useState("admin")

  return (
    <>
    <Router>
      <img className="container" src={Background}/>
      <img src={IcePlanet1} className="fixed top-[-10%] left-0"/>
      <img src={SpaceIce} className="fixed bottom-[-50%] right-[-20%]"/>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path ="/" element={<>
          <Head head={head} setHead={setHead}/>
          <Home/>
        </>}/>
        <Route path="/blog" element={<>
          <Head head={head} setHead={setHead}/>
          <Blog/>
        </>}/>
        <Route path="/about" element={<>
          <Head head={head} setHead={setHead}/>
          <About/>
        </>}/>
        <Route path="/blog/:id" element={<>
          <Head head={head} setHead={setHead}/>
          <Post/>
        </>}/>
        <Route path="/admin" element={<>
          <Head head={head} setHead={setHead}/>
          <Admin admin={admin} setAdmin={setAdmin} pass={pass} setPass={setPass}/>
        </>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
