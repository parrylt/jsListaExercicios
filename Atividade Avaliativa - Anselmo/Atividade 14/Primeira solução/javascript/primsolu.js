alert ("Digite dois números inteiros");

var num1 = parseInt (prompt ("Digite o primeiro número"));
var num2 = parseInt (prompt ("Digite o segundo número"));

document.write ("<font class='sol1'> Os números entre os números que você digitou são:<br></font><br><br>")


while (num1 < (num2 - 1 )){
    num1++
    document.write ("<font class='sol1'>" + num1 + "</font><br>")
}