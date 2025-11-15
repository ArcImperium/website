const express = require('express')
const router = express.Router()

router.get('/posts', (req, res) => {
    const posts = 
    [
        {
            "title": "A",
            "date": "1",
            "displaycontent": "a"
        },
        {
            "title": "B",
            "date": "2",
            "displaycontent": "b"
        }
    ]

    res.json(posts)
})

module.exports = router