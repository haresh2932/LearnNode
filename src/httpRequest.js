const http = require('http')
const fs = require('fs')
const url = require('url')


const server = http.createServer((req, res) => {
    const method = req.method
    const pathName = url.parse(req.url, true).pathname
    const dataPath = './src/assets/data/data.json'

    if (method === 'GET' && pathName === '/institute') {
        fs.readFile(dataPath, 'utf-8', (err, data) => {
            const id = url.parse(req.url, true).query.id
            const objData = JSON.parse(data)

            if (id) {
                const obj = objData.find((v) => v.id == id)
                if (obj) {
                    res.writeHead(200, { 'Content-Type': 'application/json' })
                    res.write(JSON.stringify(obj))
                    res.end()
                } else {
                    res.writeHead(404, { 'Content-Type': 'application/json' })
                    res.end(JSON.stringify({ errMessage: "Data not found" }))
                }

            } else {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'application/json' })
                    res.end(JSON.stringify({ errMessage: err.message }))
                }
                res.writeHead(200, { 'Content-Type': 'application/json' })
                res.write(JSON.stringify(data))
                res.end()
            }


        })
    } else if (method === 'POST' && pathName === '/institute') {
        let body = ''

        req.on('data', (chunk) => {
            body += chunk
        })
        console.log(body, "hgfhdg")

        req.on('end', () => {
            try {
                fs.readFile(dataPath, 'utf-8', (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'application/json' })
                        res.end(JSON.stringify({ errMessage: err.message }))
                    }

                    const oldData = JSON.parse(data)
                    const newData = JSON.parse(body)

                    oldData.push(newData)
                    console.log(oldData);

                    fs.writeFile(dataPath, JSON.stringify(oldData), (err) => {
                        if (err) {
                            res.writeHead(500, { 'Content-Type': 'application/json' })
                            res.end(JSON.stringify({ errMessage: err.message }))
                        }
                        res.writeHead(200, { 'Content-Type': 'application/json' })
                        res.end(JSON.stringify({ Message: 'Data added successfully.' }))
                    })

                })
            } catch (error) {
                res.writeHead(500, { 'Content-Type': 'application/json' })
                res.end(JSON.stringify({ errMessage: error.message }))
                
            }
        })

    } else if (method === 'DELETE' && pathName === '/institute') {
        const id = url.parse(req.url, true).query.id
        if (id) {
            try {
                fs.readFile(dataPath, 'utf-8', (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'application/json' })
                        res.end(JSON.stringify({ errMessage: err.message }))
                    }

                    const oldData = JSON.parse(data)
                    console.log(oldData);

                    const newData = oldData.filter((v) => (v.id != id))
                    console.log(newData);

                    fs.writeFile(dataPath, JSON.stringify(newData), (err) => {
                        if (err) {
                            res.writeHead(500, { 'Content-Type': 'application/json' })
                            res.end(JSON.stringify({ errMessage: err.message }))
                        }
                        res.writeHead(200, { 'Content-Type': 'application/json' })
                        res.end(JSON.stringify({ Message: 'Data deleted successfully.' }))
                    })
                })
            } catch (error) {
                res.writeHead(500, { 'Content-Type': 'application/json' })
                res.end(JSON.stringify({ errMessage: error.message }))
            }

        }

        console.log('Data not found');
    } else if (method === 'PUT' && pathName === '/institute') {
        const id = url.parse(req.url, true).query.id

        if (id) {
            let body = ''

            req.on('data', (chunk) => {
                body += chunk
            })
            console.log(body, "hgfhdg")
            
             req.on('end', () => {
                try {
                    fs.readFile(dataPath, 'utf-8', (err, data) => {
                        if (err) {
                            res.writeHead(500, { 'Content-Type': 'application/json' })
                            res.end(JSON.stringify({ errMessage: err.message }))
                        }
    
                        const oldData = JSON.parse(data)
                        const editData = JSON.parse(body)

                        console.log(oldData);
    
                        const index = oldData.findIndex((v) => (v.id == id))
                        console.log(index);

                        oldData[index]=editData

                        console.log(oldData);
                        
    
                        fs.writeFile(dataPath, JSON.stringify(oldData), (err) => {
                            if (err) {
                                res.writeHead(500, { 'Content-Type': 'application/json' })
                                res.end(JSON.stringify({ errMessage: err.message }))
                            }
                            res.writeHead(200, { 'Content-Type': 'application/json' })
                            res.end(JSON.stringify({ Message: 'Data Edited successfully.' }))
                        })
                    })
                } catch (error) {
                    res.writeHead(500, {'Content-Type': 'application/json'})
                    res.end(JSON.stringify({ errMessage: error.message }))
                }
             })

           
        }
    }

})



server.listen(3000, () => {
    console.log("Create server successfully");
})