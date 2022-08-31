//Funcional
function sejaBemVindo(){
    console.log("Seja bem vindo a formação JavaScript mestre Jedi");
}

console.log("Chamando a função seja bem vindo sejaBemVindo():");
sejaBemVindo();

//minha criação agora
function cliqueAqui(){
    alert("Jesus Cristo é a salvação!! +");
}

//Pool
var objProfessor = {
    nome: "Prof. Madson Aguiar",
    curso: "Formação JavaScript mestre Jedi!!! :)",
    minstrarAula: function(){
        console.log("Ministrando aula de JavaScript!");
    }
};

console.log ("objeto professor"); //mostrando o objeto como um todo no console
console.log (objProfessor);

console.log ("acessando propriedades objeto: objProfessor.nome"); //é demonstrando como acessa as propriedades
console.log(objProfessor.nome); //precisamos colocar o console para que ele demonstre as propriedades que estamos chamando
console.log(objProfessor.curso);

console.log ("chamando método do objeto professor: objProfessor.ministrarAula()");
objProfessor.minstrarAula ();

