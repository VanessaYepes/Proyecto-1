//const express = require('express')  este manera antigua de importacion commonjs
import {calculatorLogic} from "./services.js" 
import Express from 'express' //manera nueva es6 --> usar esta
const app = Express()
const port = 3000

app.use(Express.json()); //Siempre entran json como entrada 

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



app.post("/calculadora",(req,res)=>{ //res--> respuesta o salida , req--> entrada 
  
  try {
    console.log("inicio de ejecucion del controlador calculadora", req.body)
    const response= calculatorLogic( req )
    res.status(202).send('El resultado de la operacion es:  '+ response) 
    console.log("fin  de ejecucion del controlador calculadora")
  }
  catch( error ) {
    console.error(error.messange, "controller")
    res.status(400).send("error en el cuerpo de la peticion")
  }
})


app.listen(port, () => { //para levantar el servidor 
  console.log(`Example app listening on port ${port}`)
})
