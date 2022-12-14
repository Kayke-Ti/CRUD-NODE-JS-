const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');

const server = express();

server.user(express.json());

const cursos = ['Full Stack Master', 'Desenvolvimento de Games', 'Viver de Youtube'];

//Retorna um Curso
server.get('/cursos/:index', (req, res) => {
  const { index } = req.params;

  return res.json(cursos[index]);
});
//Retorna todos os Cursos
server.get('/cursos', (req, res) => {
  return res.json(cursos);
});

//Criar um novo Curso
server.post('/cursos', (req, res) => {
  const { name } = req.body;
  cursos.push(name);

  return res.json(cursos);
});

//Atualizar um Cursos
server.put('/cursos/:index', (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  cursos[index] = name;
  return res.json(cursos);
});

//Deletar um Curso
server.delete('/cursos/:index', (req, res) =>{
  const { index } = req.params;

  cursos.splice(index, 1);
  return res.json({ message: "O curso foi deletado" });
});


server.listen(3000);

