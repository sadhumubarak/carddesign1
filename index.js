function myFunction(e) {
console.log(e.checked);  
    var x = document.getElementById("pro1");
    var y = document.getElementById("pro2");
    var z = document.getElementById("pro3");
    if (!e.checked) {
        x.innerHTML = "19.99";
        y.innerHTML = "29.99";
        z.innerHTML = "39.99";
    } 
    
    else  {
      x.innerHTML = "199.99";
      y.innerHTML = "249.99" ;
      z.innerHTML = "399.99" ; 
    }
}
