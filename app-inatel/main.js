document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("menu-toggle").addEventListener("click", function () {
    const menu = document.getElementById("theme-menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  });

  // Fechar o menu ao clicar fora dele
  document.addEventListener("click", function (event) {
    const menu = document.getElementById("theme-menu");
    const menuButton = document.getElementById("menu-toggle");

    if (
      menu.style.display === "block" &&
      !menu.contains(event.target) &&
      !menuButton.contains(event.target)
    ) {
      menu.style.display = "none";
    }
  });

  // Aplicar tema salvo ao carregar
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    changeTheme(savedTheme);
  }
});

function changeTheme(theme) {
  const root = document.documentElement;

  if (theme === "inatel") {
    // Aplicar tema Inatel
    root.style.setProperty("--cor-primaria", "#003C71");
    root.style.setProperty("--cor-secundaria", "#F7B500");
    root.style.setProperty("--cor-texto", "#FFFFFF");
    root.style.setProperty("--cor-background", "#FFFFFF");
    root.style.setProperty("--cor-secao1", "#003C71");
    root.style.setProperty("--cor-secao2", "#003C71");
    root.style.setProperty("--cor-secao3", "#003C71");
    root.style.setProperty("--cor-icones", "#F7B500");
  } else if (theme === "moderno") {
    // Aplicar tema Verde moderno
    root.style.setProperty("--cor-primaria", "#2E7D32");
    root.style.setProperty("--cor-secundaria", "#A5784B");
    root.style.setProperty("--cor-texto", "#FFFFFF");
    root.style.setProperty("--cor-background", "#F5F5DC");
    root.style.setProperty("--cor-secao1", "#2E7D32"); // Verde escuro
    root.style.setProperty("--cor-secao2", "#43A047"); // Verde médio
    root.style.setProperty("--cor-secao3", "#66BB6A"); // Verde claro
    root.style.setProperty("--cor-icones", "#F5F5DC");
  }

  // Atualizar a aparência do botão de menu
  document.getElementById("menu-toggle").style.borderColor =
    theme === "inatel" ? "#FFFFFF" : "#F5F5DC";

  // Esconder o menu de temas após a seleção
  document.getElementById("theme-menu").style.display = "none";

  // Salvar escolha do tema
  localStorage.setItem("theme", theme);
}
