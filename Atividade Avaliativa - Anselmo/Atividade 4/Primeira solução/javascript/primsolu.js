alert ("Digite quatro idades");

var id1 = parseInt (prompt ("Digite a primeira idade"));
var id2 = parseInt (prompt ("Digite a segunda idade"));
var id3 = parseInt (prompt ("Digite a terceira idade"));
var id4 = parseInt (prompt ("Digite a quarta idade"));

const idades = [id1 , id2 , id3 , id4];

const maiorde18 = idades.filter (funcfilmaior);

const menorde18 = idades.filter (funcfilmenor);

function funcfilmaior (value, index, array){
    return value > 17;
}

function funcfilmenor (value, index, array){
    return value < 18;
}

var contagemgr = 0;
var contagempeq = 0;

if (id1 >= 18){
    contagemgr++
}
else{
  contagempeq++  
}

if (id2 >= 18){
    contagemgr++
}
else{
  contagempeq++  
}

if (id3 >= 18){
    contagemgr++
}
else{
  contagempeq++  

}
if (id4 >= 18){
    contagemgr++
}
else{
  contagempeq++  
}


document.write ("<font class='sol1'> Temos " + contagemgr + " pessoas maiores de idade e " + contagempeq + " pessoas menores de idade.<br></font><br>");