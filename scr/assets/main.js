const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCPYa8tISmgP_7a-R79zY-_w&part=snippet%2Cid&order=date&maxResults=12';

const options = 
    {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '38edda3a55mshd934e2c55fbaaa3p1f8f8bjsn01e19f8a7fc7',
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
    };



const content = null || document.getElementById("content");
async function fetchDataxD(urlAPi)
    {
        const response = await fetch(urlAPi, options);
        const data = await response.json();
        return data;   
    }

// Vamos a crear una funcion que se llama así misma

(async () => {
    try
        {
            const videos = await fetchDataxD(API);
            // Voy a usar template strings para iterar mis elementos
            let view = `
            ${videos.items.map(video => `
            <a href="https://youtube.com/watch?v=${video.id.videoId}" target="_blank">
            <div class="group relative">
                <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${video.snippet.title}
                    </h3>
                </div>
            </div>
            </a>
            `).join("")}
            `; 
            content.innerHTML = view;
        }  
    catch(error)
        {
            alert(`La API tiene un error que es: ${error}
            Porfavor intentelo más tarde`)
        }
})(); //Tengo la sentencia que me va a permitir automaticamente cunado se está cargando el archivo ejecutar mi funcion
//  Esto es útil cuando se desea ejecutar una función asíncrona una sola vez sin almacenarla en una variable o usarla en otro lugar del código.
