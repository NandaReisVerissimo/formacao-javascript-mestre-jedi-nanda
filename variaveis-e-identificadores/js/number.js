let idade = 28 //o java já interpreta e sabe que linguagem é

console.log (idade)
console.log (typeof idade)

let precoFeijao = 2.89

 console.log (precoFeijao)
 console.log (typeof precoFeijao)

 let valor = 23+33

 console.log (valor)
 console.log (typeof valor)

 //a string prevalece sobre o number, então abaixo ele concatena as informações, gerando um resultado 2333, porém se acrescentamos o sinal de + na frente da string 23 ele soma os dois números
 //Se colocamos o sinal de - na frente de um número ele enxerga como negativo

 let valor2 = "23"+33

 console.log (valor2)
 console.log (typeof valor2)

 // o javascript tem um valor máximo suportado para número

 console.log (Number.MAX_VALUE)
 console.log (Number.MIN_VALUE)

 console.log (valor)
 console.log (valor.toString(10))
 console.log (valor.toString(2))
 console.log (valor.toString(8))
 console.log (valor.toString(16))
