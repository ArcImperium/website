import './About.css'
import {useEffect} from "react"
import Foot from './Foot.jsx'

function About() {
    useEffect(() => {
        document.title="About"
    }, [])

    return(
        <>
        <div className="everything-container">
            <div className="info"></div>
            <Foot/>
        </div>
        </>
    )
}

export default About