alert("Intervalo entre os números digitados")
var num1 = parseInt(prompt("Digite o 1º número:"));
var num2 = parseInt(prompt("Digite o 2º número:"));

document.write("<font class='sol2'> Os números no intervalo entre " + num1 + " e " + num2 + " são: </font></br><br>");

for(i = num1 + 1; i < num2; i++)
{
  document.write("<font class='sol2'>" + i + "</font></br>");
}