function calcular(){
    var one = document.getElementById("one").value;
    var two = document.getElementById("two").value;
    var three = document.getElementById("three").value;

  
    var media = (Number(one) + Number(two) + Number(three)) / 3;

    document.getElementById("media").value = media;   

    }

    

    document.getElementById("calcular").addEventListener("click", calcular);

    
    
  

    
