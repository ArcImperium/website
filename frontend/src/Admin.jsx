import './Admin.css'
import {useState} from "react"
import Foot from './Foot.jsx'

function Admin({admin, setAdmin, pass, SetPass}) {
    const [enterPass, setEnterPass] = useState("")
    const [showPass, setShowPass] = useState(false)
    const [createPost, setCreatePost] = useState(false)
    const [showWarning, setShowWarning] = useState(false)

    function checkPass() {
        if (enterPass === pass) {
            setAdmin(true)
        }
        else {
            setShowWarning(true)
            setTimeout(() => {setShowWarning(false)}, 2000)
        }
    }

    return(
        <>
        <div className="everything-container">
            {(!admin && !createPost) && (<>
                <div className="admin-container">
                        <h1 className="admin-instruction">Enter Admin Key:</h1>
                        <div className="password-container">
                            {!showWarning && (<input className="input-pass" type={showPass ? "text" : "password"} value={enterPass} onChange={(e) => {setEnterPass(e.target.value)}}/>)}
                            {showWarning && (<input className="input-pass warn" type="text" value={"Incorrect"}/>)}
                            <input className="show-pass" type="checkbox" value={showPass} onChange={() => {setShowPass(prev => !prev)}}/>
                        </div>
                        <button className="check-pass" onClick={() => {checkPass()}}>Access</button>
                </div>
            </>)}
            {(admin && !createPost) && (<>
                <div className="admin-option-container">
                    <div className="admin-option" onClick={() => {setCreatePost(true)}}><h1 className="heading">Create Post</h1></div>
                    <div className="admin-option"><h1 className="heading">Edit Post</h1><h2 className="subheading">Under Construction</h2></div>
                </div>
            </>)}
            {createPost && (<>
                <div className="admin-container">
                    <h2 className="subheading">Title</h2>
                    <input className="post-input" type="text"/>
                    <h2 className="subheading">Display Content</h2>
                    <input className="post-input" type="text"/>
                    <h2 className="subheading">Content</h2>
                    <input className="post-input content" type="text"/>
                    <div style={{height: "25px"}}></div>
                    <button className="check-pass create">Post</button>
                </div>
            </>)}
            <Foot/>
        </div>
        </>
    )
}

export default Admin