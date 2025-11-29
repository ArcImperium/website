import {useEffect, useState} from "react"
import Foot from './Foot.jsx'

function Home() {
    useEffect(() => {
        document.title="Home"

        fetch('https://api.chess.com/pub/player/elithegreatest1/stats')
        .then(res => res.json())
        .then(data => setChessData(data))
    }, [])

    const [stat, setStat] = useState(0)
    const statArray = ["a", "b", "c"]

    const [chessData, setChessData] = useState(null);

    function nextStat(sign) {
        if (sign === "+") {
            if (stat === (statArray.length - 1)) {
                setStat(0)
            }
            else {
                setStat(prev => prev + 1)
            }
        }
        else if (sign === "-") {
            if (stat === 0) {
                setStat(statArray.length - 1)
            }
            else {
                setStat(prev => prev - 1)
            }
        }
    }

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
            <div className="info p-5">
                <h1 className="heading">Stats</h1>
                <div className="flex flex-row h-50 w-[80%] bg-white text-black ml-[10%] m-10 rounded-2xl">
                    <button onClick={() => {nextStat("-")}} className="h-full left-0 w-15 bg-stone-400  text-gray-800 text-5xl opacity-50 rounded-tl-2xl rounded-bl-2xl hover:opacity-100 transition duration-250 ease">{"<"}</button>
                    <div className="flex-1 flex h-full w-160 items-center content-center">
                        {(statArray[stat] === "a") && (<img className={`w-200 h-50`} src="https://github-readme-stats.hackclub.dev/api/wakatime?username=3035&api_domain=hackatime.hackclub.com&theme=prussian&custom_title=Hackatime+Stats&layout=compact&cache_seconds=0&langs_count=8"/>)}
                        {(statArray[stat] === "b") && (<div className={`w-200 h-50`}>
                            <h1 className="w-full text-4xl text-center text-neutral-800 mt-4 [-webkit-text-stroke:1px_green]">Chess.com</h1>
                            <h1 className="w-full text-xl text-center text-neutral-800 mt-4 [-webkit-text-stroke:0.25px_red]">Rapid: {chessData.chess_rapid.last.rating}</h1>
                            <h1 className="w-full text-xl text-center text-neutral-800 mt-1 [-webkit-text-stroke:0.25px_red]">Blitz: {chessData.chess_blitz.last.rating}</h1>
                            <h1 className="w-full text-xl text-center text-neutral-800 mt-1 [-webkit-text-stroke:0.25px_red]">Bullet: {chessData.chess_bullet.last.rating}</h1>
                        </div>)}
                        {(statArray[stat] === "c") && (<img className={`w-200 h-50`} src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=ArcImperium&theme=prussian"/>)}
                    </div>
                    <button onClick={() => {nextStat("+")}} className="h-full right-0 w-15 bg-stone-400 text-gray-800 text-5xl opacity-50 rounded-tr-2xl rounded-br-2xl hover:opacity-100 transition duration-250 ease">{">"}</button>
                </div>
            </div>
            <Foot/>
        </div>
        </>
    )
}

export default Home