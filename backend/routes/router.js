const express = require('express')
const router = express.Router()

router.get('/users', (req, res) => {
    userData = 
    [
        {
            "id": "1",
            "num": "101"
        },
        {
            "id": "2",
            "num": "102"
        }
    ]

    res.send(userData)
})

module.exports = router