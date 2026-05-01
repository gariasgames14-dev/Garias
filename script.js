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

formIdeia.addEventListener('submit', function(e) {
  e.preventDefault();
  
  btnEnviar.innerText = "ENVIANDO...";
  btnEnviar.disabled = true;
  
  const data = Object.fromEntries(new FormData(this));
  
  // AJAX para FormSubmit (Substitua SEU_EMAIL_AQUI pelo seu e-mail)
  fetch("https://formsubmit.co/ajax/SEU_EMAIL_AQUI", {
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

// --- Lógica de Pesquisa ---
const searchInput = document.getElementById('gameSearch');
searchInput.addEventListener('input', (e) => {
  const termo = e.target.value.toLowerCase();
  // Por enquanto apenas loga, pois a lista está vazia ("Em breve")
  console.log("Pesquisando por:", termo);
});