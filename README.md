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

### Passo 2: tornando a casa acessível
 
 _* Vixe!Parece que o HTML não está totalmente acessível. Você consegue melhorar a acessibilidade?*_

 * O código é simples, então não foram necessárias muitas implementações.
 A propria adição das tags semantigas e do atributo lang já deixam a página bem mais acessível. Além disso, usei o atributo "alt" nas imagens, para descreve-las.

 Parte da acessibilidade consiste em tornar a página responsiva. Assim, no CSS implementei configurações específicas para telas do tipo: mobile, tablet e alguns tamanhos de tela web, utilizando o conceito de mobile-first, buscando deixar a experiência do usuário o mais parecida possível nos diferentes tipos de dispositivos.

 ### Passo 3: contador de stickers

  _* Precisamos fazer o componente de contador funcionar para que o usuário possa definir a quantidade de stickers que deseja comprar_

  * 