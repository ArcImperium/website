import './Admin.css'
import {useState, useEffect} from "react"
import Foot from './Foot.jsx'

function Admin({admin, setAdmin, pass, SetPass}) {
    useEffect(() => {
        document.title="Admin"
    }, [])

    const [enterPass, setEnterPass] = useState("")
    const [showPass, setShowPass] = useState(false)
    const [createPost, setCreatePost] = useState(false)
    const [showWarning, setShowWarning] = useState(false)

    const [title, setTitle] = useState("")
    const [displaycontent, setDisplaycontent] = useState("")
    const [content, setContent] = useState("")

    const [loading, setLoading] = useState(false)

    function checkPass() {
        if (enterPass === pass) {
            setAdmin(true)
        }
        else {
            setShowWarning(true)
            setTimeout(() => {setShowWarning(false)}, 2000)
        }
    }

    async function postNew() {
        const res = await fetch("http://localhost:4000/posts", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                title,
                displaycontent,
                content
            })
        })
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
                            <input className="show-pass" type="checkbox" checked={showPass} onChange={() => {setShowPass(prev => !prev)}}/>
                        </div>
                        <button className={`check-pass ${loading ? "loading" : ""}`} onClick={() => {checkPass(); setLoading(true); setTimeout(() => {setLoading(false)}, 2000)}}>Access</button>
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
                    <input className="post-input" type="text" value={title} onChange={(e) => {setTitle(e.target.value)}}/>
                    <h2 className="subheading">Display Content</h2>
                    <input className="post-input" type="text" value={displaycontent} onChange={(e) => {setDisplaycontent(e.target.value)}}/>
                    <h2 className="subheading">Content</h2>
                    <textarea className="content-input" type="text" value={content} onChange={(e) => {setContent(e.target.value); e.target.style.height = "auto"; e.target.style.height = `${e.target.scrollHeight}px `}}/>
                    <div style={{height: "25px"}}></div>
                    {!loading && (<button className="check-pass create" onClick={() => {postNew(); setLoading(true); setTimeout(() => {setTitle(""); setDisplaycontent(""); setContent(""); setLoading(false)}, 1000)}}>Post</button>)}
                    {loading && (<button className="check-pass create loading">Post</button>)}
                </div>
            </>)}
            <Foot/>
        </div>
        </>
    )
}

export default Admin