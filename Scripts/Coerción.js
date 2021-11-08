// Coerción es la forma en la que podemos cambiar un tipo de valor a otro,
//  existen dos tipos de coerción:
// Coerción implícita = es cuando el lenguaje nos ayuda a cambiar el tipo de valor.
var a = 7 + "4" // String
var a = 7 * "4" // Number
// Coerción explicita = es cuando obligamos a que cambie el tipo de valor.
var a = 20;
var b = 20 + "";
var c = String(a) // to String
var d = Number(c) // to Number
var e = parseInt(b) // First number in the string