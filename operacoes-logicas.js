/*
 passou := falso
   escreva("Informe o nome do aluno: ")
   leia(nome)
   escreva("Informe a nota 1 do aluno: ")
   leia(nota1)
   escreva("Informe a nota 2 do aluno: ")
   leia(nota2)
   media := (nota1 + nota2) / 2
   
   se media >= 50 entao
      passou := verdadeiro
   fimse
   
   se ( passou ) && ( media >= 50 || media <= 70) entao
      escreval("Aprovado!", nome)
   senao
      escreval("Reprovado!", nome)
   fimse
*/
var nome, nota1, nota2, passou;
passou = false
nome = prompt("Informe o nome do aluno: ")
nota1 = prompt("Informe a nota 1 do aluno: ")
nota2 = prompt("Informe a nota 2 do aluno: ")

media = (parseInt(nota1) + parseInt(nota2)) / 2;


if (media >= 50)
    passou = true;

if (!passou)
    alert("Aprovado!"+ nome)
else
    alert("Reprovado!"+ nome)
    fimse