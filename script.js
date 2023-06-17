function calcular(){
    var one = parseFloat(document.getElementById("one").value);
    var two = parseFloat(document.getElementById("two").value);
    var three = parseFloat(document.getElementById("three").value);

  
    var media = (Number(one) + Number(two) + Number(three)) / 3;

    document.getElementById("calcular").innerHTML = "A MÉDIA É:" + media.toFixed(2);  

    }

    

   

    
    
  

    
