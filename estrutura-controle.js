/*
 escreva("Nome: ")
   leia(nome)
   escreva("nota1: ")
   leia(nota1)
   escreva("nota2: ")
   leia(nota2)
   
   media := (nota1 + nota2) / 2
   
   se media >= 50 entao
      escreval("Aprovado!")
   senao
      escreval("Reprovado!")
   fimse
   
   escreval("media: ",media)
*/
var nome, nota1, nota2, media;
nome = prompt("Nome: ")
nota1 = prompt("nota1: ")
nota2 = prompt("nota2: ")

media = (parseInt(nota1) + parseInt(nota2)) / 2

if (media >= 50) {
    alert("Aprovado!" + nome)
} else{
    alert("Reprovado!" + nome)
}

