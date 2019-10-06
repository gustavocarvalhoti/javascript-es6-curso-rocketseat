const arr = [1, 2, 3, 4, 5, 8, 9];

// Percorre o array e retorna os valotes alterados para uma nova lista
const newArr = arr.map(function (item) {
    return item * 2;
});
//console.log(newArr);

// Consumir o vetor e retornar um numero
const sum = arr.reduce(function (total, next) {
    return total + next
});
//console.log(sum);

// Filtro
const filter = arr.filter(function (item) {
    return item % 2 === 0;
});
//console.log(filter);

// Pesquisar no array
const find = arr.find(function (item) {
    return item === 4;
});
console.log(find);