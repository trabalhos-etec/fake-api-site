const title = document.getElementById('title');
const text = document.getElementById('text');
const nome_prof = document.getElementById('nome_prof');

const apiUrl = 'https://my-json-server.typicode.com/trabalhos-etec/fake-api/db';

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    title.innerText = data.materias[13].nome;
    text.innerText = data.materias[13].descricao;
    nome_prof.innerText = data.professores[5].nome
  })
  .catch(error => console.error('Error:', error));

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  highlightText(title, query);
  highlightText(text, query);
});

function highlightText(element, query) {
  const originalText = element.innerText;
  const regex = new RegExp(`(${query})`, 'gi');
  const highlightedText = originalText.replace(regex, '<span class="highlight">$1</span>');
  element.innerHTML = highlightedText;
}
