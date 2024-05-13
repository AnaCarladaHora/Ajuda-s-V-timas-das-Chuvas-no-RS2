const scriptURL = 'https://script.google.com/macros/s/AKfycbyc7s-efHb9XbkAkCpnU0BnxYS99zf0yNPRxnhW2d84r029Nk0gqkT8La0gzhYFxp3PEQ/exec'; // Substitua YOUR_SCRIPT_ID_HERE pelo ID do seu script do Google Apps Script

const form = document.forms["cachorroPerdidoForm"];

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      // Exibir mensagem de sucesso ou erro ao usuário
      if (response.ok) { // Corrigido: Comparando com true implicitamente
        alert("Informações enviadas com sucesso!");
        form.reset();
      } else {
        alert("Ocorreu um erro ao enviar as informações. Tente novamente mais tarde.");
      }
    })
    .catch(error => console.error('Error!', error.message));
});
