const express = require('express')
const path = require('path')
const app = express()

app.get('/:id',(req,res) => {
    console.log(req.params)
    res.sendFile(path.join(__dirname,'20220831_180021.jpg'))
})
app.listen(process.env.PORT || 1221, () => console.log('app listen'))
