import './Foot.css'
import {useState} from "react"
import {useNavigate} from 'react-router-dom'
import SpaceShip from './assets/spaceship.png'

function Foot() {
    const nav = useNavigate()

    return(
        <>
        <div className="foot">
            <h1 className="foot-text">©{new Date().getFullYear()} Eli Peters</h1>
            <img src={SpaceShip} className="icon" onClick={() => {nav('/admin')}}/>
        </div>
        </>
    )
}

export default Foot