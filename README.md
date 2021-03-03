# Desafio-vagas
Desafio  do __vagas.com__ no [GitHub](https://github.com/VAGAScom/desafio-front-end) - para treinar e me divertir ;)

## Deploy

Projeto deployado no github pages para facilitar visualizaçao. [LINK](https://taiaiaii.github.io/desafio-vagas/)

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

 * Parte da acessibilidade consiste em tornar a página responsiva. Assim, no CSS implementei configurações específicas para telas do tipo: mobile, tablet e alguns tamanhos de tela web, utilizando o conceito de mobile-first, buscando deixar a experiência do usuário o mais parecida possível nos diferentes tipos de dispositivos.

 ### Passo 3: contador de stickers

  _* Precisamos fazer o componente de contador funcionar para que o usuário possa definir a quantidade de stickers que deseja comprar_

  * Com JS busquei na tela a caixa dos stickers e adicionei o evento escutador de click. Quando o evento do clique é o botão que contem a classe botao-mais, o valor do input é acrescido em 1, e quando contem classe botao-menos, é reduzido.
  Adicionei também uma classe que muda o layout do input quando o botão de menos é clicado e o valor já é 0, pois no layout do FIGMA há esse comportamento.

  * Há também no FIGMA um comportamento de botão hover. Por esse motivo e também por questão de semantica, substitui as img dos sinais de mais e menos por um button configurado diretamente no CSS.  

  ### Bonus: validação de formulário

  _* Validações de formulário ajudam o usuário a não se perder durante o preenchimento das informações necessárias. Ajude nessa causa._



  * São criadas constantes para buscar no formulário o botão de envio, o formulário, o rodapé, e uma para que seja criado um elemento div. Esse elemento irá receber as mensagens de erro ou sucesso de envio do fomulário, por isso inicialmente ela recebe uma classe que contém as configurações necessárias no CSS.

  * Foram criadas duas funções. Uma que verifica o check-box dos tipos de sticker. Caso não haja nenhum checkbox marcado, ela impurra a mensagem de erro setada no data-set do fieldset para dentro de um array, que é retornado pela função. A outra verifica se o valor do imput na parte da quantidade de sticker é igual a zero. Caso seja, faz a mesma coisa, empurra a mensagem do data-set, nesse caso do imput para dentro de um array retornado pela função. 

  * Coloquei então um evento escutador de click no botão. Na arrow function do evento crio um array de erros que recebe os dois arrays retornados nas funções. Verifico então o tamanho desse array (se for 0=false/se for >0 = true). Em caso de true, a div recebe como conteudo as mensagens que estão dentro do array, e essa div é inserida no início do formulário. Caso de false, a div é inicialmente removida, depois recebe como conteudo textual uma mensagem de sucesso no início do formulario e sua classe é alterada para que tenha um layout diferente da mensagem de erros, e então é insedida no rodapé, conforme modelo do FIGMA. Pesso em seguida para que o formulário seja resetado para que as informações sumam da tela após o envio.

  ### Checkbox

  Aqui os passos haviam sido finalizados, mas ainda havia uma diferença no layout para o modelo do FIMA, que eram as checkboxes. No arquivo do sandbox elas estavam no modelo padrão checkbox. Porem no FIGMA tinham cor azul e alguns detalhes. 
  Acontece que checkbox não aceita background-color.
  Fiquei um tempo pesquisando o que poderia ser feito, até que me deparei com essa [SOLUÇÃO.](https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_custom_checkbox) 

  Ela propõe alterar o html colocando um span junto ao input. Esse span é que receberá as configurações do modelo e as configurações do input serão eliminadas no css.

  Funcionou direitinho ;)