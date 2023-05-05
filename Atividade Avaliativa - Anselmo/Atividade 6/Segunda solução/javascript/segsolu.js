alert("Nomes decrescentes");
var nomes = [];
  for (i = 1; i <= 5; i++) 
      {
          var nome = prompt("Digite o " + i + "º nome: ");
          nomes.push(nome);
      }

nomes.reverse();
document.write("<font class='sol2'>" + nomes.join(", &nbsp") + "</font>");