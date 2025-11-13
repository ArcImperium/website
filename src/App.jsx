import {useState} from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css'
import Head from './Head.jsx'
import Home from './Home.jsx'
import Blog from './Blog.jsx'
import About from './About.jsx'
import Foot from './Foot.jsx'

function App() {
  const [head, setHead] = useState(true)
  const [foot, setFoot] = useState(false)

  return (
    <>
    <Router>
      <Head head={head} setHead={setHead}/>
      <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
