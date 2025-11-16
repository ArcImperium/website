import './Foot.css'
import {useState} from "react"

function Foot() {
    return(
        <>
        <div className="foot">
            <h1 className="foot-text">©{new Date().getFullYear()} Eli Peters</h1>
        </div>
        </>
    )
}

export default Foot