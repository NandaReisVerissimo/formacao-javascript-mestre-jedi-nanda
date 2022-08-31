//as variáveis devem ser ser declaradas por letras ou _ ou $.. nunca inicie variável por números
/*o javascript é case sensitive... ele identifica caracteres maiúsculos e minúsculos, então variável idade é != de IDADE*/
let nome = "Prof. Madison";
let idade = 23
let pretensaoSalarial = 3277.22
let valeRefeicao = true

//aula sobre strings

let sobreNome = " Aguiar Rodrigues"
let nomeCompleto = nome + sobreNome
let texto = "texto\
texto\
texto"
let numeroString = "20" + 10
let numeroStringInv = 10 + "50"
let stringVar = "string text:"
let numeroVar = 10

console.log ("Nome completo:" + nomeCompleto)
console.log ("valor:" + numeroString + " - " + numeroStringInv)
console.log ("Tipo1:" + typeof stringVar)
console.log ("Tipo2:" + typeof numeroVar)
console.log ("Tamanho String:" + stringVar.length)
