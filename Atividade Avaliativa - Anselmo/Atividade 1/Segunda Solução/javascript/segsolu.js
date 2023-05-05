alert("Cálculo de média")

var qtdNotas = parseInt(prompt("Digite quantas notas deseja calcular: "));
var notas = 0;

for (i = 0; i < qtdNotas; i++)
{
    var nota = parseFloat(prompt("Digite a nota: "));
    notas += nota;
}

var media = (notas / qtdNotas);
document.write("<font class='sol2'> Sua média é de: " + media.toFixed(1) + "<br> </font>");