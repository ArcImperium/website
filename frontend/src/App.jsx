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
import Snow from './assets/Snow_gif_slow.gif'
import Ice from './assets/icicle.png'

function App() {
  const [head, setHead] = useState(true)
  const [admin, setAdmin] = useState(false)
  const [pass, setPass] = useState("admin")

  function getIce() {
    const giveIce = []

    for (let i = 0; i < 20; i++) {
      const icy = 5 * i
      giveIce.push(<img src={Ice} className="fixed w-[10%] -top-2" style={{left: `${icy}%`}}/>)
    }

    return giveIce
  }

  return (
    <>
    <Router>
      <img className="container" src={Background}/>
      <img src={IcePlanet1} className="fixed top-[-10%] left-0"/>
      <img src={SpaceIce} className="fixed bottom-[-50%] right-[-20%]"/>
      <img src={Snow} className="fixed w-full left-0 top-0"/>
      <div className="">
        {getIce()}
      </div>
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
