const botaoTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector(".modal");
botaoTrailer.addEventListener("click" , function(){
    modal.classList.add('aberto');
})
const fecharModal = document.querySelector('.fechar-modal');

fecharModal.addEventListener("click" , function(){
   modal.classList.remove('aberto');
})