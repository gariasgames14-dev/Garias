// Controle do Modal de Apoio
const modal = document.getElementById("modalApoio");
const btnApoio = document.getElementById("btnApoio");
const spanClose = document.querySelector(".close");

btnApoio.onclick = () => modal.style.display = "block";
spanClose.onclick = () => modal.style.display = "none";
window.onclick = (event) => { if (event.target == modal) modal.style.display = "none"; }

// Copiar Chave Pix
function copyPix() {
  const key = document.getElementById("pixKey").innerText;
  navigator.clipboard.writeText(key).then(() => {
    alert("Chave Pix copiada com sucesso!");
  });
}

// Lógica de Pesquisa (Futura)
const searchInput = document.getElementById('gameSearch');
searchInput.addEventListener('input', (e) => {
  const termo = e.target.value.toLowerCase();
  console.log("Pesquisando por:", termo);
  // Aqui você filtrará os itens da lista quando eles existirem
});