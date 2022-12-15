$(document).ready(function(){

    let slideAtual = 1;
    let listaSlides = ['banner','banner-cs','banner-lol'];

        setInterval(mudarSlide, 4000);
//CONTINUAR AQUI
    function mudarSlide(){
        //remover o slide anterior
        if (slideAtual > 0) {
            $("#carrosel").removeClass(listaSlides[slideAtual -1])
        }
        else{
            $("#carrosel").removeClass(listaSlides[2])
        }
        //exibir slide atual
        $("#carrosel").addClass(listaSlides[slideAtual])

        //indicar qual slide atual
        console.log(slideAtual);
        slideAtual++
        if (slideAtual > 2) {
            slideAtual = 0
        } 
    }
})

function cadastrarGameMania() {
    const email = document.getElementById('campo').value;
    alert(`E-mail ${email} cadastrado com sucesso `)
    
}

function mostrarMenu($evento) {
    //identificar o elemento do menu
    let menu = document.getElementById('menu');
    
    if (getComputedStyle(menu).display =="none") {
        menu.style.display = "flex";
    } else {
        menu.style.display = "none";
    }
    //mudar visualização do menu
    event.preventDefault()
}