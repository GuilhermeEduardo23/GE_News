const container = document.querySelector('.main');

async function showNotices() {  
    const key = 'e4590769245f4569b9e9dc8e3cec6eb8';
    const url = `https://newsapi.org/v2/top-headlines?country=br&apiKey=${key}`;

    try {
        const response = await fetch(url);
        let data = await response.json();
        let {articles} = data;

        articles.map(item => {
            let noticias = document.createElement('section');
            noticias.classList.add('main');
            noticias.classList.add('sections');

            noticias.innerHTML = `
            <h1 class="titulo">${item.title}</h1>
            <p class="autor"><strong>Fonte:</strong> ${item.author}</p>
            <a class="link" target="_blank" title="${item.url}" href="${item.url}">Acessar ao site ${item.author}</a>
            `;

            container.appendChild(noticias);
        })
    } catch (error) {
        console.log(error);
    }
}

showNotices();