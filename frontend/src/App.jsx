import {useState} from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css'
import Head from './Head.jsx'
import Home from './Home.jsx'
import Blog from './Blog.jsx'
import Post from './Post.jsx'
import About from './About.jsx'
import Background from './assets/background.jpg'

function App() {
  const [head, setHead] = useState(true)

  return (
    <>
    <Router>
      <Head head={head} setHead={setHead}/>
      <img className="container" src={Background}/>
      <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/blog/:id" element={<Post/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
