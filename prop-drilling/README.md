#  Gerenciamento de Estado Global com Context API no React

Este exemplo demonstra como utilizar a Context API no React para gerenciar o estado global e evitar o problema de "prop drilling". Através deste exemplo, você verá como criar um contexto, um provider e como consumir esses dados em componentes filhos, simplificando o compartilhamento de estado entre diferentes partes da aplicação.

## Estrutura do Código
A aplicação é composta por vários componentes que colaboram para demonstrar o uso do Context API.
* App.js
O componente principal que estrutura a aplicação e integra os componentes ComponentC e CompronentD.
* ExampleContext.js
Define o contexto e o provider para o exemplo.
* ComponentC.js
Componente que demonstra o uso de "prop drilling" passando o children.
* CompronentD.js
Componente que consome o contexto e exibe o valor example.

## Funcionalidades
* Context API: Utiliza o Context API do React para gerenciar o estado global.
* Evita Prop Drilling: Demonstra como evitar o "prop drilling" utilizando o contexto.
* Gerenciamento de Estado: Utiliza o hook useState para gerenciar o estado do exemplo.
* Consumo de Contexto: Utiliza o hook useContext para consumir o contexto no componente CompronentD.
