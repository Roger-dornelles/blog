
## Blog

## Tecnologias

- NextJs
- Axios
- Eslint
- Prettier
- Cypress (e2e)


## Instalação

No terminal ( prompt de comando ) de sua preferencia fazer o clone do projeto com o comando 
```
git clone https://github.com/Roger-dornelles/blog 
```

Após fazer o clone do projeto fazer as instalações das dependencias, dentro da pasta do projeto digitar no terminal o comando
``` 
npm install 
```

Dentro da pasta do projeto criar um arquivo 
```
.env 
```
e adicionar

```
NEXT_PUBLIC_URL='https://jsonplaceholder.typicode.com'
```

Para rodar o projeto no terminal digitar o comando:

```
npm run dev
```

Projeto vai rodar em

[http://localhost:3000](http://localhost:3000)

## Testes

Para poder executa os testes tem que estar com o projeto rodando com o comando 
```
npm run dev
```
Abrir uma nova aba do terminal e dentro da pasta do projeto executar o comando

```
npm run cy:run
```
vai executar os testes, para visalizar a execução ao vivo dos testes no terminal dentro da pasta do projeto digitar
```
npm run cy:open
```

abrira uma nova aba e com todos osteste criados, só clicar em um teste dentro da pasta specs
