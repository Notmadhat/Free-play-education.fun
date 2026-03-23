document.addEventListener('DOMContentLoaded', () => {
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

    // Create the cards
    modules.forEach(item => {
        const card = document.createElement('div');
        card.className = 'data-module-card';
        
        card.innerHTML = `
            <img src="${item.thumb}" alt="Data">
            <h3>${item.label}</h3>
            <button class="btn-launch" onclick="launchModule('${item.source}', '${item.label}')">Initialize Module</button>
        `;
        
        container.appendChild(card);
    });
});

// These functions must be OUTSIDE the DOMContentLoaded block so the buttons can find them
function launchModule(url, name) {
    const overlay = document.getElementById('player-overlay');
    const frame = document.getElementById('game-frame');
    const titleDisplay = document.getElementById('module-title');
    
    frame.src = url;
    titleDisplay.innerText = "Active Session: " + name;
    overlay.style.display = "block";
}

function closeModule() {
    const overlay = document.getElementById('player-overlay');
    const frame = document.getElementById('game-frame');
    
    overlay.style.display = "none";
    frame.src = ""; 
}
