const path = require("path")
const express = require("express")
const app = express()
const servers = require("./data/shuju")
const schools = require("./data/school")
app.use(express.static(__dirname))


app.get("/",(req,res)=>{
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin","*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers","content-type");
    //跨域允许的请求方式
    res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");

    res.jsonp(servers)
})
app.get("/school",(req,res)=>{
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin","*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers","content-type");
    //跨域允许的请求方式
    res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");

    res.jsonp(schools)
})
app.listen(3000,()=>{
    console.log("shop-server is starting on port 3000")
})