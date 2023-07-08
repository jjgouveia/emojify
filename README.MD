# Emojify 🖼️ - Transforme suas fotos em emojis

 ## Autor:
  * **Nome:** Jr Gouveia;
  * **E-mail:** gouvik.dev@gmail.com;

 ## Sobre o projeto:
  Baseado no Emoji Art Maker, o Emojify permite transformar fotos em um mosaico de emojis. O projeto foi desenvolvido em JavaScript e não faz uso de nenhuma biblioteca externa para conversão das imagens. O algoritmo de comparação de cores foi baseado nas métricas DELTA E e hoje conta com duas delas (E94 e E00).

 ## Como usar:
Para usar basta acessar o [Emojify](https://emojify-beta.vercel.app/) e fazer o upload de uma imagem. O resultado será exibido na tela e você poderá fazer o download da imagem gerada. Lembrando que o projeto ainda está em fase beta e pode apresentar alguns bugs. Caso encontre algum, por favor, abra uma issue ou entre em contato comigo.

## [Informações Importantes](#informações-importantes):
* O Emojify não armazena nenhuma imagem enviada pelo usuário;
* A performance do algoritmo de comparação de cores pode variar de acordo com o dispositivo utilizado, portanto, pode ser que o tempo de processamento seja maior em alguns casos. Principalmente quando as imagens possuem muitos detalhes, cores e/ou são muito grandes;

## Tecnologias utilizadas:
* HTML;
* CSS;
* Bootstrap;
  * JQuery (Para o funcionamento do Bootstrap);
  * Popper (Para o funcionamento do Bootstrap);
* JavaScript;


## Changelog:

** 0.0.1 **
* Initial release;
* Otimização do código;

** 1.0.0 **
* Adicionado suporte para o modo escuro;
* Adicionado slide de carregamento de imagens;
* Adicionado um novo algoritmo de comparação de cores baseado na métrica DeltaE00 (Maior precisão = maior tempo de processamento);

## Futuras implementações:
* Converter o código para TypeScript;
* Transformar o projeto em um PWA;
* Adicionar suporte para imagens com transparência;
* Melhorar a performance do algoritmo de comparação de cores;
