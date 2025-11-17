import './Admin.css'
import './Blog.css'
import {useState, useEffect} from "react"
import Foot from './Foot.jsx'

function Admin({admin, setAdmin, pass, SetPass}) {
    useEffect(() => {
        document.title="Admin"
    }, [])

    useEffect(() => {
        fetch("http://localhost:4000/posts")
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])

    const [enterPass, setEnterPass] = useState("")
    const [showPass, setShowPass] = useState(false)
    const [createPost, setCreatePost] = useState(false)
    const [editPost, setEditPost] = useState(false)
    const [showWarning, setShowWarning] = useState(false)

    const [title, setTitle] = useState("")
    const [displaycontent, setDisplaycontent] = useState("")
    const [content, setContent] = useState("")

    const [loading, setLoading] = useState(false)

    const [posts, setPosts] = useState(null)

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
        const res = await fetch("https://elipetersblog.onrender.com/posts", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                title,
                displaycontent,
                content
            })
        })
    }

    function getAdminPosts() {
        const givePosts = []
        for (let i = 0; i < posts.length; i++) {
            givePosts.push(
                <div className="admin-post" key={posts[i].id} onClick={() => {nav(`/blog/${posts[i].id}`)}}>
                    <div className="admin-post-description">
                        <h1 className="post-title">{posts[i].title}</h1>
                        <h2 className="post-date">{posts[i].date}</h2>
                    </div>
                    <button className="delete-button" onClick={() => {deletePost(posts[i].id)}}>X</button>
                </div>
            )
        }

        return givePosts
    }

    async function deletePost(id) {
        await fetch(`https://elipetersblog.onrender.com/posts/${id}`, {
            method: "DELETE"
        })
        setPosts(prev => prev.filter(post => post.id !== id))
    }

    return(
        <>
        <div className="everything-container">
            {(!admin && !createPost && !editPost) && (<>
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
            {(admin && !createPost && !editPost) && (<>
                <div className="admin-option-container">
                    <div className="admin-option" onClick={() => {setCreatePost(true)}}><h1 className="heading">Create Post</h1></div>
                    <div className="admin-option" onClick={() => {setEditPost(true)}}><h1 className="heading">Edit Post</h1></div>
                </div>
            </>)}
            {(createPost && !editPost) && (<>
                <div className="admin-container">
                    <button className="check-pass back" onClick={() => {setCreatePost(false); setEditPost(false)}}>BACK</button>
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
            {(editPost && !createPost) && (<>
                <div className="admin-container">
                    <button className="check-pass back" onClick={() => {setCreatePost(false); setEditPost(false)}}>BACK</button>
                    <div className="admin-display">
                        {getAdminPosts()}
                    </div>
                </div>
            </>)}
            <Foot/>
        </div>
        </>
    )
}

export default Admin