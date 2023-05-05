var num;

do 
{
  num = parseFloat(prompt("Digite uma nota entre 0 e 10:"));
    if (num < 0 || num > 10) 
      {
        alert("Nota inválida! Digite uma número entre 0 e 10.");
      }
} 
while (num < 0 || num > 10);
document.write("<font class='sol2'>O número " + num + " é valido! </font>");