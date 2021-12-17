
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

