function mostrarLista(lista) {
    if (lista.length === 0) {
        return "Lista vacía";
    }
    else {
        return lista;
    }
}

showList = mostrarLista([1, 2, 3, 4, 5]);
console.log(showList);
showList = mostrarLista([]);
console.log(showList);