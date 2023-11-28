async function showNotices() {
    let title = document.getElementsByClassName('titulo');
    let author = document.getElementsByClassName('autor');
    let link = document.getElementsByClassName('link');
    let principal = document.getElementsByClassName('main');
    
    const key = 'e4590769245f4569b9e9dc8e3cec6eb8';
    const url = `https://newsapi.org/v2/top-headlines?country=br&apiKey=${key}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const {articles} = data;
        
        for(let i = 0; i < articles.length; i++) {
            title += articles[i].title;
            author += articles[i].author;
            link += articles[i].url;
            
            principal.innerHTML += `
            <section class="main sections">
                <h1 class="titulo">${title}</h1>
                <p class="autor">${author}</p>
                <a class="link" href="${link}" target="_blank" title="${link}">Clique aqui e saiba mais!</a>
            </section>`;
        }

    } catch (error) {
        console.error(error);
    }
}

showNotices();