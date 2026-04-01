// Simulação de seleção de serviços
// Seleciona todos os botões que possuem a classe 'adicionar'
const botoesAdicionar = document.querySelectorAll(".adicionar")

// Seleciona a lista onde os serviços selecionados serão exibidos
const listaPedido = document.getElementById("lista-pedido")

// Seleciona o elemento que exibirá o valor total
const totalElemento = document.getElementById('total')

// Variável para armazenar o total
let total = 0

// Percorre todos os botões "adicionar" e adiciona um evento de clique a cada um deles
botoesAdicionar.forEach((botao) => {
    botao.addEventListener("click", () => {
        // Obtém o elemento pai do botão (card do serviço)
        const produto = botao.parentElement

        // Obtém o nome do serviço a partir do texto dentro da tag h3
        const nome = produto.querySelector('h3').textContent

        // Obtém o preço do serviço
        const preco = parseFloat(produto.querySelector('.preco').textContent.replace("R$", "").replace(",", "."))

        // Cria um novo item de lista <li> para adicionar o serviço ao agendamento
        const itemPedido = document.createElement("li")
        itemPedido.textContent = `${nome} - R$ ${preco.toFixed(2).replace(".", ",")}`

        // Adiciona item criado à lista de agendamento
        listaPedido.appendChild(itemPedido)

        // Atualiza o total somando o preço do novo serviço
        total += preco

        // Atualiza o texto do total
        totalElemento.textContent = `Total: R$ ${total.toFixed(2).replace(".", ",")}`
    })
})

// Finalização do agendamento
const botaoFinalizarPedido = document.getElementById("finalizar-pedido")

botaoFinalizarPedido.addEventListener("click", () => {
    if (listaPedido.children.length === 0) {
        alert("Adicione pelo menos um serviço antes de confirmar!")
        return
    }

    // Exibe um alerta confirmando o agendamento
    alert("Agendamento confirmado! 💈\n" + totalElemento.textContent)

    // Limpa a lista de serviços
    listaPedido.innerHTML = ''

    // Reseta o total para zero
    total = 0

    // Atualiza o texto do total
    totalElemento.textContent = `Total: R$ 0,00`
})
