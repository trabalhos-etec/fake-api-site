const title = document.getElementById('title');
const text = document.getElementById('text');
const nome_prof = document.getElementById('nome_prof');
const searchInput = document.getElementById('searchInput');

const apiUrl = 'https://my-json-server.typicode.com/trabalhos-etec/fake-api/db';

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    title.innerText = data.materias[7].nome;
    text.innerText = data.materias[7].descricao;
    nome_prof.innerText = data.professores[4].nome

    // Verificando se a URL está disponível antes de criar a imagem
    if (data.materias[12].url) {
        var img = document.createElement('img');
        img.className = 'lindo';
        img.src = data.materias[12].url;
        document.body.appendChild(img);
      } else {
        console.error('URL da imagem não fornecida.');
      }
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
