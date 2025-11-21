// Destacar link ativo do menu
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    // Se o link tem href diferente de "#", permite navegação normal
    if (link.getAttribute("href") !== "#") {
      // Permite que o link funcione normalmente
      return;
    }
    
    e.preventDefault(); // só previne se for link vazio (#)

    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");

    console.log("Seção selecionada:", link.dataset.section);
  });
});

// Clique nas categorias
const categories = document.querySelectorAll(".category");

categories.forEach(cat => {
  cat.addEventListener("click", () => {
    const nome = cat.dataset.category;
    alert(`Você selecionou a categoria: ${nome}`);
    // Aqui depois você pode redirecionar para outra página:
    // window.location.href = `categorias/${nome.toLowerCase()}.html`;
  });
});

/* segunda parte: formulário de cadastro */

// ===== FORMULÁRIO DE CADASTRO =====
const cadastroForm = document.getElementById("cadastroForm");

if (cadastroForm) {
  cadastroForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const consent = document.getElementById("consentimento").checked;

    if (!nome || !email || !consent) {
      alert("Por favor, preencha Nome, E-mail e aceite o consentimento para prosseguir.");
      return;
    }

    // Aqui seria o ponto para integrar com backend / API de e-mail marketing.
    // Como o projeto é estático (GitHub Pages), vamos apenas simular o envio.

    alert("Cadastro realizado com sucesso! Vamos te redirecionar para o Marketing Place.");

    // Redireciona para a página de Marketing Place
    window.location.href = "marketplace.html";
  });
}
