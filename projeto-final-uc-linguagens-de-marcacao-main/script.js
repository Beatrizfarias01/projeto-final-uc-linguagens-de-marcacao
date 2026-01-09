const botao = document.getElementById("toggle-btn");
// botao para escurecer e clarear a tela
botao.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // opcional: trocar o ícone do botão
  if (document.body.classList.contains("dark-mode")) {
    botao.textContent = "☀️ Alternar Tema";
  } else {
    botao.textContent = "🌙 Alternar Tema";
  }
});
// btao contador de quantas vezes clicou
const btnTeste = document.getElementById("btn-teste");
const contador = document.getElementById("contador");
let cliques = 0;

btnTeste.addEventListener("click", () => {
  cliques++;
  contador.textContent = cliques;
});

//botao voltar ao topo
const btnTopo = document.getElementById("btn-topo");

// Mostrar/esconder botão conforme rolagem
window.addEventListener("scroll", () => {// Mostrar/esconder botão conforme rolagem
  if (window.scrollY > 200) {
    btnTopo.style.display = "block";
  } else {
    btnTopo.style.display = "none";
  }
});

// Voltar ao topo ao clicar
btnTopo.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
const botoes = document.querySelectorAll(".faq-btn");
// botao das setas para perguntas e respostas
botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    const resposta = botao.nextElementSibling;
    const seta = botao.querySelector(".faq-seta");

    resposta.classList.toggle("hidden");
    botao.classList.toggle("ativo");
  });
});
// uso do input para o primeiro formulario
const form = document.getElementById("form-busca");
const campo = document.getElementById("campo-busca");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // impede envio automático

  if (campo.value.trim() === "") {
    mensagem.textContent = "Erro: o campo não pode estar vazio!";
    mensagem.style.color = "red";
  } else {
    mensagem.textContent = "Sucesso: buscando livro...";
    mensagem.style.color = "green";
  }
});






