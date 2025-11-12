import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css'
import Head from './Head.jsx'
import Home from './Home.jsx'
import Blog from './Blog.jsx'
import About from './About.jsx'

function App() {
  const [head, setHead] = useState(true)

  return (
    <>
    <Head head={head} setHead={setHead}/>
    <Router>
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
