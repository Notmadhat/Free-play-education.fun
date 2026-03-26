// DATA FOR FAKE ARTICLES
const articles = {
    intro: "<h1>Introduction</h1><p>Welcome to the JS-Logic Documentation. This framework handles high-speed logic processing for web-based rendering components.</p>",
    api: "<h1>API Endpoints</h1><p>GET /api/v1/render/canvas - Fetches primary rendering buffer.<br>POST /api/v1/logic/test - Executes logic simulation modules.</p>",
    rendering: "<h1>Canvas Rendering</h1><p>Our rendering engine uses the HTML5 Canvas API to display complex data structures in real-time. See the Script Editor to test modules.</p>"
};

// DATA FOR GAMES (SCRIPTS)
const scripts = [
    { name: "snake_logic.js", source: "./modules/snake-logic.html", fakeCode: "// Snake Logic v1.2\n// Initializing Canvas context...\nfunction update() {\n  processInput();\n  renderBuffer();\n}" },
    { name: "2048_render.js", source: "./modules/2048-logic.html", fakeCode: "// 2048 Grid Module\n// Handling tile shifts...\nlet grid = [0,2,0,0...];\nfunction merge() {\n  // Logic here\n}" },
    { name: "tetris_core.js", source: "https://chvin.github.io/react-tetris/", fakeCode: "// Tetris Core Engine\n// Gravity constant: 1.0\n// Rotating matrix 90deg..." }
];

let selectedScript = null;

// UI NAVIGATION FUNCTIONS
function showArticle(key) {
    document.getElementById('editor-view').style.display = 'none';
    document.getElementById('article-view').style.display = 'block';
    document.getElementById('article-content').innerHTML = articles[key];
}

function showEditor() {
    document.getElementById('article-view').style.display = 'none';
    document.getElementById('editor-view').style.display = 'block';
}

// INITIALIZE EDITOR FILES
document.addEventListener('DOMContentLoaded', () => {
    const fileList = document.getElementById('editor-files');
    scripts.forEach((s, index) => {
        const div = document.createElement('div');
        div.className = 'file-item';
        div.innerText = '📄 ' + s.name;
        div.onclick = () => selectScript(index);
        fileList.appendChild(div);
    });
});

function selectScript(index) {
    selectedScript = scripts[index];
    document.getElementById('current-filename').innerText = selectedScript.name;
    document.getElementById('code-display').innerText = selectedScript.fakeCode;
    document.getElementById('test-btn').style.display = 'block';
}

// THE "TEST" BUTTON ACTION
document.getElementById('test-btn').onclick = function() {
    if (selectedScript) {
        launchModule(selectedScript.source, selectedScript.name);
    }
};

// CORE GAME FUNCTIONS (Same as before)
function launchModule(url, name) {
    const overlay = document.getElementById('player-overlay');
    const frame = document.getElementById('game-frame');
    const titleDisplay = document.getElementById('module-title');
    frame.src = url;
    titleDisplay.innerText = "Simulation Testing: " + name;
    overlay.style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeModule() {
    document.getElementById('player-overlay').style.display = "none";
    document.getElementById('game-frame').src = ""; 
    document.body.style.overflow = "auto";
}
