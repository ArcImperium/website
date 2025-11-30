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
                <h2 className="subheading mt-2.5">Country</h2>
                <p className="text">United States of America</p>
            </div>
            <div className="info p-5">
                <h1 className="heading">Education</h1>
                <h2 className="subheading mt-2.5">Code</h2>
                <p className="text">Self-Taught<br/>
                Python, Javascript, React, HTML/CSS, Tailwind</p>
            </div>
            <div className="info p-5">
                <h1 className="heading">Contact</h1>
                <h2 className="subheading mt-2.5">Email</h2>
                <p className="text-[20px] pl-[25px] text-white underline"><a className="hover:text-neutral-300 transition-colors duration-250 ease-in-out" href="mailto:eli@rathacks.com">eli@rathacks.com</a></p>
                <h2 className="subheading mt-2.5">Github</h2>
                <p className="text-[20px] pl-[25px] text-white underline"><a className="hover:text-neutral-300 transition-colors duration-250 ease-in-out" href="https://github.com/arcimperium">ArcImperium</a></p>
                <h2 className="subheading mt-2.5">Slack</h2>
                <p className="text">@Eli Peters</p>
            </div>
            <Foot/>
        </div>
        </>
    )
}

export default About