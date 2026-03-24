document.addEventListener('DOMContentLoaded', () => {
    // THE LIST OF MODULES
    const modules = [
    {
        label: "Logic Branch SNAKE (Local)",
        thumb: "https://cdn-icons-png.flaticon.com/512/1150/1150626.png",
        source: "./modules/snake-logic.html" 
    },
    {
        label: "Logic Branch 2048 (Local)",
        thumb: "https://cdn-icons-png.flaticon.com/512/3593/3593461.png",
        source: "./modules/2048-logic.html"
    }
    // Add more here ONLY after you create the .html files in GitHub
];

    const container = document.getElementById('logic-container');
    if (!container) return;

    modules.forEach(item => {
        const card = document.createElement('div');
        card.className = 'data-module-card';
        card.innerHTML = `
            <img src="${item.thumb}" alt="Data Module">
            <h3>${item.label}</h3>
            <button class="btn-launch" onclick="launchModule('${item.source}', '${item.label}')">Initialize Module</button>
        `;
        container.appendChild(card);
    });
});

function launchModule(url, name) {
    const overlay = document.getElementById('player-overlay');
    const frame = document.getElementById('game-frame');
    const titleDisplay = document.getElementById('module-title');
    
    frame.src = url;
    titleDisplay.innerText = "Active Session: " + name;
    overlay.style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeModule() {
    const overlay = document.getElementById('player-overlay');
    const frame = document.getElementById('game-frame');
    
    overlay.style.display = "none";
    frame.src = ""; 
    document.body.style.overflow = "auto";
}
