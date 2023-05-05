var nota = parseInt (prompt ("Digite uma nota entre zero e dez"));



    if (nota > -1 && nota < 11){
        document.write ("<font class='sol1'> Valor válido. </font>");
    }
    else 
    {
        while (nota < 0 || nota > 10){
            alert ("Valor inválido!");
            var nota = parseInt (prompt ("Digite uma nota entre zero e dez"));
            if (nota > -1 && nota < 11){
                document.write ("<font class='sol1'> Valor válido. </font>");
            }
        }
    }


