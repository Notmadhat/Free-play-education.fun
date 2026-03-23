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
const overlay = document.getElementById('player-overlay');
const frame = document.getElementById('game-frame');
const titleDisplay = document.getElementById('module-title');

modules.forEach(item => {
    const card = document.createElement('div');
    card.className = 'data-module-card';
    
    card.innerHTML = `
        <img src="${item.thumb}" alt="Data Visualization">
        <h3>${item.label}</h3>
        <button class="btn-launch" onclick="launchModule('${item.source}', '${item.label}')">Initialize Module</button>
    `;
    
    container.appendChild(card);
});

function launchModule(url, name) {
    frame.src = url;
    titleDisplay.innerText = "Active Session: " + name;
    overlay.style.display = "block";
    document.body.style.overflow = "hidden"; // Stops page scrolling
}

function closeModule() {
    overlay.style.display = "none";
    frame.src = ""; // Stops the game from running in the background
    document.body.style.overflow = "auto";
}
