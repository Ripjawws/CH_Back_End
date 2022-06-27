class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName() {
        return this.nombre + " " + this.apellido;
    }

    addMascota(mascota) {
        this.mascotas.push(mascota);
    }

    countMascotas() {
        return this.mascotas.length;
    }

    addBook(Name, Author) {
        let book = {
            name: Name,
            author: Author
        }

        this.libros.push(book);

        return book;
    }

    getBookNames() {
        return this.libros.map(book => book.name);
    }

}


let user = new Usuario("Elon", "Musk", [], []);
let book = user.addBook("El señor de las moscas", "William Golding");
let book2 = user.addBook("Fundacion", "Isaac Asimov");
let mascota = user.addMascota("Perro");
let mascota2 = user.addMascota("Gato");


console.log(user.getFullName());
console.log(user.countMascotas());
console.log(user.getBookNames());
