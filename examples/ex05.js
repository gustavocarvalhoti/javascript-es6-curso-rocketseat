// Setando valores default
const sum = (a = 3, b = 6) => a + b;
//console.log(sum(1));
//console.log(sum());

const usuario = {
    nome: 'Gustavo',
    idade: 30,
    endereco: {
        cidade: 'Sumaré',
        estado: 'SP'
    }
};

// Desestruturação, pegar o valor mais fácil
const {nome, idade} = usuario;
//console.log(nome);
//console.log(idade);

// Funciona para pametros de funções tb
const getNomeIdade = ({nome, idade}) => console.log('Nome: ' + nome + ' - Idade: ' + idade);
getNomeIdade(usuario);
