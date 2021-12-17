/*
// Seção de Declarações das variáveis
nome: caracter
numero: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
escreva ("Digite o nome: ")
leia (nome)
escreva ("Digite o número: ")
leia (numero)

escreval(nome, ": ", numero)
*/

var nome, numero;

nome = prompt("Digite seu nome: ")
numero = prompt("Digite seu numero: ")

document.getElementById("paragrafo").innerText = nome + ": " + numero