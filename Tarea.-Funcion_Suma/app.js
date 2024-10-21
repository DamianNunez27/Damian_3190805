let num1 = prompt("Ingresa un numero: ");
let num2 = prompt("Ingresa un otro numero: ");
let res = suma(num1,num2);
console.log("El resultado es: "+res);

function suma (n1,n2){
    return parseInt(n1)+parseInt(n2);
}