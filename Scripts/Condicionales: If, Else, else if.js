var op1 = "Piedra";
var op2 = "Papel";
var op3 = "Tijera";

var resultado = function(user, cpu){
    if(user != cpu){
        if(user === op1 && cpu === op3){
            console.log("el usuario GANO con "+ op1)
        }else if(user === op2 && cpu === op1){
            console.log( "el usuario GANO con " + op2)
        }else if(user === op3 && cpu === op2){
            console.log("el usuario GANO con " + op3)
        }else{
            console.log("La CPU Gano!!")
        }
    }else if(user === cpu){
        console.log("Empate")
    }
};

resultado(op1,op3) //el usuario GANO con Piedra```

condition ? true : false;

var numero = 10;

resultado = numero === 1 ? "Si es uno" : "No es 1";

// SWITCH
numero = 10;
switch(numero){
    case 1:
        console.log("Es uno");
        break;
    case 2:
        console.log("Es dos");
        break;
    case 3:
        console.log("Es tres");
        break;
    case 4:
        console.log("Es cuatro");
        break;
    default:
        console.log("No es ninguno de los anteriores");
}