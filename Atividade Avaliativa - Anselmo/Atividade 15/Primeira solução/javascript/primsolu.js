alert ("Digite dois números inteiros.");

var num1 = parseInt (prompt ("Digite o primeiro número"));
var num2 = parseInt (prompt ("Digite o segundo número"));
const soma = [];

document.write ("<font class='sol1'> Os números entre " + num1 + " e " + num2 + " é: </font><br><br>")

while (num1 < (num2 - 1 )){
    num1++
    soma.push (num1)
    document.write ("<font class='sol1'>" + num1 + ", </font></br>")
}

var total =0;

for (var i = 0; i < soma.length; i++ ){
    total += soma[i];
}

document.write ("<font class='sol1'><br>A soma de todos os números entre os que você digitou é: " + total + "</font>");