let show = (list) => {
    if (list.length === 0) {
        return "Lista vacía";
    }
    else {
        return list;
    }
}
console.log(show([1, 2, 3]));
console.log(show([]));