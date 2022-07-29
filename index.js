const express = require('express')
const path = require('path')
const app = express()
const port = 3000

// const harryMiddleware = (req , res, next) => {
//     console.log(req)
// }

app.use(express.static(path.join(__dirname,'public')))
// app.use(harryMiddleware)

app.get('/hello/:name',(req, res) => {
    res.send("hello World " + req.params.name)
})

app.get('/about',(req , res)=> {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})