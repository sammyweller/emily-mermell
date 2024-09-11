// Function to display articles
async function fetchArticles() {
    try {
        const response = await fetch('blogs.json');
        const articles = await response.json();
        const articleContainer = document.getElementById('medium-articles');

        articles.forEach(article => {
            const articleElement = document.createElement('div');
            articleElement.classList.add('article');

            const articleContent = `
                    <a href="${article.srcUrl}" class="article-link" target="_blank" rel="noopener noreferrer">
                        <figure class="article-img"><img src="${article.imageUrl}" alt="${article.imageAlt}"></figure>
                        <p class="article-category">${article.category}</p>
                        <h3>${article.title}</h3>
                        <p class="read-post-link">Read post
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.83301 14.1668L14.1663 5.8335M14.1663 5.8335H5.83301M14.1663 5.8335V14.1668" stroke="CurrentColor" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </p>
                </a>
            `;

            articleElement.innerHTML = articleContent;
            articleContainer.appendChild(articleElement);
        });
    } catch (error) {
        console.error('Error fetching articles:', error);
    }
}

fetchArticles();