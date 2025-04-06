function carregarPagina(pagina) {
  fetch(`pages/${pagina}.html`)
    .then((response) => {
      if (!response.ok) throw new Error('Erro ao carregar página.');
      return response.text();
    })
    .then((data) => {
      document.getElementById('conteudo').innerHTML = data;
    })
    .catch((error) => {
      document.getElementById('conteudo').innerHTML =
        '<p>Não foi possível carregar a página.</p>';
      console.error(error);
    });
}
