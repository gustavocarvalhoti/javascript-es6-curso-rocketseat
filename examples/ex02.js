class TodoList {
    // O Statico não encherga o restante da classe, processa algo e já devolve
    // Geralmente usado para calculo ou replace
    static sum(a, b) {
        return a + b;
    }
}

console.log(TodoList.sum(10, 19));
console.log(TodoList.sum(10, 10));
console.log(TodoList.sum(10, 100));