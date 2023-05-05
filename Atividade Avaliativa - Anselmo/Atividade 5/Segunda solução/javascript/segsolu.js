alert("Altura e sexo de 5 pessoas");

var qtdHomens = 0, qtdMulheres = 0, maiorAltura = 0;
var sexoMaiorAltura;

for(i = 1; i <= 5; i++) 
{
  var altura = parseFloat(prompt("Digite a altura da " + i + "ª pessoa em cm: "));
  var sexo = prompt("Digite o sexo da " + i + "ª pessoa (M/F): ");

if(sexo.toUpperCase() === "M" ? qtdHomens++ : qtdMulheres++) 
    if(altura > maiorAltura) 
        {
            maiorAltura = altura;
            sexoMaiorAltura = sexo.toUpperCase() === "M" ? "homem" : "mulher";
        }
}
document.write("<font class='sol2'> Total de homens: " + qtdHomens + "<br>" + "Total de mulheres: " + qtdMulheres + "<br>" 
  + "Maior altura é " + maiorAltura + " cm e é de um(a) " + sexoMaiorAltura + ". </font>");