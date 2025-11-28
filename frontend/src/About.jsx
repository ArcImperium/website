import {useEffect} from "react"
import Foot from './Foot.jsx'

function About() {
    useEffect(() => {
        document.title="About"
    }, [])

    return(
        <>
        <div className="everything-container">
            <div className="info p-5">
                <h1 className="heading">General Information</h1>
                <h2 className="subheading mt-2.5">Name</h2>
                <p className="text">Eli Peters</p>
            </div>
            <div className="info p-5">
                <h1 className="heading">Education</h1>
                <h2 className="subheading mt-2.5">Code</h2>
                <p className="text">Self-Taught<br/>
                Python, Javascript, React, HTML/CSS</p>
            </div>
            <div className="info p-5">
                <h1 className="heading">Contact</h1>
                <h2 className="subheading mt-2.5">Email</h2>
                <p className="text"><a href="mailto:eli@rathacks.com">eli@rathacks.com</a></p>
                <h2 className="subheading mt-2.5">Github</h2>
                <p className="text">ArcImperium</p>
                <h2 className="subheading mt-2.5">Slack</h2>
                <p className="text">@Eli Peters</p>
            </div>
            <Foot/>
        </div>
        </>
    )
}

export default About