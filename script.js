const games = [
    {
        title: "2048",
        image: "https://via.placeholder.com/250x150?text=2048",
        url: "https://gabrielecirulli.github.io/2048/"
    },
    {
        title: "Hextris",
        image: "https://via.placeholder.com/250x150?text=Hextris",
        url: "https://hextris.io/"
    },
    {
        title: "Clumsy Bird",
        image: "https://via.placeholder.com/250x150?text=Clumsy+Bird",
        url: "https://ellisonleao.github.io/clumsy-bird/"
    }
];

const container = document.getElementById('game-container');

games.forEach(game => {
    const card = document.createElement('div');
    card.className = 'game-card';
    
    card.innerHTML = `
        <img src="${game.image}" alt="${game.title}">
        <h3>${game.title}</h3>
        <a href="${game.url}" class="btn-play" target="_blank">Play Now</a>
    `;
    
    container.appendChild(card);
});
