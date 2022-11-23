import {calculatorLogic, delateData} from "./services.js"
import operaciones from "./models/operaciones.js" 
// const calculatorLogic = require('./services');

jest.mock("./models/operaciones.js" );// se hace para que el no pueda modificar en el test la base de datos


// test('adds 7 + 9 to equal 16', () => {
//     const req = {
//         body : {
//             numero1: 7,
//             numero2: 9,
//             operacion: "-"
//         }
//     }
  
//     expect(calculatorLogic(req)).toBe(-2);
// });

// test('adds 7 + 9 to equal 16', () => {
//     const req = {
//         body : {
//             numero1: 7,
//             numero2: 2,
//             operacion: "*"
//         }
//     }
  
//     expect(calculatorLogic(req)).toBe(14);
// });

// test('adds 7 + 9 to equal 16', () => {
//     const req = {
//         body : {
//             numero1: 10,
//             numero2: 5,
//             operacion: "-"
//         }
//     }
  
//     expect(calculatorLogic(req)).toBe(5);
// });

// test('adds 7 + 9 to equal 16', () => {
//     const req = {
//         body : {
//             numero1: 7,
//             numero2: 9,
//             operacion: "+"
//         }
//     }
  
//     expect(calculatorLogic(req)).toBe(16);
// });

// test('delateData', async () => {
//     const req = {
//         body : {
//             operacion: "*"
//         }
//     }
//     await operaciones.deleteMany.mockResolvedValue(true);
  
//     expect(delateData(req)).toBe(false);
// });

// test('adds 7 + 9 to equal 16', () => {
//     const error = new Error ("No se ingreso uno de los numeros")
//     const req = {
//         body : {
//             numero2: 9,
//             operacion: "+"
//         }
//     }
//     expect(calculatorLogic(req)).toBe(error)
// });
