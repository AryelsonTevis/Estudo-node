# 📦 Projeto Node.js API

API backend desenvolvida com **Node.js**, utilizando **Fastify** para alta performance e **Prisma** como ORM para integração com banco de dados.

---

## 🚀 Tecnologias utilizadas

- Node.js
- Fastify
- Prisma ORM
- SQLite / PostgreSQL
- Bcrypt

---

## 📁 Estrutura do projeto
```
📦 projeto
 ┣ 📂 routes
 ┃ ┗ 📜 public.js
 ┣ 📂 prisma
 ┃ ┗ 📜 schema.prisma
 ┣ 📜 server.js
 ┣ 📜 package.json
 ┗ 📜 .env
```
---

## ⚙️ Como rodar o projeto



### 1. Instale as dependências

```bash
npm install
```

### 2. Configure o banco de dados

Crie e edite o arquivo `.env`:

```env
DATABASE_URL="file:./dev.db"
```

ou PostgreSQL:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/db"
```

### 3. Rodar as migrations

```bash
npx prisma migrate dev
```

### 4. Iniciar o servidor

```bash
node server.js
```

ou com nodemon:

```bash
npx nodemon server.js
```

---

## 🌐 Servidor

http://localhost:3000

---

## 🔐 Funcionalidades

- Cadastro de usuários
- Criptografia de senha com bcrypt
- Rotas públicas
- Integração com banco via Prisma

---

## 📌 Modelo Prisma

```prisma
model User {
  id    Int    @id @default(autoincrement())
  nome  String
  email String @unique
  senha String
}
```

---

## 🧪 Testes

Use ferramentas como:

- Postman
- Insomnia
- Thunder Client

---

## 🛑 Parar servidor

CTRL + C

---

## 📈 Melhorias futuras


- Arquitetura em camadas
- Deploy

---

## 👨‍💻 Autor

Aryelson Tevis
