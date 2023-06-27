function adicionar() {
    const tarefa = document.getElementById('tarefa').value
    const li = document.createElement('li')
    li.textContent = tarefa

    //Verificar se o campo está em branco
    if (tarefa != '') {
        const pendentes = document.getElementById('pendentes')
        pendentes.appendChild(li)
    } else {
        alert('Digite uma tarefa')
    }
    document.getElementById('tarefa').value = ''
    document.getElementById('tarefa').focus()

    //Botão para marcar tarefa como concluída
    const btnConcluir = document.createElement('button')
    btnConcluir.textContent = 'Concluir'
    btnConcluir.type = 'button'
    btnConcluir.style.marginLeft = '10px'
    btnConcluir.addEventListener('click', function () { moverParaConcluidas(li), btnConcluir.style.display = 'none' })
    li.appendChild(btnConcluir)

    //Botão para remover tarefa
    const btnRemover = document.createElement('button')
    btnRemover.textContent = 'Remover'
    btnRemover.type = 'button'
    btnRemover.style.marginLeft = '20px'
    btnRemover.addEventListener('click', function () { li.remove() })
    li.appendChild(btnRemover)

}
function moverParaConcluidas(li) {
    const concluidas = document.getElementById('concluidas')
    concluidas.appendChild(li)
}