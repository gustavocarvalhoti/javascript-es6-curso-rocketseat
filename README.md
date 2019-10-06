# Javascript-es6 - Rocketseat
es6 - Novas formas de escrever o Javascript, podendo utilizar classes <br/>
Babel - Transpilar para todos os navegadores entenderem <br/>
Webpack - Servidor para live reload (Desenvolvimento) <br/>
Arrow functions <br/>
Desestruturação <br/>
Rest/spread <br/>
Import/export <br/>
Async/await - Programação assincrona <br/>

##Comandos npm <br/>
npm init <- Inicia o projeto <br/>
npm install --save-dev @babel/core @babel/cli <- Babel <br/>
npm install --save-dev @babel/preset-env <- Entende o ambiente (Web, Mobile, Backend), converte automaticamente <br/>
npm install --save-dev babel-watch <- Auto deploy
npm run dev <- vai no scripts.dev que declarei um pouco abaixo <br/>
npm install --save-dev @babel/plugin-syntax-object-rest-spread <- Operadores ... <br/>

##.babelrc - Guarda as configurações do babel
{ "presets": ["@babel/preset-env"], <- Faz compilar para tudo, web, mobile ou backend <br/>
"plugins": ["@babel/plugin-syntax-object-rest-spread"] <- Para utilizar o ... na desconstrução <br/>
}<br/>

##package.json
"scripts": { "dev" : "babel ./main.js -o ./bundle.js -w" } <br/>
<- Executa o babel, pega o main.js transpila e joga no bundle.js, o -w faz o auto deploy <br/>
