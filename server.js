const express = require('express')
const path = require('path')
const app = express()

app.get('/',(req,res) => {
    console.log('hi')
    res.sendFile(path.join(__dirname,'20220831_180021.jpg'))
})
app.listen(process.env.PORT || 1221, () => console.log('app listen'))