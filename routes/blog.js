const express = require('express')
const router = express.Router()
const path =  require('path')
const blogs = require('path')

router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'../template/index.html'))
})

module.exports = router