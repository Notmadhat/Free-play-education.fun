document.addEventListener('DOMContentLoaded', () => {
    // THE LIST OF MODULES
    const modules = [
        {
            label: "Logic Branch 2048 (S)",
            thumb: "https://cdn-icons-png.flaticon.com/512/3593/3593461.png",
            source: "https://gabrielecirulli.github.io/2048/"
        },
        {
            label: "Logic Branch 2048 (C)",
            thumb: "https://cdn-icons-png.flaticon.com/512/2721/2721620.png",
            source: "https://0x0800.github.io/2048-cupcakes/"
        },
        {
            label: "Logic Branch SNAKE",
            thumb: "https://cdn-icons-png.flaticon.com/512/1150/1150626.png",
            source: "https://thesnakegame.github.io/"
        },
        {
            label: "Logic Branch TETRIS",
            thumb: "https://cdn-icons-png.flaticon.com/512/3593/3593461.png",
            source: "https://chvin.github.io/react-tetris/"
        },
        {
            label: "Logic Branch BIRD",
            thumb: "https://cdn-icons-png.flaticon.com/512/2721/2721620.png",
            source: "https://nebez.github.io/floppybird/"
        },
        {
            label: "Logic Branch MINES",
            thumb: "https://cdn-icons-png.flaticon.com/512/1150/1150626.png",
            source: "https://proxx.app/"
        },
        {
            label: "Logic Branch PAC",
            thumb: "https://cdn-icons-png.flaticon.com/512/3593/3593461.png",
            source: "https://pacman-canvas.github.io/"
        }
    ];

    const container = document.getElementById('logic-container');

    // Check if the container exists before trying to add cards
    if (!container) {
        console.error("Could not find logic-container in HTML");
        return;
    }

    // This loop creates the cards on your screen
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

// FUNCTIONS TO OPEN AND CLOSE THE PLAYER
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
