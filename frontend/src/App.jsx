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

  const [popup, setPopup] = useState(true)

  function getIce() {
    const giveIce = []

    for (let i = 0; i < 20; i++) {
      const icy = 5 * i
      giveIce.push(<img src={Ice} className="fixed w-[10%] -top-2" style={{left: `${icy}%`}}/>)
    }

    return giveIce
  }

  function newTab(web) {
    window.open(web, '_blank', 'noopener,noreferrer')
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

      {popup && (
        <div onClick={() => {setPopup(false)}} className="fixed h-full w-full flex justify-center bg-slate-950/75 z-10000">
          <div onClick={(e) => e.stopPropagation()} className="fixed h-[90%] aspect-square top-[5%] flex justify-center bg-slate-800 z-10001">
            <button onClick={() => {setPopup(false)}} className="absolute h-10 w-10 -top-2.5 -right-2.5 bg-white text-slate-800 text-2xl font-extrabold hover:scale-110 hover:translate-x-1 hover:-translate-y-1 transition-transform duration-500 ease-in-out z-10003">X</button>
            <div className="fixed h-[85%] aspect-square top-[7.5%] bg-none border-2 border-slate-500 z-10002">
              <h1 className="w-full font-bold text-3xl mt-10 text-white text-center">The Eli Peters Foundation</h1>
              <h1 className="w-full text-xl mt-5 text-white text-center">a website made<br/>by me<br/>for me</h1>
              <h1 className="w-full text-3xl mt-20 text-white text-center">Consider Giving Today</h1>
              <button onClick={() => {newTab("https://hackclub.com/")}} className="w-[50%] h-15 ml-[25%] mt-10 text-2xl font-bold bg-white text-slate-800 hover:scale-110 transition-transform duration-500 ease-in-out">DONATE</button>
            </div>
          </div>
        </div>
      )}

      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path ="/" element={<>
          <Head head={head} setHead={setHead}/>
          <NotFound/>
        </>}/>
        <Route path="/blog" element={<>
          <Head head={head} setHead={setHead}/>
          <NotFound/>
        </>}/>
        <Route path="/about" element={<>
          <Head head={head} setHead={setHead}/>
          <NotFound/>
        </>}/>
        <Route path="/blog/:id" element={<>
          <Head head={head} setHead={setHead}/>
          <NotFound/>
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
