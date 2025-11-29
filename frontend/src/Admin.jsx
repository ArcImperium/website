import './Admin.css'
import './Blog.css'
import {useState, useEffect} from "react"
import Foot from './Foot.jsx'

function Admin({admin, setAdmin, pass, SetPass}) {
    useEffect(() => {
        document.title="Admin"
    }, [])

    useEffect(() => {
        fetch("https://elipetersblog.onrender.com/posts")
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

    const [posts, setPosts] = useState([])

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
                <div className="admin-post" key={posts[i].id}>
                    <div className="admin-post-description">
                        <h1 className="post-title p-4">{posts[i].title}</h1>
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

    async function download() {
        try {
            const res = await fetch("https://elipetersblog.onrender.com/backup")
            if (!res.ok) {throw new Error("It didn't work")}
            
            const blob = await res.blob()
            const url = window.URL.createObjectURL(blob)
            const a = document.createElement("a")

            a.href = url
            a.download = "backup_posts.json"
            a.click()

            window.URL.revokeObjectURL(url)
        }
        catch (err) {
            console.error("Download failed: ", err)
            alert("Download failed")
        }
    }
    async function upload() {
        const input = document.createElement("input")
        input.type = "file"
        input.accept = "application/json"

        input.onchange = async (e) => {
            const file = e.target.files[0]
            if(!file) {return}

            const formData = new FormData()
            formData.append("file", file)

            try {
                const res = await fetch("https://elipetersblog.onrender.com/restore", {
                    method: "POST",
                    body: formData
                })

                const data = await res.json()
                if (data.success) {
                    alert("Upload sccessful")

                    const updatedPosts = await fetch("https://elipetersblog.onrender.com/posts").then(r => r.json())
                    setPosts(updatedPosts)
                }
                else {
                    alert("Upload failed")
                }
            }
            catch (err) {
                console.error("Upload failed: ", err)
                alert("Upload failed")
            }
        }

        input.click()
    }

    return(
        <>
        <div className="everything-container">
            {(!admin && !createPost && !editPost) && (<>
                <div className="admin-container p-10">
                        <h1 className="admin-instruction mb-5">Enter Admin Key:</h1>
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
                    <h2 className="subheading mb-1.5 mt-1.5">Title</h2>
                    <input className="post-input bg-white p-2 text-shadow-blue-950" type="text" value={title} onChange={(e) => {setTitle(e.target.value)}}/>
                    <h2 className="subheading mb-1.5 mt-1.5">Display Content</h2>
                    <input className="post-input bg-white p-2 text-shadow-blue-950" type="text" value={displaycontent} onChange={(e) => {setDisplaycontent(e.target.value)}}/>
                    <h2 className="subheading mb-1.5 mt-1.5">Content</h2>
                    <textarea className="content-input bg-white p-2 text-shadow-blue-950" type="text" value={content} onChange={(e) => {setContent(e.target.value); e.target.style.height = "auto"; e.target.style.height = `${e.target.scrollHeight}px `}}/>
                    <div style={{height: "25px"}}></div>
                    {!loading && (<button className="check-pass create" onClick={() => {postNew(); setLoading(true); setTimeout(() => {setTitle(""); setDisplaycontent(""); setContent(""); setLoading(false)}, 1000)}}>Post</button>)}
                    {loading && (<button className="check-pass create loading">Post</button>)}
                </div>
            </>)}
            {(editPost && !createPost) && (<>
                <div className="admin-container">
                    <div className="flex flex-row">
                        <button className="w-[20%] h-12.5 bg-white ml-[5%] mt-10 mb-10 rounded-xl text-indigo-900 font-bold text-2xl hover:scale-110 transition-transform duration-500 ease" onClick={() => {download()}}>DOWNLOAD</button>
                        <button className="w-[40%] h-12.5 bg-white ml-[5%] mt-10 mb-10 rounded-xl text-indigo-900 font-bold text-2xl hover:scale-110 transition-transform duration-500 ease" onClick={() => {setCreatePost(false); setEditPost(false)}}>BACK</button>
                        <button className="w-[20%] h-12.5 bg-white ml-[5%] mt-10 mb-10 rounded-xl text-indigo-900 font-bold text-2xl hover:scale-110 transition-transform duration-500 ease" onClick={() => {upload()}}>UPLOAD</button>
                    </div>
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