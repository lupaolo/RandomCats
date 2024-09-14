const apiKey = 'YOUR_API_KEY'; // Substitua por sua chave de API (se necessário)
const apiUrl = `https://api.thecatapi.com/v1/images/search?api_key=${apiKey}`;
const button = document.getElementById('getKittenButton');
const kittenImage = document.getElementById('kittenImage');
const errorMessage = document.getElementById('errorMessage');

button.addEventListener('click', () => {
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro de rede');
            }
            return response.json();
        })
        .then(data => {
            const kittenUrl = data[0].url;
            kittenImage.src = kittenUrl;
            errorMessage.classList.add('hidden'); // Ocultar mensagem de erro se a imagem for carregada
        })
        .catch(error => {
            console.error('Erro ao obter imagem do gatinho:', error);
            errorMessage.classList.remove('hidden'); // Exibir mensagem de erro se ocorrer um problema
        });
});

// Opcional: carregar uma imagem inicial ao carregar a página
button.click();
