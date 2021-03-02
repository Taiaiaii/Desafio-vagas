const btn = document.querySelector('.botao-enviar');
const form = document.querySelector('.form');
const footer = document.querySelector('.footer')
const divMsg = document.createElement('div')


btn.addEventListener('click', () => {

    let erros = []

    let checkVazio = verificaCheckBox(erros)
    let contadorZerado = verificaContador(erros)

    if (checkVazio || contadorZerado) {
        divMsg.innerHTML = erros.join('<br>')
        form.insertAdjacentElement('beforebegin', divMsg);


    } else {
        divMsg.remove()
        divMsg.textContent = 'Formulário enviado com sucesso'
        footer.insertAdjacentElement('beforebegin', divMsg);

    }

});

function verificaCheckBox(erros) {
    let stickers = form.querySelector('.fieldset')
    let camposSticker = form.querySelectorAll('.marcar')
    let qntErro = 0;

    for (let campo of camposSticker) {

        if (!campo.checked) {
            qntErro++
        }
    }
    if (qntErro === camposSticker.length) {
        erros.push(stickers.dataset.mensagem)

    }
    return erros.length
}

function verificaContador(erros) {
    let contador = form.querySelector('.input-counter')
    if (contador.value == 0) {
        erros.push(contador.dataset.mensagem)
    }

    return erros.length

}