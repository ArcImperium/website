import {useEffect} from "react"
import Foot from './Foot.jsx'

function About() {
    useEffect(() => {
        document.title="About"
    }, [])

    return(
        <>
        <div className="everything-container">
            <div className="info">
                <h1 className="heading">General Information</h1>
                <h2 className="subheading">Name</h2>
                <p className="text">Eli Peters</p>
                <h2 className="subheading">Birthday</h2>
                <p className="text">August 2, 2009</p>
            </div>
            <div className="info">
                <h1 className="heading">Education</h1>
                <h2 className="subheading">School</h2>
                <p className="text">Franklin County High School (Class of 2027)<br/>
                Roanoke Valley Governor's School (Class of 2027)</p>
                <h2 className="subheading">Code</h2>
                <p className="text">Self-Taught<br/>
                Python, Javascript, React, HTML/CSS</p>
            </div>
            <Foot/>
        </div>
        </>
    )
}

export default About