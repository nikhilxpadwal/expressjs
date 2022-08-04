const express = require('express')
const router = express.Router()
const path = require('path')
const blogsArray = require('./blogs.js')

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../template/index.html'))
})

router.get('/blog', (req, res) => {
    const data = { ...blogsArray }
    const { blogs } = data;
    const result = blogs.map(blog => blog.title)
    res.send(result)
})


module.exports = router