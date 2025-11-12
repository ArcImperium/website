import './Head.css'
import {useState} from "react"

function Head({head, setHead}) {
    const [headPos, setHeadPos] = useState(0)

    function moveHeadUp() {
        setTimeout(() => {setHead(prev => !prev)}, 1500)
        setHeadPos(-12.5)
    }
    function moveHeadDown() {
        setTimeout(() => {setHead(prev => !prev)}, 1500)
        setHeadPos(0)
    }

    return(
        <>
        <div className="head" style={{'--head-pos': `${headPos}%`}}>
            <button className="head-button a">Home</button>
            <button className="head-button b">Blog</button>
            <button className="head-button c">About</button>
        </div>
        {head && (<>
        <button className="close-head a" onClick={() => {moveHeadUp()}}></button>
        <button className="close-head b" onClick={() => {moveHeadUp()}}></button>
        </>)}
        {!head && (<>
        <button className="close-head a" onClick={() => {moveHeadDown()}}></button>
        <button className="close-head b" onClick={() => {moveHeadDown()}}></button>
        </>)}
        </>
    )
}

export default Head