import './Head.css'
import {useState} from "react"
import {useNavigate} from "react-router-dom"

function Head({head, setHead}) {
    const nav = useNavigate()
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
            <button className="head-button a" onClick={() => {nav('/')}}>Home</button>
            <button className="head-button b" onClick={() => {nav('/blog')}}>Blog</button>
            <button className="head-button c" onClick={() => {nav('/about')}}>About</button>
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