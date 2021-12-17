function acaoBotao() {
    var nome, idade, limite, contador
    limite = prompt("Informe quantidade de vezes para verificar a idade: ")
    contador = 0
    
    while(contador < limite){
        nome = prompt("Informe o nome: ")
        idade = prompt("Informe a idade de "+ nome +": ")
        if ( idade > 18 )
            document.getElementById("paragrafo").innerText = nome + " é maior de idade!"
        else
            document.getElementById("paragrafo").innerText = nome + " é menor de idade!"
            contador++ 
        }
}
