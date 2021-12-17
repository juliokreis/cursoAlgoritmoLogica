
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