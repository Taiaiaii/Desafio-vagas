const btn = document.querySelector('.botao-enviar');
const form = document.querySelector('.form');
const footer = document.querySelector('.footer')
const divMsg = document.createElement('div')
divMsg.classList.add('mensagem-erro')


btn.addEventListener('click', () => {
    const erros = [...getCheckBoxErrors(), ...getContadorErrors()]
    debugger;
    if (erros.length) {
        divMsg.innerHTML = erros.join('<br>')
         form.insertAdjacentElement('beforebegin', divMsg);
    } else {
        divMsg.remove()
        divMsg.textContent = 'Formulário enviado com sucesso'
        divMsg.classList.replace('mensagem-erro','mensagem-sucesso')
        footer.insertAdjacentElement('afterbegin', divMsg);
        form.reset()

    }
});

function getCheckBoxErrors() {
    let erros = []
    let stickers = form.querySelector('.fieldset')
    let camposSticker = form.querySelectorAll('.input-fieldset')
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