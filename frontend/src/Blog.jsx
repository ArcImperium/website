import './Blog.css'
import {useEffect, useState} from "react"

function Blog() {
    useEffect(() => {
        document.title="Blog"
    }, [])

    const posts = [
        {
            "id": "post1",
            "title": "Test Post",
            "date": "11/15/2025",
            "display-content": "wait, there's more",
            "content": "just testing"
        },
        {
            "id": "post2",
            "title": "Number 2",
            "date": "11/15/2025",
            "display-content": "1 2 4",
            "content": "this is better than number 1 over there"
        }
    ]

    function getPosts() {
        for (let i = 0; i < posts.length(); i++) {
            <div className="post">
                <h1 className="post-title"></h1>
                <h2 className="post-date"></h2>
                <p className="post-content"></p>
            </div>
        }
    }

    return(
        <>
        <div className="post-container">
            {getPosts}
        </div>
        </>
    )
}

export default Blog