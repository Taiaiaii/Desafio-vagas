const btn = document.querySelector('.botao-enviar');
const form = document.querySelector('.form');
const footer = document.querySelector('.footer')
const divMsg = document.createElement('div')


btn.addEventListener('click', () => {
    const erros = [...getCheckBoxErrors(), ...getContadorErrors()]

    if (erros.length) {
        divMsg.innerHTML = erros.join('<br>')
        form.insertAdjacentElement('beforebegin', divMsg);
    } else {
        divMsg.remove()
        divMsg.textContent = 'Formulário enviado com sucesso'
        footer.insertAdjacentElement('beforebegin', divMsg);
        form.reset()

    }

});

function getCheckBoxErrors() {
    let erros = []
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
    return erros
}

function getContadorErrors() {
    let erros = []
    let contador = form.querySelector('.input-counter')
    if (contador.value == 0) {
        erros.push(contador.dataset.mensagem)
    }

    return erros

}