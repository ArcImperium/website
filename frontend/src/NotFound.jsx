import Rocket from './assets/rocket.png'
import {useNavigate} from "react-router-dom"

function NotFound() {
    const nav = useNavigate()

    return(
        <>
        <div className="fixed flex flex-row w-[80%] h-[80%] mt-[10vh] items-center bg-slate-600 ml-[10%] rounded-3xl">
            <img src={Rocket} className="aboslute h-[100%] ml-[12.5%]"/>
            <div className="flex flex-col w-[50%] ml-0 items-center content-center"> 
                <h1 className="text-white text-6xl font-extrabold p-5">404</h1>
                <h2 className="text-white text-3xl font-bold p-5">PAGE NOT FOUND</h2>
                <button className="bg-white text-slate-700 font-extrabold p-2 w-[35%] mt-[10vh] text-2xl rounded-2xl hover:scale-110 transition duration-500 ease" onClick={() => {nav("/")}}>HOME</button>
            </div>
        </div>
        </>
    )
}   

export default NotFound