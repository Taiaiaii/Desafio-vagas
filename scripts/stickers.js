const contadorStickers = document.querySelector('.elements-counter')
const valorStickers = document.querySelector('.input-counter')

valorStickers.value = 0
contadorStickers.addEventListener('click', function (event) {

    if (event.target.classList.contains('botao-menos')) {

        if (parseInt(valorStickers.value) == 0) {
            valorStickers.classList.add('input-counter-erro')

        } else {

            valorStickers.value = parseInt(valorStickers.value) - 1;
            valorStickers.classList.remove('input-counter-erro')
        }

    }

    if (event.target.classList.contains('botao-mais')) {

        valorStickers.value = parseInt(valorStickers.value) + 1;

        if (parseInt(valorStickers.value) != 0) {
            valorStickers.classList.remove('input-counter-erro')
        }
    }

})