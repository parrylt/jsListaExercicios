alert("Soma dos primeiros 50 números pares")

var soma = 0;

for(i = 2; i <= 100; i += 2)
{
    soma += i;
}

document.write("<font class='sol2'> A soma dos primeiros 50 números pares é de: " + soma + "</font>");