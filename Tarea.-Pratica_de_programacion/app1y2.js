function serie(XV, XH) {
    let ver = "";
    for (let i = 0; i < XV; i++) {
        ver += "X\n";
    }
    console.log(ver);
    let hor = ""
    for (let i = 0; i < XH; i++) {
        hor += "X";
    }
    console.log(hor);
}

XV = parseInt(prompt("Ingrese el numero de X verticales"));
XH = parseInt(prompt("Ingrese el numero de X horizontales"));
serie(XV, XH);
