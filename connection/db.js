
import {connect} from 'mongoose' 
import * as dotenv from "dotenv";

dotenv.config({path: "./.env"})// cargando la variable de entorno del .env par apoder cargar la base de datos
const connectionString = process.env.SECRET_KEY; //me traigo la variable del env

const dbConnection = async() => { //sync es asincrono
    // getting-started.js

    await connect(connectionString)
        .then(()=>{
            console.log("conexion exitosa")
        })
        .catch((error)=>{
            console.log("conexion erronea", error.message)
        })
    
    // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
    
}



export default dbConnection