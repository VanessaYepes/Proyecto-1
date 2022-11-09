//const express = require('express')  este manera antigua de importacion commonjs
import Express from 'express' //manera nueva es6 --> usar esta
const app = Express()
const port = 3000

app.get('/', (req, res) => { // una / es el nativo "/ " -> direccion a la que apunto
  res.send('Hello World!')
})

app.get("/vane/:id",(req,res)=>{ //res--> respuesta o salida , req--> entrada 
    console.log(req.params)
    res.send('Hola desde vane '+ req.params.id)
})

app.get("/vane",(req,res)=>{ //res--> respuesta o salida , req--> entrada 
    res.send('Hola desde vane ')
})

app.listen(port, () => { //para levantar el servidor 
  console.log(`Example app listening on port ${port}`)
})