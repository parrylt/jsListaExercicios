alert ("Digite a altura e o gênero de cinco pessoas");

var alt1 = parseInt (prompt ("Digite a altura da primeira pessoa em cm"));
var gen1 = prompt ("Digite M ou F para o gênero da primeira pessoa.");
var alt2 = parseInt (prompt ("Digite a altura da segunda pessoa em cm"));
var gen2 = prompt ("Digite M ou F para o gênero da segunda pessoa");
var alt3 = parseInt (prompt ("Digite a altura da terceira pessoa em cm"));
var gen3 = prompt ("Digite M ou F para o gênero da terceira pessoa");
var alt4 = parseInt (prompt ("Digite a altura da quarta pessoa em cm"));
var gen4 = prompt ("Digite M ou F para o gênero da quarta pessoa");
var alt5 = parseInt (prompt ("Digite a altura da quinta pessoa em cm"));
var gen5 = prompt ("Digite M ou F para o gênero da quinta pessoa");

const alturas = [alt1 , alt2 , alt3 , alt4 , alt5];

const generos2 = [gen1 , gen2 , gen3 , gen4 , gen5];

var generosm = [gen1 , gen2 , gen3, gen4 , gen5].reduce((count, value) =>
 (value === ("M") ? count + 1 : count), 0)

var generosf = [gen1 , gen2 , gen3, gen4 , gen5].reduce((count, value) =>
 (value === ("F") ? count + 1 : count), 0)

var generosmaism = [gen1 , gen2 , gen3, gen4 , gen5].reduce((count, value) =>
 (value === ("m") ? count + 1 : count), 0)

document.write ("<font class='sol1'> Tem " + (generosm + generosmaism) + " pessoas do gênero masculino que você digitou. </font>");

var generosmaisf = [gen1 , gen2 , gen3, gen4 , gen5].reduce((count, value) =>
 (value === ("f") ? count + 1 : count), 0)

document.write ("<font class='sol1'><br>Tem " + (generosf + generosmaisf) + " pessoas do gênero feminino que você digitou. </font>");

if (alturas [0] > alturas [1] && alturas [0] > alturas [2] && alturas [0] > alturas [3] && alturas [0] > alturas [4]){
    document.write ("<br><font class='sol1'><br> A maior altura é de " + alturas [0] + " cm e pertence a uma pessoa de gênero " + generos2 [0] + ".</font>");
}
else if (alturas [1] > alturas [0] && alturas [1] > alturas [2] && alturas [1] > alturas [3] && alturas [1] > alturas [4]){
    document.write ("<br><font class='sol1'><br> A maior altura é de " + alturas [1] + " cm e pertence a uma pessoa de gênero " + generos2 [1]) + ".</font>";
}
else if (alturas [2] > alturas [0] && alturas [2] > alturas [1] && alturas [2] > alturas [3] && alturas [2] > alturas [4]){
    document.write ("<br><font class='sol1'><br> A maior altura é de " + alturas [2] + " cm e pertence a uma pessoa de gênero " + generos2 [2] + ".</font>");
}
else if (alturas [3] > alturas [0] && alturas [3] > alturas [1] && alturas [3] > alturas [2] && alturas [3] > alturas [4]){
    document.write ("<br><font class='sol1'><br> A maior altura é de " + alturas [3] + " cm e pertence a uma pessoa de gênero " + generos2 [3] + ".</font>");
}
else {
    document.write ("<br><font class='sol1'><br> A maior altura é de " + alturas [4] + " cm e pertence a uma pessoa de gênero " + generos2 [4] + ".</font>");
}