

function butonSelected(){

    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)
   
    const sort =  Math.floor(Math.random() * (max - min + 1)) + min;

    document.getElementById("resultado").innerHTML=sort;
    
    alert (result)
    

}



