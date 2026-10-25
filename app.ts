import express, { type Request,  type Response } from 'express';

interface User {
  id: number;
  name: string;
  email: string;
}


const users: User[] = [
  { id: 1, name: 'Alice Smith', email: 'alice@example.com' },
  { id: 2, name: 'Bob Johnson', email: 'bob@example.com' },
  { id: 3, name: 'Charlie Brown', email: 'charlie@example.com' }
];

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Seja bem-vindo a minha API!');
});

app.get('/users', (req: Request, res: Response) => {
  res.json(users);
});

app.get('/users/:nome', (req: Request, res: Response) => {
  const userName = req.params.nome;
  const user = users.find(u => u.name === userName);

  if (!user) {
    return res.status(404).json({ error: 'Usuário não encontrado' });
  }

  res.json(user);
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});