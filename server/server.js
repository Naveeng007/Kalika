const express=require('express')
const path=require('path')
const app=express()
const publicPath=path.join(__dirname,'..','public')

app.use(express.static(publicPath))
const port=process.env.PORT|| 3000
app.get('*',(req,res)=>{
    res.sendFile(path.join(publicPath,'index.html'))//The res. sendFile() function basically transfers the file at the given path and it sets the Content-Type response HTTP header field based on the filename extension.
})

app.listen(port,()=>{
    console.log('server is up')
})