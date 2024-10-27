

function butonSelected() {

    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)

    if (min >= max) {
        alert("OPA! VALOR MINIMO NÃO PODE SER MAIOR QUE O VALOR MAXIMO!!")
    }

    const sort = Math.floor(Math.random() * (max - min + 1)) + min;

    document.getElementById("resultado").innerHTML = sort;


    alert(result)

}



