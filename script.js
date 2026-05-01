// --- Controle do Modal ---
const modal = document.getElementById("modalApoio");
const btnApoio = document.getElementById("btnApoio");
const spanClose = document.querySelector(".close");

btnApoio.onclick = () => {
  modal.style.display = "block";
}

spanClose.onclick = () => {
  modal.style.display = "none";
}

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// --- Função para Copiar Chave Pix ---
function copyPix() {
  const key = document.getElementById("pixKey").innerText;
  navigator.clipboard.writeText(key).then(() => {
    alert("Chave Pix copiada com sucesso!");
  });
}

// --- Envio do Formulário de Ideias via AJAX ---
const formIdeia = document.getElementById('ideia-form');
const btnEnviar = document.getElementById('btnEnviar');
const statusMsg = document.getElementById('status-envio');

if (formIdeia) {
  formIdeia.addEventListener('submit', function(e) {
    e.preventDefault();
    
    btnEnviar.innerText = "ENVIANDO...";
    btnEnviar.disabled = true;
    
    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());
    
    fetch("https://formsubmit.co/ajax/gariasgames14@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => {
        if (response.ok) {
          formIdeia.reset();
          statusMsg.innerHTML = "<span style='color: #2ecc71;'>✅ Ideia enviada! Se aprovada, entraremos em contato.</span>";
          setTimeout(() => { statusMsg.innerHTML = ""; }, 5000);
        } else {
          statusMsg.innerHTML = "<span style='color: #ff4444;'>❌ Erro no servidor.</span>";
        }
      })
      .catch(error => {
        statusMsg.innerHTML = "<span style='color: #ff4444;'>❌ Erro ao enviar. Tente novamente mais tarde.</span>";
      })
      .finally(() => {
        btnEnviar.innerText = "ENVIAR MINHA IDEIA";
        btnEnviar.disabled = false;
      });
  });
}

// --- Lógica de Pesquisa ---
const searchInput = document.getElementById('gameSearch');
if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    const termo = e.target.value.toLowerCase();
    console.log("Pesquisando por:", termo);
  });
}