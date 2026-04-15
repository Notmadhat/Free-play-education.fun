// --- 1. DATA: ARTICLES & SCRIPTS ---
const articles = {
    intro: "<h1>Introduction</h1><p>Welcome to the JS-Logic Documentation. This system handles high-speed logic processing for modular frameworks.</p><p>Use the navigation to explore technical specs or use the Editor to test rendering logic.</p>",
    api: "<h1>API Endpoints</h1><p><strong>GET /api/v1/render</strong> - Fetches primary rendering buffer.</p><p><strong>POST /api/v1/logic/test</strong> - Executes logic simulation modules in a sandboxed environment.</p>"
};

const scripts = [
    { 
        name: "snake_control.js", 
        source: "./modules/article-s.html", 
        fakeCode: "// System Snake Logic v1.2\n// Context: 2D_Canvas\nfunction update() {\n  processInput();\n  renderBuffer();\n}" 
    },
    { 
        name: "logic_engine_v2.js", 
        source: "./modules/article-2.html", 
        fakeCode: "// 2048 Math Module\n// Handling tile shifts and merging...\nconst grid = new Array(16).fill(0);\nfunction onInput(dir) {\n  applyPhysics(dir);\n}" 
    },
    { 
        name: "network_latency.js", 
        source: "./modules/article-r.html", 
        fakeCode: "// Packet Response Test\n// Testing ping response time...\nlet start = Date.now();" 
    }
];

// --- 2. GLOBAL VARIABLES ---
let activeSource = "";

// --- 3. NAVIGATION FUNCTIONS ---
// (We use window. so the HTML buttons can always find these)

window.showArticle = function(key) {
    document.getElementById('editor-view').style.display = 'none';
    document.getElementById('article-view').style.display = 'block';
    document.getElementById('article-content').innerHTML = articles[key] || "<h1>Error</h1><p>Module not found.</p>";
};

window.showEditor = function() {
    document.getElementById('article-view').style.display = 'none';
    document.getElementById('editor-view').style.display = 'block';
};

window.closeModule = function() {
    const overlay = document.getElementById('player-overlay');
    const frame = document.getElementById('game-frame');
    
    overlay.style.display = "none";
    frame.src = ""; // Clear source to stop game sound/logic
    document.body.style.overflow = "auto"; // Re-enable scrolling
};

// --- 4. INITIALIZATION (On Page Load) ---
document.addEventListener('DOMContentLoaded', () => {
    const fileList = document.getElementById('editor-files');
    const display = document.getElementById('code-display');
    const fileName = document.getElementById('current-filename');
    const testBtn = document.getElementById('test-btn');
    const frame = document.getElementById('game-frame');
    const overlay = document.getElementById('player-overlay');

    // Build the File Explorer Sidebar
    scripts.forEach((s) => {
        const div = document.createElement('div');
        div.style.padding = "10px";
        div.style.borderBottom = "1px solid #30363d";
        div.style.cursor = "pointer";
        div.style.fontSize = "14px";
        div.innerText = "📄 " + s.name;
        
        div.onclick = () => {
            // Update Editor UI
            fileName.innerText = s.name;
            display.innerText = s.fakeCode;
            testBtn.style.display = "block";
            activeSource = s.source; // Store the game path
        };
        fileList.appendChild(div);
    });

    // --- 5. THE RUN TEST BUTTON (WITH FOCUS FIX) ---
    testBtn.onclick = () => {
        if (activeSource !== "") {
            // 1. Set the source to the game
            frame.src = activeSource;
            
            // 2. Show the overlay
            overlay.style.display = "block";
            
            // 3. Disable main page scrolling
            document.body.style.overflow = "hidden";

            // 4. THE FIX: Wait for the game to load, then force keyboard focus
            frame.onload = function() {
                setTimeout(() => {
                    frame.contentWindow.focus();
                    console.log("Keyboard focus forced to game window.");
                }, 100); 
            };
        }
    };
});
