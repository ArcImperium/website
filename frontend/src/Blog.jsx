import './Blog.css'
import {useEffect, useState} from "react"

function Blog() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        document.title="Blog"
    }, [])

    useEffect(() => {
        fetch("http://localhost:4000/posts")
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])

    function getPosts1() {
        const givePosts1 = []
        for (let i = 0; i < posts.length; i++) {
            if (i % 2 === 0) {
                givePosts1.push(<div className="post">
                    <h1 className="post-title">{posts[i].title}</h1>
                    <h2 className="post-date">{posts[i].date}</h2>
                    <p className="post-content">{posts[i].displaycontent}</p>
                </div>)
            }
            else {}
        }
        return givePosts1
    }
    function getPosts2() {
        const givePosts2 = []
        for (let i = 0; i < posts.length; i++) {
            if (i % 2 !== 0) {
                givePosts2.push(<div className="post">
                    <h1 className="post-title">{posts[i].title}</h1>
                    <h2 className="post-date">{posts[i].date}</h2>
                    <p className="post-content">{posts[i].displaycontent}</p>
                </div>)
            }
            else {}
        }
        return givePosts2
    }

    return(
        <>
        <div className="post-container1">
            {getPosts1()}
        </div>
        <div className="post-container2">
            {getPosts2()}
        </div>
        </>
    )
}

export default Blog