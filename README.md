# Desafio-vagas
Desafio  do __vagas.com__ no [GitHub](https://github.com/VAGAScom/desafio-front-end) - para treinar e me divertir ;)

## Descrição:

A [base](https://codesandbox.io/s/frontend-dchtk) do projeto é pré-existente e o desafio propõe melhorar a semântica, estrutura, acessibilidade e fazer algumas implementações ;)

- O layout: [FIGMA](https://www.figma.com/file/Ly86lgfa2qYMB1mV1FYpLEQT/frontend-test?node-id=0%3A2) 

## Propostas

### Passo 1: Melhorar a semântica do HTML

_* Precisamos deixar o HTML semântico, use as tags HTML que correspondem corretamente aos cenários aplicados._

*  O html estava inteiro em divs com classes. Coloquei as estruturas de __header__, __main__ e __footer__ para início de conversa, depois algumas outras como __form__ ,__fieldset__ , __legend__ ..

 _* Fique a vontade para mudar a estrutura caso ache necessário, mas precisa ser fiel ao layout._

 * De fato, uma mudança na estrutura pareceu um bom caminho. Haviam divs demais para representar os fildsets, poderia ser apenas um fildset, configurados separadamente através de diferentes classes no CSS. Haviam também muitas divs com o unico intuito de criar espaço entre os elementos, o que também pode perfeitamente ser ajustado no CSS.

 _* Na tag <html>, está faltando um parâmetro que é obrigatório. Você consegue identificar e aplicar?_

 * lang="pt-br"