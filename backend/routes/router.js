const express = require('express')
const fs = require('fs')
const path = require('path')
const router = express.Router()

const postFile = path.join(__dirname, '../data/posts.json')

router.get('/posts', (req, res) => {
    const posts = JSON.parse(fs.readFileSync(postFile, 'utf8'))
    res.json(posts)
})

router.post('/posts', (req, res) => {
    const posts = JSON.parse(fs.readFileSync(postFile, 'utf8'))

    const newPostId = `p${Date.now()}`

    const newPost = {
        id: newPostId,
        title: req.body.title,
        date: new Date().toLocaleDateString(),
        displaycontent: req.body.displaycontent,
        content: req.body.content
    }

    posts.push(newPost)
    fs.writeFileSync(postFile, JSON.stringify(posts, null, 2))
})

router.delete('/posts/:id', (req, res) => {
    const posts = JSON.parse(fs.readFileSync(postFile, 'utf8'))
    const idToDelete = req.params.id

    const filteredPosts = posts.filter(post => post.id !== idToDelete)
    fs.writeFileSync(postFile, JSON.stringify(filteredPosts, null, 2))

    res.status(200).json({ message: 'Post deleted successfully' })
})

module.exports = router