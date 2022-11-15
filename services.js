//creo un objeto
const opt = {
    suma:"+",
    resta:"-",
    multi:"*",
    divi:"/",
}

export const calculatorLogic = (req) => { //orquestador

    const {operacion}= req.body //le asigna en req.body.operacion
    const {numero1}=req.body //le asigna a numero1 a req.bode.numero1
    const{numero2} = req.body 
    
    //try catch , ejecuto el try si hay un error salta al catch
    try {
        console.log("inicio de ejecucion del calculatorLogic")
        validateData(operacion,numero1,numero2)
        const response = executeOpt( numero1, numero2, operacion ) 
        console.log("fin de ejecucion calculatorLogic")
        return response
    }

    catch (error) { //entra el trow 
        console.error("fallo en la ejecucíon ARRIBA", error.message)
        throw new Error(error.message) //revienta el try ingresandolo al catch
    }
   
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