# **Community Spells**

Esta aplicação foi criada com o intuito de auxilixar grupos de RPG que utilizam o sistema Mage: The Awakening - 2º Edição.

#

## **Tecnologias**

- HTML5
- CSS3
- Javascript
- Google Apps Script
- Google Docs

#

## **Introdução**

O sistema de RPG em questão (Mage: The Awakening - 2º Edição), permite que os jogadores criem magias personalizadas para utilizarem em seus jogos. Além disso, a produtora do sistema tem um [fórum](http://forum.theonyxpath.com/forum/main-category/main-forum/the-new-world-of-darkness/mage-the-awakening) dedicado ao sistema, no qual jogadores podem interagir e compartilhar suas ideias.

Em uma das seções do fórum está o [tópico](http://forum.theonyxpath.com/forum/main-category/main-forum/the-new-world-of-darkness/mage-the-awakening/877640-creative-thaumaturgy-fallen-world-edition) de magias criadas pela comunidade. Nela encontra-se diversas magias (atualmente mais de 400) que podem ser utilizadas por qualquer jogar que utilize o sistema.

## **Problema**

Embora tenha sido boa ideia, a navegação para encontrar essas magias depende de paciência e dedicação. No momento que escrevo este texto, o tópico em questão conta com 136 páginas. E em meio a essas páginas não encontram-se apenas as magias, mas existe também comentários sobre o que os próprios jogadores consideram sobre a magia em questão. Além disso, caso queira procurar por magias de determinados tipos, deverá realizar as buscas por palavras chaves, utilizando a busca do fórum. Essa busca trará tanto ocorrências em qualquer texto, seja comentário ou título, e não necessariamente uma magia.

## **Solução**

### **- Parte 1: Selecionar as magias do tópico**

Como não havia padrão quanto às postagens no tópico, foi necessário selecionar magia por magia manualmente. Navegando por todas as páginas da seção, coletei as informações e salvei em um [documento](https://docs.google.com/document/d/1y8q9_sXv2SkXTPZYaAXHH6OZIi1fgnnJDGG_2zBPf9k/edit?usp=sharing).

O motivo de ter escolhido o google docs foi por conseguir usar Google Apps Script. Tendo isso em mente, formatei o documento para seguir um padrão e em seguida construí um script que percorre todo o documento e preenche outro [documento](https://docs.google.com/document/d/1oYVjpH19xK3qy53nUZ7SEcB3hVJveCQFW3w3WZQsSF8/edit?usp=sharing). Este documento contém o conteúdo do documento das magias formatado em código JSON, possibilitando utilizar em qualquer lugar que consiga interpretar arquivos nesse formato.

### **- Parte 2: Construir a aplicação**

Como alguém que estava no papel de desenvolvedor e usuário ao mesmo tempo, foi possível pensar em funcionalidades para a aplicação com maior clareza.

Ao buscar por uma magia, geralmente os jogadores buscam por certo parâmetros. Ao criar a aplicação, foquei nas que considero principais, que são:

- tipo da arcana (life, mid, space, etc)
- e nível (disciple, adept, etc)

Em princípio, seriam apenas essas funcionalidades. Mas pensando um pouco mais, adicionei a cada magia um número identificador. Então acrescentei duas possibilidades de busca:

- por nome
- e por número identificador

E por último, para que os jogadores consigam encontrar as magias que mais gostam, adicionei mais uma funcionalidade:

- favoritar uma magia

## **Considerações sobre a solução encontrada**

Quando a aplicação foi desenvolvida, eu estava prestes a iniciar meus estudos com React.js e não tinha qualquer conhecimento em back-end.

Portanto, a aplicação foi totalmente construída em Javascript vanilla, com manipulação do DOM para criar toda a interface.

Por não conhecer back-end, sempre que eu desejasse adicionar uma nova magia, era necessário ir até o fórum, copiar a magia, formatar no doc, aplicar o script, copiar o novo código JSON, abrir o código da aplicação e alterar o antigo código JSON para o recém gerado.

Outra implicação é que apenas eu poderia adicionar uma nova magia. Dessa forma, a comunidade não conseguiria utilizar a aplicação de forma ativa.

E por último, as magias favoritas eram salvas no navegador. Então se o usuário muda de navegador ou apaga os dados do mesmo, os dados das magias favoritas também se perdem.

## **Futuras melhorias**

- criar uma nova interface com um framework, como o React.js
- criar uma aplicação back-end para lidar com as seguintes funcionalidades
  - CRUD de magias
  - magias favoritas em qualquer dispositivo
  - autenticação de usuário (qualquer um pode criar uma magia)
  - magias com seção de comentários

## **Conclusão**

Essa aplicação foi muito gratificante de ser construída, tanto por conseguir ajudar meu próprio grupo de RPG quanto qualquer outro por todo o mundo. Além disso, aprendi a utilizar o Google Apps Script juntamente com o Google Docs para formatar estruturas de dados em formato JSON. Com certeza são conhecimentos valiosos. Espero que gostem!
