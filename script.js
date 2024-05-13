const scriptURL = 'https:https://script.google.com/macros/s/AKfycbxp-P4iLM9WZQ99SpdeneSbR_8RDhuuVd8wKrCjgTpgLjwp97vajpERVU1wVzKfePs3Q/exec'; // Substitua YOUR_SCRIPT_ID_HERE pelo ID do seu script do Google Apps Script

const form = document.forms['cachorroPerdidoForm'];

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      // Exibir mensagem de sucesso ou erro ao usuário
      if (response.ok) {
        alert("Informações enviadas com sucesso!");
        form.reset();
      } else {
        alert("Ocorreu um erro ao enviar as informações. Tente novamente mais tarde.");
      }
    })
    .catch(error => console.error('Error!', error.message));
});