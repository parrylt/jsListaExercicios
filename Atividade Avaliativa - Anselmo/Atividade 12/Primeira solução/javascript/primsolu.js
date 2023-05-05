alert ("Digite cinco números");

var num1 = parseInt (prompt ("Digite o primeiro número"));
var num2 = parseInt (prompt ("Digite o segundo número"));
var num3 = parseInt (prompt ("Digite o terceiro número"));
var num4 = parseInt (prompt ("Digite o quarto número"));
var num5 = parseInt (prompt ("Digite o quinto número"));

document.write ("<font class='sol1'> A soma dos números digitados é " + (num1 + num2 + num3 + num4 + num5) + ". </font>")
document.write ("<br><font class='sol1'><br>A média desses números é " + ((num1 + num2 + num3 + num4 + num5)/5) + ". </font>")