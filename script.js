const modules = [
    {
        label: "Logic Branch 2048",
        thumb: "https://via.placeholder.com/250x150?text=Module+2048",
        source: "https://gabrielecirulli.github.io/2048/"
    },
    {
        label: "Logic Branch HEX",
        thumb: "https://via.placeholder.com/250x150?text=Module+HEX",
        source: "https://hextris.io/"
    },
    {
        label: "Logic Branch BIRD",
        thumb: "https://via.placeholder.com/250x150?text=Module+BIRD",
        source: "https://ellisonleao.github.io/clumsy-bird/"
    }
];

const container = document.getElementById('logic-container');

modules.forEach(item => {
    const card = document.createElement('div');
    card.className = 'data-module-card';
    
    card.innerHTML = `
        <img src="${item.thumb}" alt="Data Visualization">
        <h3>${item.label}</h3>
        <a href="${item.source}" class="btn-launch" target="_blank">Launch Module</a>
    `;
    
    container.appendChild(card);
});
