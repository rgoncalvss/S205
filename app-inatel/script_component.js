class AulasComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.hoje = "ter";
  }

  connectedCallback() {
    this.loadData();
  }

  async loadData() {
    try {
      const response = await fetch("aulas.json");
      const aulas = await response.json();
      this.render(aulas);
    } catch (error) {
      console.error("Erro ao carregar os dados das aulas:", error);
    }
  }

  render(aulas) {
    const aulasDia = aulas.filter((a) => a.data === this.hoje);

    // Create link element for external CSS
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "main.css"; // or your component-specific CSS

    this.shadowRoot.innerHTML = `
      ${link.outerHTML}
      <div>
        ${aulasDia
          .map((a) => {
            const crValue = parseFloat(a.nota);
            let crClass = "cr-high";

            if (crValue < 6) crClass = "cr-low";
            else if (crValue >= 6 && crValue < 8) crClass = "cr-medium";

            return `
            <div class="comp-aula">
              ${
                a.prova_alert
                  ? `<div class="prova-alert">PROVA: ${a.prova}</div>`
                  : ""
              }
              <div class="titulo-aula">${a.disciplina}</div>
              <div class="detalhes-aula">
                Local e Horário: <b>${a.local} - ${a.horario}</b>
              </div>
              <div class="metricas">
                <div class="detalhes-aula">
                  FALTAS: <b>${a.frequencia}</b>
                </div>
                <div class="detalhes-aula">
                  CR: <span class="${crClass}">${a.nota}</span>
                </div>
              </div>
            </div>
          `;
          })
          .join("")}
      </div>
    `;
  }
}

customElements.define("aulas-component", AulasComponent);
