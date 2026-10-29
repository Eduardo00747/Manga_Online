// Passo 1 - Listar paginas
const pages = [
    "./Assests/dragon-ball-vol-1-s Capa.jpg",
    "./Assests/1.jpg",
    "./Assests/2.jpg",
    "./Assests/3.jpg",
    "./Assests/4.jpg",
    "./Assests/5.jpg",
    "./Assests/6.jpg",
    "./Assests/7.jpg",
    "./Assests/8.jpg",
    "./Assests/9.jpg",
    "./Assests/10.jpg",
    "./Assests/11.jpg",
    "./Assests/12.jpg",
    "./Assests/13.jpg",
    "./Assests/14.jpg",
    "./Assests/15.jpg",
    "./Assests/16.jpg",
    "./Assests/17.jpg",
    "./Assests/18.jpg",
    "./Assests/19.jpg",
    "./Assests/20.jpg",
    "./Assests/21.jpg",
    "./Assests/22.jpg",
    "./Assests/23.jpg",
    "./Assests/24.jpg",
    "./Assests/25.jpg",
    "./Assests/26.jpg",
    "./Assests/27.jpg",
    "./Assests/28.jpg",
    "./Assests/29.jpg",
    "./Assests/30.jpg",
    "./Assests/31.jpg",
];

// Passo 2 - Contagem da Lista
let currentPageIndex = 0;

// Passo 3 - Seleção dos documentos DOM
const imgElement = document.getElementById("manga-page");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");
const pageCounter = document.getElementById("page-counter");

// Passo 4 - Funções para atualizar a tela
function updateReader(){
    // Passo 1 - Atualizar Imagem
    imgElement.src = pages [currentPageIndex];

    // Passo 2 - Atualizar o texto do contador 
    pageCounter.textContent = `Pagina ${currentPageIndex + 1} de ${pages.length}`;

    // Passo 3 - Controlar o estado dosbotões
    btnPrev.disabled = currentPageIndex === 0;
    btnNext.disabled = currentPageIndex === pages.length - 1;
}

// Passo 5 - Evento de cliques do botões 
// Botão Anterior 
btnPrev.addEventListener("click", () =>{
    if (currentPageIndex > 0 ) {
        currentPageIndex--;
        updateReader();
    }
})

// Botão Próximo
btnNext.addEventListener("click", () => {
    if (currentPageIndex < pages.length - 1 ) {
        currentPageIndex++;
        updateReader();
    }
})

// Passo 6 - Controle de setas 
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft" && currentPageIndex > 0) {
    currentPageIndex--;
    updateReader();
  }  else if (event.key === "ArrowRight" && currentPageIndex < pages.length - 1) {
    currentPageIndex++;
    updateReader();
  }
})

updateReader()