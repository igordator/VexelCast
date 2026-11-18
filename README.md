# VexelCast

Projeto pessoal, gratuito e sem fins lucrativos para partilhar o ecrã e o som de um aparelho (computador ou telemóvel Android)
com o browser de outro aparelho (carro, TV, tablet, computador), por WebRTC. Num carro, usar só **estacionado**.

> **Não é afiliado, associado, autorizado nem aprovado por nenhum fabricante (incluindo a Tesla, Inc.).** “Tesla” e outros nomes
> são marcas dos seus titulares, mencionadas apenas para indicar compatibilidade.
> És responsável pelo conteúdo que transmites. Ver [termos de utilização e privacidade](termos.html).

- Sem contas, sem anúncios, sem recolha de dados.
- Imagem e som encriptados de ponta a ponta entre os dois aparelhos.
- Código de 8 caracteres que funciona como chave secreta: a ligação é assinada com ele (sem passos extra) e o servidor nunca o vê.
- Som estéreo de alta qualidade (Opus 256 kb/s), imagem nítida desde o arranque e escolha de atraso no ecrã de destino.
- Funciona entre redes diferentes (TURN por UDP/TCP, com opção de servidor TURN próprio) e religa sozinho se a ligação cair.

Licença: [MIT](LICENSE). Fornecido "tal como está", sem garantias.
