const express = require('express')
const router = express.Router()

router.get('/posts', (req, res) => {
    const posts = 
    [
        {
            "id": "p0",
            "title": "A",
            "date": "1",
            "displaycontent": "a",
            "content": "a"
        },
        {
            "id": "p1",
            "title": "B",
            "date": "2",
            "displaycontent": "b",
            "content": "b"
        }
    ]

    res.json(posts)
})

module.exports = router