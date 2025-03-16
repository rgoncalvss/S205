document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("menu-toggle").addEventListener("click", function () {
    const menu = document.getElementById("theme-menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  });

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

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    changeTheme(savedTheme);
  }
});

function changeTheme(theme) {
  const root = document.documentElement;

  if (theme === "inatel") {
    root.style.setProperty("--cor-primaria", "#003C71");
    root.style.setProperty("--cor-secundaria", "#F7B500");
    root.style.setProperty("--cor-texto", "#FFFFFF");
    root.style.setProperty("--cor-background", "#FFFFFF");
    root.style.setProperty("--cor-secao1", "#003C71");
    root.style.setProperty("--cor-secao2", "#003C71");
    root.style.setProperty("--cor-secao3", "#003C71");
    root.style.setProperty("--cor-icones", "#F7B500");
  } else if (theme === "moderno") {
    root.style.setProperty("--cor-primaria", "#2E7D32");
    root.style.setProperty("--cor-secundaria", "#A5784B");
    root.style.setProperty("--cor-texto", "#FFFFFF");
    root.style.setProperty("--cor-background", "#F5F5DC");
    root.style.setProperty("--cor-secao1", "#2E7D32");
    root.style.setProperty("--cor-secao2", "#43A047");
    root.style.setProperty("--cor-secao3", "#66BB6A");
    root.style.setProperty("--cor-icones", "#F5F5DC");
  }

  document.getElementById("menu-toggle").style.borderColor =
    theme === "inatel" ? "#FFFFFF" : "#F5F5DC";

  document.getElementById("theme-menu").style.display = "none";

  localStorage.setItem("theme", theme);
}

const eventos = [
  {
    id: 1,
    title: "Semana do Software 2025",
    date: "12/05",
    time: "10:00",
    location: "Salão de Eventos",
    type: "tech",
    description:
      "Uma semana inteira dedicada à tecnologia e inovação, com palestras, workshops e hackathons.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800&h=400",
  },
  {
    id: 2,
    title: "Workshop de IoT",
    date: "12/01",
    time: "08:00",
    location: "Laboratório CS&I",
    type: "tech",
    description:
      "Workshop prático sobre Internet das Coisas e suas aplicações na indústria 4.0.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=400",
  },
  {
    id: 3,
    title: "Festa dos Alunos 2025",
    date: "18/05",
    time: "19:00",
    location: "Área Esportiva do Inatel",
    type: "cultural",
    description:
      "Venha comemorar a melhor Festa dos Alunos de todos os tempos!",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800&h=400",
  },
  {
    id: 4,
    title: "Feira de Oportunidades",
    date: "04/05",
    time: "10:00",
    location: "Salão de Eventos",
    type: "academic",
    description:
      "Venha conhecer empresas e projetos com destaque na área da engenharia.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800&h=400",
  },
];

const carousel = document.querySelector(".carousel");

eventos.forEach((event) => {
  const eventCard = document.createElement("div");
  eventCard.classList.add("event-card");
  eventCard.innerHTML = `
    <img src="${event.image}" alt="${event.title}">
    <div class="info">
      <h3>${event.title}</h3>
      <p>${event.description}</p>
      <p>
        <span class="material-symbols-outlined icon">event</span> ${event.date} às ${event.time} 
        <span class="material-symbols-outlined icon">pin_drop</span> ${event.location}
      </p>
    </div>
  `;
  carousel.appendChild(eventCard);
});

let currentIndex = 0;
const totalEvents = eventos.length;

function updateCarousel() {
  const eventCards = document.querySelectorAll(".event-card");
  eventCards.forEach((card, index) => {
    card.style.display = index === currentIndex ? "block" : "none";
  });
}

updateCarousel();

document.getElementById("prevBtn").addEventListener("click", () => {
  currentIndex = currentIndex === 0 ? totalEvents - 1 : currentIndex - 1;
  updateCarousel();
});

document.getElementById("nextBtn").addEventListener("click", () => {
  currentIndex = currentIndex === totalEvents - 1 ? 0 : currentIndex + 1;
  updateCarousel();
});
