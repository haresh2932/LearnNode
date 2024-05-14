const express=require('express')
const app=express()
const url=require('url')
const fs=require('fs')

app.get('/',(req,res)=>{    
    const pathName=url.parse(req.url,true).pathname
    console.log(pathName);
    const dataPath = './src/assets/data/data.json'

    fs.readFile(dataPath, 'utf-8', (err, data) => {
        const id = url.parse(req.url, true).query.id
        console.log(id);
        const objData = JSON.parse(data)

        if (id) {
            const obj = objData.find((v) => v.id == id)
            if (obj) {               
                res.send(JSON.stringify(obj))                
            } else {
              res.send()
            }
        } else {            
            res.send(JSON.stringify(data))           
        }
    })
    
})


app.listen(4000,()=>{
    console.log('server is running')
})