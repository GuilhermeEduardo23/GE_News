const container = document.querySelector('.main');

async function showNotices() {  
    const key = 'e4590769245f4569b9e9dc8e3cec6eb8';
    const url = `https://newsapi.org/v2/top-headlines/sources?language=pt&apiKey=${key}`;

    try {
        const response = await fetch(url);
        let data = await response.json();
        let {articles} = data;

        if(response.status !== 200) {
            document.write('No momento estamos em manutenção! Logo voltaremos.');
        } else {
            articles.map(item => {
                let noticias = document.createElement('section');
                noticias.classList.add('main');
                noticias.classList.add('sections');
    
                noticias.innerHTML = `
                <h1 class="titulo">${item.title}</h1>
                <p class="autor"><strong>Fonte:</strong> ${item.author}</p>
                <a class="link" target="_blank" title="${item.url}" href="${item.url}">Ir para ${item.author}</a>
                `;
    
                container.appendChild(noticias);
            })
        }
    } catch (error) {
        console.log(error);
    }
}

showNotices();