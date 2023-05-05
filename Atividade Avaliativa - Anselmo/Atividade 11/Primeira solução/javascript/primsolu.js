alert ("Digite cinco números");

var num1 = parseInt (prompt ("Digite o primeiro número"));
var num2 = parseInt (prompt ("Digite o segundo número"));
var num3 = parseInt (prompt ("Digite o terceiro número"));
var num4 = parseInt (prompt ("Digite o quarto número"));
var num5 = parseInt (prompt ("Digite o quinto número"));

if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5){
    document.write ("<font class='sol1'> Claramente o maior número é " + num1 + ". </font>");   
}
else if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5){
    document.write ("<font class='sol1'> Claramente o maior número é " + num2 + ". </font>");   
}
else if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5){
    document.write ("<font class='sol1'> Claramente o maior número é " + num3 + ". </font>");   
}
else if (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5){
    document.write ("<font class='sol1'> Claramente o maior número é " + num4 + ". </font>");   
}
else {
    document.write ("<font class='sol1'> Claramente o maior número é " + num5 + ". </font>");   
}