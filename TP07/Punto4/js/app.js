document.addEventListener('DOMContentLoaded',function(){
    let toggleBtn = document.getElementById("toggleBtn");
    toggleBtn.addEventListener('click',botonOjo)
});

function botonOjo(){
    let pass = document.getElementById("password");
    let toggleBtn = document.getElementById("toggleBtn");
    let estado = toggleBtn.getAttribute("data-state");

    if(estado === "hidden"){
        pass.type = "text";
        toggleBtn.src = "/Punto4/img/openeye.png";
        toggleBtn.setAttribute("data-state","abierto");
    }else{
        pass.type = "password";
        toggleBtn.src = "/Punto4/img/closeeye.png";
        toggleBtn.setAttribute("data-state","hidden")
    }
}

