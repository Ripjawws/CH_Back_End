class Contador {
    constructor(nombre){
        this.nombre = nombre;
        this.cuenta = 0;
    }
    static cuentaTotal = 0;

    incrementar(){
        this.cuenta++;
        Contador.cuentaTotal++;
    }

    obtenerResponsable(){
        return this.nombre;
    }

    obtenerCuentaIndividual(){
        return this.cuenta;
    }

    obtenerCuentaGlobal(){
        return Contador.cuentaTotal;
    }
}


let contador1 = new Contador("Juan");
let contador2 = new Contador("Pedro");
let contador3 = new Contador("Maria");

contador1.incrementar();
contador1.incrementar();
contador2.incrementar();
contador3.incrementar();


console.log(contador1.obtenerResponsable());
console.log(contador1.obtenerCuentaIndividual());
console.log(contador1.obtenerCuentaGlobal());
console.log(contador2.obtenerResponsable());
console.log(contador2.obtenerCuentaIndividual());
console.log(contador2.obtenerCuentaGlobal());
console.log(contador3.obtenerResponsable());
console.log(contador3.obtenerCuentaIndividual());
console.log(contador3.obtenerCuentaGlobal());
console.log(Contador.cuentaTotal);
