// --- 1. GLOBAL VARIABLES ---
let activeSource = "";

const scripts = [
    { 
        name: "snake_control.js", 
        source: "./modules/article-s.html", 
        fakeCode: "// System Snake Logic\nfunction update() { render(); }" 
    },
    { 
        name: "data_aggregator.js", 
        source: "./modules/article-2.html", 
        fakeCode: "// 2048 Math Module\nconst merge = (a, b) => a + b;" 
    },
    { 
        name: "network_latency.js", 
        source: "./modules/article-r.html", 
        fakeCode: "// Packet Response Test\nlet ping = Date.now();" 
    }
];

// --- 2. NAVIGATION FUNCTIONS (MUST BE GLOBAL) ---
window.showArticle = function(key) {
    const articles = {
        intro: "<h1>Introduction</h1><p>Welcome to the JS-Logic Documentation. This system handles high-speed logic processing.</p>",
        api: "<h1>API Endpoints</h1><p>GET /api/v1/render - Fetches primary rendering buffer.</p>"
    };
    document.getElementById('editor-view').style.display = 'none';
    document.getElementById('article-view').style.display = 'block';
    document.getElementById('article-content').innerHTML = articles[key] || "Article not found.";
};

window.showEditor = function() {
    document.getElementById('article-view').style.display = 'none';
    document.getElementById('editor-view').style.display = 'block';
};

window.closeModule = function() {
    document.getElementById('player-overlay').style.display = "none";
    document.getElementById('game-frame').src = "";
    document.body.style.overflow = "auto";
};

// --- 3. INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    const fileList = document.getElementById('editor-files');
    const testBtn = document.getElementById('test-btn');

    if (fileList) {
        scripts.forEach((s) => {
            const div = document.createElement('div');
            div.className = "file-item"; // Make sure this class is in your CSS
            div.style.padding = "8px";
            div.style.cursor = "pointer";
            div.innerText = '📄 ' + s.name;
            
            div.onclick = () => {
                document.getElementById('current-filename').innerText = s.name;
                document.getElementById('code-display').innerText = s.fakeCode;
                testBtn.style.display = 'block';
                activeSource = s.source;
            };
            fileList.appendChild(div);
        });
    }

    if (testBtn) {
        testBtn.onclick = () => {
            if (activeSource !== "") {
                document.getElementById('game-frame').src = activeSource;
                document.getElementById('module-title').innerText = "Testing: " + activeSource;
                document.getElementById('player-overlay').style.display = "block";
                document.body.style.overflow = "hidden";
            }
        };
    }
});
