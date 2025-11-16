import './Home.css'
import {useEffect} from "react"
import Foot from './Foot.jsx'

function Home() {
    useEffect(() => {
        document.title="Home"
    }, [])

    return(
        <>
        <div className="everything-container">
            <div className="info">
                <h1 className="heading">Heading</h1>
                <h2 className="subheading">Subheading</h2>
                <p className="text">Text</p>
            </div>
            <Foot/>
        </div>
        </>
    )
}

export default Home