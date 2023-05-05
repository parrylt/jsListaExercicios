alert ("Digite uma data")

var data = prompt("Digite alguma data XX/XX/XXXX")

var ano= data.slice(6)
var mes= data.slice(3,5)
var dia= data.slice(0,2)

document.write ("<font class='sol1'> Dia: " + dia + "</font><br>")
document.write ("<font class='sol1'> Mês: " + mes + "</font><br>")
document.write ("<font class='sol1'> Ano: " + ano + "</font><br>")