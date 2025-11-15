import './Home.css'
import {useEffect} from "react"

function Home() {
    useEffect(() => {
        document.title="Home"
    }, [])

    return(
        <>
        <div className="info">
            <h1 className="heading">Heading</h1>
            <h2 className="subheading">Subheading</h2>
            <p className="text">Text</p>
        </div>
        
        </>
    )
}

export default Home