let numMaquina = Math.floor(Math.random()*(10-1)+1);
    console.log(numMaquina);
let numUsuario = parseInt ( prompt("Adivine un numero del 1 al 10"));

let vidas = 3;
    while (numMaquina !== numUsuario && vidas > 0 ){
        vidas --;
        numUsuario = parseInt(prompt("Vuelve a intentarlo, tus vidas son: "+b))
    }
    if (numMaquina === numUsuario){
        console.log("Ganaste");
    }else{
        console.log("Perdiste");
        console.log("El numero secreto era: "+numMaquina);
    }