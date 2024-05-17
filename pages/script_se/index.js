const title = document.getElementById('title');
const text = document.getElementById('text');
const nome_prof = document.getElementById('nome_prof');

const apiUrl = 'https://my-json-server.typicode.com/trabalhos-etec/fake-api/db';

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    title.innerText = data.materias[8].nome;
    text.innerText = data.materias[8].descricao;
    nome_prof.innerText = data.professores[3].nome;
  })
  .catch(error => console.error('Error:', error));