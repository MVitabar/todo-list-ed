let tarefas = [];

function adicionarTarefa() {
  const input = document.getElementById("nova-tarefa");
  const textoTarefa = input.value.trim();

  if (textoTarefa) {
    tarefas.push({ texto: textoTarefa, concluida: false });
    input.value = "";
    atualizarLista();
  }
}

function marcarConcluida(indice) {
  tarefas[indice].concluida = !tarefas[indice].concluida;
  atualizarLista();
}

function removerTarefa(indice) {
  tarefas.splice(indice, 1);
  atualizarLista();
}

function editarTarefa(indice) {
  const novoTexto = prompt("Editar tarefa:", tarefas[indice].texto);
  if (novoTexto !== null) {
    tarefas[indice].texto = novoTexto.trim();
    atualizarLista();
  }
}

function atualizarLista() {
  const lista = document.getElementById("lista-tarefas");
  lista.innerHTML = "";

  tarefas.forEach((tarefa, indice) => {
    const li = document.createElement("li");
    li.innerHTML = `
            <input type="checkbox" onchange="marcarConcluida(${indice})" ${
      tarefa.concluida ? "checked" : ""
    }>
            <span class="${tarefa.concluida ? "concluida" : ""}">${
      tarefa.texto
    }</span>
            <div>
                <button onclick="editarTarefa(${indice})">Editar</button>
                <button onclick="removerTarefa(${indice})">Remover</button>
            </div>
        `;
    lista.appendChild(li);
  });
}
