document.addEventListener('DOMContentLoaded', () => {
    // THE LIST OF MODULES
    const modules = [
        {
            label: "Logic Branch 2048 (Standard)",
            thumb: "https://cdn-icons-png.flaticon.com/512/3593/3593461.png",
            // Mirror link for 2048 that allows iframes
            source: "https://hczhcz.github.io/2048/" 
        },
        {
            label: "Logic Branch 2048 (Cupcake)",
            thumb: "https://cdn-icons-png.flaticon.com/512/2721/2721620.png",
            // Fixed Cupcake link
            source: "https://henry7720.github.io/2048-cupcakes/"
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
            source: "https://nolanjp.github.io/flappybird-web/"
        },
        {
            label: "Logic Branch MINES",
            thumb: "https://cdn-icons-png.flaticon.com/512/1150/1150626.png",
            source: "https://proxx.app/"
        },
        {
            label: "Logic Branch PAC",
            thumb: "https://cdn-icons-png.flaticon.com/512/3593/3593461.png",
            // Fixed Pac-Man link (explicitly supports iframes)
            source: "https://nicerwritter27.github.io/web-pacman/"
        },
        {
            label: "Logic Branch CHESS",
            thumb: "https://cdn-icons-png.flaticon.com/512/2721/2721620.png",
            source: "https://zeyu-li.github.io/chess/"
        },
        {
            label: "Logic Branch BREAK",
            thumb: "https://cdn-icons-png.flaticon.com/512/1150/1150626.png",
            source: "https://jakesgordon.github.io/javascript-breakout/"
        },
        {
            label: "Logic Branch SUDOKU",
            thumb: "https://cdn-icons-png.flaticon.com/512/3593/3593461.png",
            source: "https://games.idm.tokyo/sudoku/"
        },
        {
            label: "Logic Branch SLOPE",
            thumb: "https://cdn-icons-png.flaticon.com/512/2721/2721620.png",
            source: "https://cookiedude.github.io/slope/"
        }
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
