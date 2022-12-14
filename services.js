 import operaciones from "./models/operaciones.js"

//creo un objeto
const opt = {
    suma:"+",
    resta:"-",
    multi:"*",
    divi:"/",
}

export const calculatorLogic = async (req) => { //orquestador

    const {operacion}= req.body //le asigna en req.body.operacion
    const {numero1}=req.body //le asigna a numero1 a req.bode.numero1
    const{numero2} = req.body 
    
    //try catch , ejecuto el try si hay un error salta al catch
    try {
        console.log("inicio de ejecucion del calculatorLogic")
        validateData(operacion,numero1,numero2)
        const response = executeOpt( numero1, numero2, operacion )
        
        //añade un nuevo registro a la base de datos
        await operaciones.create({
            numero1 , //como la clave se llama igual que el valor se puede solo dejar uno de los dos y se asigna la clave al valor
            numero2: numero2,
            operacion: operacion,
            resultado: response
        })
        .then(()=>{
            console.log("creacion exitosa")
        })
        .catch((error)=> {
            console.log(error.message)
        })
        console.log("fin de ejecucion calculatorLogic")
        return response
    }

    catch (error) { //entra el trow 
        console.error("fallo en la ejecucíon ARRIBA", error.message)
        throw new Error(`${ error.message } `) //revienta el try ingresandolo al catch `${}` pasa a string una variable
    }
   
} 

export const getAllOperations = async () => {
    const baseDatos = await operaciones.find({});
        return baseDatos
}


export const delateData = async(req) => {
    const {operacion}= req.body //le asigna en req.body.operacion
    return await operaciones.deleteMany({operacion})
        .then( ()=>{
        return true
    })
        .catch((error)=> {
        console.log("entro al catch")
        return false
    })

}

export const buscar= async(req) => {
    const {_id} =req.body 
    const{numero1}=req.body
    const{operacion}=req.body
    const{numero2}=req.body
    return await operaciones.findByIdAndUpdate(_id, {
        numero1 ,
        operacion,
        numero2 : numero2
    })
        .then(() => {
            return true
        })
        .catch(()=> {
            return false
        })

}

const validateData = ( operacion, numero1, numero2 ) => {
    console.log("inicio de ejecucion del validateData")

    if (!Object.values(opt).includes(operacion) ) {
        console.error("fallo en la ejecucíon operacion")
        throw new Error ("Operacion no valida") //revienta el try ingresandolo al catch
    }

    if (! numero1 ){
        console.error("fallo en la ejecucíon numero 1")
        throw new Error ("No se ingreso uno de los numeros")
    }

    if (! numero2){
        console.error("fallo en la ejecucíon numero 2")
        throw new Error ("No se ingreso uno de los numeros")
    }
}

const executeOpt = ( numero1, numero2, operacion ) => {
    console.log("inicio de ejecucion del executeOpt")
    switch( operacion ) {
        case "+": 
            return  numero1 + numero2

        case "-": 
            return numero1 - numero2
  
        case "*": 
            return numero1 * numero2
  
        case "/": 
            return numero1 / numero2     
  
        default:
            throw new Error ("Operacion no valida")
      }//swich

}