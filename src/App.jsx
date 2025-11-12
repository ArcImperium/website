import {useState, useEffect} from 'react'
import './App.css'
import Head from './Head.jsx'

function App() {
  const [head, setHead] = useState(true)

  return (
    <>
    <Head head={head} setHead={setHead}/>
    </>
  )
}

export default App
