alert("Cálculo de qual é o maior número")

var nums = [];

    for (i = 1; i <= 5; i++)
    {
        var num = parseInt(prompt("Digite o " + i + "º número:"));
        nums.push(num);
    }

var maiorNum = nums[0];
    for (i = 1; i < nums.length; i++) 
    {
        if (nums[i] > maiorNum) 
        {
            maiorNum = nums[i];
        }
    }
    document.write("<font class='sol2'> O maior número é " + maiorNum + ". </font>");