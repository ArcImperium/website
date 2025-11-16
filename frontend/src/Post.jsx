import './Blog.css'
import {useParams} from "react-router-dom"
import {useState, useEffect} from "react"

function Post() {
    const [post, setPost] = useState(null)
    const {id} = useParams()

    useEffect(() => {
        fetch("http://localhost:4000/posts")
            .then(res => res.json())
            .then(data => {const found = data.find(p => p.id === id); setPost(found)})
    }, [id])

    if (!post) {
        return(
            <div>LOADING</div>
        )
    }

    return(
        <>
        <div className="info">
            <h1 className="title">{post.title}</h1>
            <h2 className="date">{post.date}</h2>
            <p className="text">{post.content}</p>
        </div>
        </>
    )
}

export default Post