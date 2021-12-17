function acaoBotao() {
let numero, fatorial;
numero = prompt("Digite o número para calcular o fatorial: ")
fatorial = 1
for (let contador = 1; contador <= numero; contador++) {
fatorial = fatorial * contador        
} 

document.getElementById("paragrafo").innerText = "O fatorial de "+ numero + " é: "+ fatorial  
}