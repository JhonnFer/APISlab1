const obtenerMemes = async () => {
    const memesContainers = document.getElementById('list-memes');
    const memeTemplate = document.getElementById('meme'); 

    // Obtén los memes desde Imgflip
    const request = await fetch("https://api.imgflip.com/get_memes");
    const respuesta = await request.json();

    // Cargar los memes en el contenedor
    respuesta.data.memes.slice(0, 8).forEach(meme => {
        const newMemeCard = memeTemplate.cloneNode(true);
        const img = newMemeCard.querySelector('img');
        img.src = meme.url;
        memesContainers.appendChild(newMemeCard);
    });

    memeTemplate.remove();
};
const obtenerGifGoku = async () => {
    // Contenedor donde se mostrará el GIF
    const gokuContainer = document.getElementById('goku-container'); 

    // URL del GIF
    const gifUrl = "https://i.pinimg.com/originals/b1/3d/a3/b13da3906d4f03e0f1ce818238d188a4.gif";

    // Crear un nuevo elemento de imagen
    const imgElement = document.createElement('img');
    imgElement.src = gifUrl; // Establecer la URL del GIF


    // Añadir el GIF al contenedor
    gokuContainer.appendChild(imgElement);
};

// Llamar a la función para cargar el GIF
obtenerGifGoku();
obtenerMemes();

