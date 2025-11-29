const express = require('express')
const fs = require('fs')
const path = require('path')
const router = express.Router()

const multer = require("multer")
const upload = multer({dest: "uploads/"})

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

    res.status(201).json({
        post: newPost
    })
})

router.delete('/posts/:id', (req, res) => {
    const posts = JSON.parse(fs.readFileSync(postFile, 'utf8'))
    const idToDelete = req.params.id

    const filteredPosts = posts.filter(post => post.id !== idToDelete)
    fs.writeFileSync(postFile, JSON.stringify(filteredPosts, null, 2))

    res.status(200).json({ message: 'Post deleted successfully' })
})

router.get("/backup", (req, res) => {
  fs.readFile(postFile, "utf8", (err, data) => {
    if (err) return (res.status(500).send({ error: "Could not read posts" }))

    res.setHeader("Content-Disposition", "attachment; filename=backup_posts.json")
    res.setHeader("Content-Type", "application/json")
    res.send(data)
  })
})

router.post("/restore", upload.single("file"), (req, res) => {
  const filePath = req.file.path

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) return (res.status(500).send({ error: "Could not read uploaded file" }))

    let posts
    try {
      posts = JSON.parse(data)
    } catch {
      return (res.status(400).send({ error: "Invalid JSON" }))
    }

    fs.writeFile(postFile, JSON.stringify(posts, null, 2), (err) => {
      if (err) return (res.status(500).send({ error: "Could not save posts" }))
      res.send({success: true, message: "Blog restored successfully!"})
    })
  })
})

module.exports = router