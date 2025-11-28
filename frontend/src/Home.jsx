import {useEffect} from "react"
import Foot from './Foot.jsx'

function Home() {
    useEffect(() => {
        document.title="Home"
    }, [])

    return(
        <>
        <div className="everything-container">
            <div className="info p-5">
                <h1 className="heading">I code</h1>
                <h2 className="subheading mt-2.5">Languages</h2>
                <p className="text">Python<br/>
                Javascript & HTML/CSS (React)</p>
                <h2 className="subheading mt-2.5">Siege</h2>
                <p className="text">It's been going well so far<br/>
                Currently at 5 coins, base Framework, and Hollow Knight</p>
                <h2 className="subheading mt-2.5">Organizer at Rat Hacks</h2>
                <p className="text">Nathan's really cool</p>
            </div>
            <Foot/>
        </div>
        </>
    )
}

export default Home