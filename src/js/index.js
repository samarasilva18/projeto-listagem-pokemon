/*
    O que precisamos fazer? - qando clicarmos no botão de troca de tema temos que alterar a cor do tema da página para as cores do tema claro ou do tema escuro

    - Objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body para que os estilos do modo escuro sejam aplicados e mudar a imagem pra lua
        - Passo 1 - Pegar no JS o elemento HTML correspondente ao botão de troca de tema
        - Passo 2 - Dar um jeito de pegar no JS o elemento HTML correspondente ao Body
        - Passo 3 - Dar um jeito de identificar o clique do usuário no botão de troca de tema
        - Passo 4 - Adicionar a classe modo-escuro no body
        - Passo 5 - Trocar a imagem do botão de alterar tema para lua
    - Objetivo 2 - Quando clicar no botão de troca de tema, caso o body já tenha a classe modo escuro, remover a classe do body para mudar pro modo claro e mudar a imagem para o sol
        - Passo 6 - Remover a classe do modo-escuro do body
*/

const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");
   
    body.classList.toggle("modo-escuro");
   
    if (modoEscuroEstaAtivo) {
        imagemBotaoTrocaDeTema.setAttribute("src", "https://www.freeiconspng.com/uploads/sun-icon-22.png")
    } else {
        imagemBotaoTrocaDeTema.setAttribute("src", "https://www.freeiconspng.com/uploads/crescent-moon-png-18.png")
    }
});