// --- 1. THE DATA ---
const scripts = [
    { 
        name: "snake_control.js", 
        source: "./modules/article-s.html", 
        fakeCode: "// Snake Logic\nfunction init() { console.log('ready'); }" 
    },
    { 
        name: "logic_engine_v2.js", 
        source: "./modules/article-2.html", 
        fakeCode: "// 2048 Core\nconst buffer = new Array(16).fill(0);" 
    }
];

// --- 2. THE FUNCTIONS ---
// We use window. so the HTML buttons can ALWAYS find them
window.showArticle = function(key) {
    console.log("Showing article: " + key);
    document.getElementById('editor-view').style.display = 'none';
    document.getElementById('article-view').style.display = 'block';
    
    const content = document.getElementById('article-content');
    if(key === 'intro') {
        content.innerHTML = "<h1>Introduction</h1><p>Technical documentation for JS-Logic.</p>";
    } else {
        content.innerHTML = "<h1>API Endpoints</h1><p>Technical specifications for rendering.</p>";
    }
};

window.showEditor = function() {
    console.log("Opening Editor");
    document.getElementById('article-view').style.display = 'none';
    document.getElementById('editor-view').style.display = 'block';
};

window.closeModule = function() {
    document.getElementById('player-overlay').style.display = "none";
    document.getElementById('game-frame').src = "";
};

// --- 3. THE LOAD LOGIC ---
document.addEventListener('DOMContentLoaded', () => {
    console.log("Page Loaded - Initializing Sidebar");
    const fileList = document.getElementById('editor-files');
    const display = document.getElementById('code-display');
    const fileName = document.getElementById('current-filename');
    const testBtn = document.getElementById('test-btn');
    const frame = document.getElementById('game-frame');
    const overlay = document.getElementById('player-overlay');

    scripts.forEach((s) => {
        const div = document.createElement('div');
        div.style.padding = "10px";
        div.style.borderBottom = "1px solid #333";
        div.style.cursor = "pointer";
        div.innerText = "📄 " + s.name;
        
        div.onclick = () => {
            console.log("Selected script: " + s.name);
            fileName.innerText = s.name;
            display.innerText = s.fakeCode;
            testBtn.style.display = "block";
            
            // Set the button to launch this specific game
            testBtn.onclick = () => {
                console.log("Launching: " + s.source);
                frame.src = s.source;
                overlay.style.display = "block";
            };
        };
        fileList.appendChild(div);
    });
});
