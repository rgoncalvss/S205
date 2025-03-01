// objeto do usuário
const usuario = {
  nome: "Raphael",
  matricula: "123456",
  pendencia: false,
  acessibilidade: true,
};

// lista objetos de armários
const armarios = [
  { id: 1, formato: "padrao", status: true, acessivel: false },
  { id: 2, formato: "padrao", status: true, acessivel: false },
  { id: 3, formato: "padrao", status: true, acessivel: false },
  { id: 4, formato: "padrao", status: false, acessivel: true },
  { id: 5, formato: "padrao", status: false, acessivel: true },
  { id: 6, formato: "duplo", status: true, acessivel: true },
  { id: 7, formato: "duplo", status: false, acessivel: true },
  { id: 8, formato: "duplo", status: false, acessivel: true },
];

const formatarData = (data, timeZone) => {
  return data.toLocaleDateString("pt-br", {
    timeZone: timeZone,
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
};

// função para reserva do armário, incluindo as regras.
function reservarArmario() {
  // obter tipo de armário selecionado pelo usuário no html.
  let tipoSelecionado = document.getElementById("tipoArmario").value;

  // na lista, filtrar apenas os armários que estão disponíveis e que são acessiveis ao usuário.
  let armariosDisponiveis = armarios.filter(
    (a) =>
      a.formato === tipoSelecionado &&
      a.status === true &&
      usuario.acessibilidade === a.acessivel
  );

  // caso não exista armário disponível, retorna para o usuário mensagem.
  if (armariosDisponiveis.length === 0) {
    document.getElementById(
      "resultado"
    ).innerText = `Olá, ${usuario.nome}! Nenhum armário disponível para o tipo selecionado.`;
    return;
  }

  // Caso exista armário(s) disponíveil, seguimos sorteando uma opção.
  let armarioSorteado =
    armariosDisponiveis[Math.floor(Math.random() * armariosDisponiveis.length)];

  // Depois localizamos o armário emprestado na lista de armarios e mudamos o status do armário.
  let armarioEmprestado = (armarios.find(
    (armario) => armario.id === armarioSorteado.id
  ).status = false);

  // Finalmente, mudamos a pendencia do usuário para verdadeira.
  usuario.pendencia = true;

  const dia = new Date();
  const timeZone = "America/Sao_Paulo";

  // Data atual
  const diaAtual = formatarData(dia, timeZone).split(", ");

  // Data de devolução (dia seguinte)
  const proxDia = new Date(dia);
  proxDia.setDate(dia.getDate() + 1);
  const diaDevolucao = formatarData(proxDia, timeZone).split(", ");

  // Atribuir as datas ao armário sorteado
  armarioSorteado.dataDeLocacao = {
    dia: diaAtual[0],
    horario: diaAtual[1],
  };

  armarioSorteado.dataDeDevolucao = {
    dia: diaDevolucao[0],
    horario: diaDevolucao[1],
  };

  // Impmimimos uma mensagem de reserva para o usuário.
  document.getElementById(
    "resultado"
  ).innerText = `Olá, ${usuario.nome}! O armário ${armarioSorteado.id} foi reservado com sucesso! A devolução deverá ser feita no dia: ${armarioSorteado.dataDeDevolucao.dia} até ${armarioSorteado.dataDeDevolucao.horario}.`;

  console.log(usuario);
  console.log(armarios);
}
