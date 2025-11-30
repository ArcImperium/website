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
    const statArray = ["a", "b", "c", "d"]

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
                Javascript & HTML/CSS<br/>
                (React & Tailwind)</p>
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
                        {(statArray[stat] === "a") && (<img className="w-200 h-50" src="https://github-readme-stats.hackclub.dev/api/wakatime?username=3035&api_domain=hackatime.hackclub.com&theme=prussian&custom_title=Hackatime+Stats&layout=compact&cache_seconds=0&langs_count=8"/>)}
                        {(statArray[stat] === "b") && (<div className="w-200 h-50">
                            <h1 className="w-full text-4xl text-center text-neutral-800 mt-4 [-webkit-text-stroke:1px_green]">Chess.com</h1>
                            <h1 className="w-full text-xl text-center text-neutral-800 mt-4 [-webkit-text-stroke:0.25px_red]">Rapid: {chessData.chess_rapid.last.rating}</h1>
                            <h1 className="w-full text-xl text-center text-neutral-800 mt-1 [-webkit-text-stroke:0.25px_red]">Blitz: {chessData.chess_blitz.last.rating}</h1>
                            <h1 className="w-full text-xl text-center text-neutral-800 mt-1 [-webkit-text-stroke:0.25px_red]">Bullet: {chessData.chess_bullet.last.rating}</h1>
                        </div>)}
                        {(statArray[stat] === "c") && (<img className="w-200 h-50" src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=ArcImperium&theme=prussian"/>)}
                        {(statArray[stat] === "d") && (<div className="w-200 h-50">
                            <h1 className="w-full text-3xl text-center text-neutral-800 mt-3 [-webkit-text-stroke:1px_green]">Setup</h1>
                            <h1 className="w-full text-xl text-center text-neutral-800 mt-3 [-webkit-text-stroke:0.25px_red]">Computer: 256 GB storage, 16 GB RAM</h1>
                            <h1 className="w-full text-xl text-center text-neutral-800 mt-1 [-webkit-text-stroke:0.25px_red]">OS: Windows 11 Pro</h1>
                            <h1 className="w-full text-xl text-center text-neutral-800 mt-1 [-webkit-text-stroke:0.25px_red]">Browser: Google Chrome</h1>
                            <h1 className="w-full text-xl text-center text-neutral-800 mt-1 [-webkit-text-stroke:0.25px_red]">Code Editor: VSCode</h1>
                        </div>)}
                    </div>
                    <button onClick={() => {nextStat("+")}} className="h-full right-0 w-15 bg-stone-400 text-gray-800 text-5xl opacity-50 rounded-tr-2xl rounded-br-2xl hover:opacity-100 transition duration-250 ease">{">"}</button>
                </div>
            </div>
            <div className="info p-5">
                <h1 className="heading mb-5">FAQ</h1>
                <div className="flex flex-row items-stretch">
                    <div className="w-[25%] p-2">
                        <h1 className="text-center font-bold mb-2 text-xl">What do you code?</h1>
                        <h1 className="">
                            I started coding seriously about half a year ago. 
                            Some of them have not been my best work, but I have learned a lot about coding in that time.
                            They include some projects in Python, but a majority of them have been websites.
                        </h1>
                    </div>
                    <div className="border border-white"></div>
                    <div className="w-[25%] p-2">
                        <h1 className="text-center font-bold mb-2 text-xl">What are your goals?</h1>
                        <h1 className="">
                            My primary coding goal is to make a really cool personal website.
                            In life, I just want to be successful and be happy most importantly.
                            I intend to become an aerospace engineer, because space.
                            I also just like to make things, and I enjoy challenging myself.
                        </h1>
                    </div>
                    <div className="border border-white"></div>
                    <div className="w-[25%] p-2">
                        <h1 className="text-center font-bold mb-2 text-xl">What are your hobbies?</h1>
                        <h1 className="">
                            - Coding, of course<br/>
                            - History<br/>
                            - Politics<br/>
                            - Geography<br/>
                            - Chess<br/>
                            - Dungeons and Dragons<br/>
                            - Video Games
                        </h1>
                    </div>
                    <div className="border border-white"></div>
                    <div className="w-[25%] p-2">
                        <h1 className="text-center font-bold mb-2 text-xl">What is this website?</h1>
                        <h1 className="">
                            This website is my personal website, meant to reflect me.
                            I want this to be a really cool website, if you have an idea, contact me.
                            I plan on completely remaking the website whenever I get a break from life (so probably never).
                        </h1>
                    </div>
                </div>
            </div>
            <Foot/>
        </div>
        </>
    )
}

export default Home