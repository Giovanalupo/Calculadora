//Declaração de variáveis
let operação = prompt("Informe a operação desejada:")
let numero1 = Number(prompt("Informe o primeiro numero:"))
let numero2 = Number(prompt("Informe o segundo numero:"))

//Verificar a operação matemática selecionad
if(operação == "+") {
     let resultado = numero1 + numero2
     document.write("O resultado da soma é " + resultado + ".")

}

else if (operação == "-") {
    let resultado = numero1 - numero2
    document.write ("O resultado da subtraçaõ é " + resultado + '.')
}

else if (operação == '*') {
    let resultado = numero1 * numero2
    document.write ("O resultado da multiplicação é" + resultado + ".")
}
   
else if (operação == "/") {
    let resultado = numero1 / numero2 
    document.write ("O resultado da divisão é" + resultado + ".")
}