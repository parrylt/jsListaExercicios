alert("Cálculo de idade")

var qtdIdades = parseInt(prompt("Digite quantas idades deseja calcular: "));
var idade = 0, maiores = 0, menores = 0;

for (i = 0; i < qtdIdades; i++)
{
    var num = parseInt(prompt("Digite a idade: "));
    idade = num;
    if (idade >= 18) {maiores++;}
    else {menores++}
}

document.write("<font class='sol2'>" + maiores + " pessoa(s) é(são) maior(es) de 18 anos. </font><br>")
document.write("<font class='sol2'>" + menores + " pessoas(s) é(são) menor(es) de 18 anos. </font>")
 
