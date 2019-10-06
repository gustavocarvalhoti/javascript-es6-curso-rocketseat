const usuario = {
    nome: 'Gustavo',
    idade: 30,
    endereco: {
        cidade: 'Sumaré',
        estado: 'SP'
    },
    empresa: 'Padtec'
};
const {nome, ...resto} = usuario;
//console.log(resto);
//console.log(nome);

const arr = [1, 2, 3, 4, 5];
const [a, b, ...c] = arr;
//console.log(a, b, c);

//Param de funções
function sum(...params) {
    return params.reduce((total, next) => total + next)
}

//console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));

//SPREAD - Unir
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
//console.log(arr3);

const usuario2 = {...usuario, nome: 'Michelle'};
console.log(usuario);
console.log(usuario2);