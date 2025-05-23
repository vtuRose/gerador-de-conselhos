const botao = document.querySelector("#botaoConselho");
const idDoConselho = document.querySelector("#id-conselho");
const textoDoConselho = document.querySelector("#descricao-conselho");

async function pegarConselho() {
  try {
    const url = "https://api.adviceslip.com/advice";
    const resposta = await fetch(url);
    return await resposta.json();
  } catch (err) {
    console.log("Erro ao pegar o conselho:", err);
  }
}

async function mostrarConselho() {
  try {
    const conselho = await pegarConselho();
    idDoConselho.innerText = `A D V I C E #${conselho.slip.id}`;
    textoDoConselho.innerText = conselho.slip.advice;

    console.log(conselho);
    console.log(conselho.slip.id, conselho.slip.advice);
  } catch (err) {
    console.log("Erro ao mostrar o conselho:", err);
  }
}

botao.addEventListener("click", () => {
  mostrarConselho();
});
