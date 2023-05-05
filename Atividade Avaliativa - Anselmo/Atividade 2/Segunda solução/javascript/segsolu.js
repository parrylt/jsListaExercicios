alert("Cálculo de raiz quadrada")

// entrada de dados - matriz 'nums'
var nums = [];

//loop para adicionar valores na matriz 'nums'
for (i = 1; i <= 5; i++) {
    //variavel num recebe valor digitado no prompt e é convertido para inteiro
    var num = parseInt(prompt("Digite o " + i + "º número:"));
    //adiciona novos valores ao final da matriz 'nums' utilizando 'num' como referencia
    nums.push(num);
}

// loop para calcular o quadrado
// .length retorna o número de elementos da matriz 'nums'
for (i = 0; i < nums.length; i++) {
    //variavel quad recebe o calculo
  var quad = nums[i] * nums[i];
  document.write("<font class='sol2'> A raiz quadrada de "+ nums[i]+ " é: " + quad + "</font> <br>");
}