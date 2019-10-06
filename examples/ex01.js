class list {
    // Executado ao instanciar novo objeto
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
    }
}

// Herança
class TodoList extends list {
    constructor() {
        // Chama o constructor da classe Pai - boa pratica
        super();
        this.usuario = 'Gustavo Carvalho da Silva';
    }

    mostraUsuario(){
        console.log(this.usuario);
    }
}

const todoList = new TodoList();
document.getElementById('new').onclick = function () {
    todoList.add('new value');
};
todoList.mostraUsuario();
todoList.mostraUsuario();