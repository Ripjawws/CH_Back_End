function crearMultiplicador(numero1) {
    return function(numero) {
        return numero * numero1;

    }

    
}
let multiplicador = crearMultiplicador(2);
console.log(multiplicador(3));
console.log(multiplicador(4));

// Missing duplicador & triplicador