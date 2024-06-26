const participantes = [];
// Criamos uma constante 'participantes' que é igual ao array vazio

// Criamos uma função 'adicionarParticipante' que recebeu...
function adicionarParticipante() {
	const nomeInput = document.getElementById('nome');
	// Constante 'nomeInput' recebe o elemento pelo id 'nome' definido no HTML
	const numeroInput = document.getElementById('numero');
	const nome = nomeInput.value;
	// Usamos a propriedade .value onde a constante 'nome' é igual ao valor recebido pela constante 'nomeInput'
	const numero = parseInt(numeroInput.value);
	
	if (nome && numero) { // Se nome e numero preenchidos...
		const nomeExistente = participantes.some(participante => participante.nome === nome);
        const numeroExistente = participantes.some(participante => participante.numero === numero);
		// Criamos a constante 'numeroExistente' para validar se o número escolhido pelo participante não é repetido
        if (nomeExistente) {
			alert('Este nome já foi usado por outro participante. Por favor, escolha um nome diferente. ');
		}
		else if (numeroExistente) { // Se for repetido será exibido um alerta: 'Este número já foi escolhido por outro participante. Por favor, escolha um número diferente.'
            alert('Este número já foi escolhido por outro participante. Por favor, escolha um número diferente.');
        } else { // Se não o nome e o número será gravado, a lista será atualizada e os campos preenchidos resetados
            participantes.push({ nome, numero });
            atualizarListaParticipantes();
            nomeInput.value = '';
            numeroInput.value = '';
        }
    } else { // Se os campos nome enumero não forem preenchidos será exibido um alerta: 'Por favor, insira um nome e um número válido.'
        alert('Por favor, insira um nome e um número válido.');
    }
}

// Criamos uma função 'atualizarListaParticipantes'
function atualizarListaParticipantes() {
	const lista = document.getElementById('listaParticipantes');
	// Constante 'lista' recebe o elemento pelo id 'listaParticipantes' definido no HTML
	lista.innerHTML = '';
	// Preenche a lista dentro do HTML
	participantes.forEach(participante => { // 'participantes' executa uma dada função a cada elemento do array
		const li = document.createElement('li');
		// Crie um novo elemento de lista de item <li> e adiciona ao final do documento
		li.textContent = `${participante.nome} - ${participante.numero}`;
		// Constante li use a propriedade '.textContent' para representar o conteúdo de texto...
		lista.appendChild(li);
		// Devolve uma referência ao nó do elemento novo criado </li>
	});
}

// Criamos uma função 'sortearNumero'
function sortearNumero() {
	if (participantes.lentgh === 0) { // Se 'participantes' em somente leitura for estritamente igual a 0...
		alert('Nenhum participante adicionado.');
		// Exibe um alerta 'Nenhum participante adicionado'
		return;
		// Finaliza a execução da função 'sortearNumero' e especifica os valores que devem ser retornados para onde a função foi chamada
	}
	
	const sorteado = participantes[Math.floor(Math.random() * participantes.length)];
	// Criamos uma constante 'sorteado' que é igual a constante 'participantes' recebendo um array onde o valor de 'x' definido pela função Math.floor e é igual à um número pseudo-aleatório gerado pela função 'Math.random' multiplicado pela leitura dos elementos inseridos no array da constante 'participantes' 
	const resultado = document.getElementById('resultadoSorteio');
	// Constante 'resultado' recebe o elemento pelo id 'resultadoSorteio' definido no HTML
	resultado.textContent = `O número sorteado é ${sorteado.numero}, escolhido por ${sorteado.nome}.`;
	// Insere o valor da constante 'resultado' no HTML
}



