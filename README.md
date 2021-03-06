<h3 align="center">
  Backend GoBarber
</h3>

## :rocket: Sobre o desafio
Backend completo de um "serviço de agendamentos de beleza utilizando as seguintes tecnologias: 
- Yarn
- Express
- Docker
- Sequelize
- Eslint
- Prettier
- Editor config
- JWT
- BCryptjs
- Sucrase
- Yup
- Mongo
- Redis
- Postgres e etc

### Rotas

- `GET /users`: A rota de criação de usuário;
```js
{
	"name": "Flavio Ever",
	"email": "flavio.xpto@icloud.com",
	"password": "123456"
}
```

- `PUT /users`: A rota de manipulação de usuário. Importante passar o `authenticate (Bearer)` como parâmetro;
```js
{
{
	"name": "Flavio Ever 2", 
	"email": "flavio.xpto_2@icloud.com",
	"oldPassword": "123456",
	"password": "abcdef",
	"confirmPassword": "abcdef"
}

```
- `POST /sessions`: A rota de validação de sessão;
```
{
	"email": "flavio.xpto@icloud.com",
	"password": "abcdef"
}
```

### Iniciando
````
Dev: yarn dev
````
````
Debug: yarn dev:debug
````

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Feito com ♥ by [Flavio Ever](https://linkedin.com/in/flavio-ever)
