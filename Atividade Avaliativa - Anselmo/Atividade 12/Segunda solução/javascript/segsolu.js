alert("Cálculo de soma e média")

var qtdNum = 5;
var soma = 0;
 
for(i = 1; i <= 5; i++)
    {
    var num = parseFloat(prompt("Digite o " + i + "º número: "));
    soma += num;
    }
    var media = (soma / qtdNum);
    document.write("<font class='sol2'> A soma de é " + soma.toFixed(2) + " e a média é de " + media.toFixed(2) + ". </font>");