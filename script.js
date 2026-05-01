const searchInput = document.getElementById('gameSearch');
const gameItems = document.querySelectorAll('.game-item');

// Lógica de Pesquisa (Filtro)
searchInput.addEventListener('input', (e) => {
  const termo = e.target.value.toLowerCase();
  
  gameItems.forEach(item => {
    const nomeJogo = item.getAttribute('data-name');
    if (nomeJogo.includes(termo)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});

// Modal de Apoio
const modal = document.getElementById("modalApoio");
const btn = document.getElementById("btnApoio");
const span = document.querySelector(".close");

btn.onclick = () => modal.style.display = "block";
span.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; }

function copyPix() {
  navigator.clipboard.writeText("713cf2f2-4771-4c2c-a5d1-4d913ec2969a");
  alert("Pix copiado!");
}