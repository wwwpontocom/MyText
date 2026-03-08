// main.js - Logic for Encyclopedia, Smart AI, and UI interactions

// 1. Manual Typing Logic
const typingInputEl = document.getElementById('typing-input');
const typingDisplayEl = document.getElementById('typing-display');

if (typingInputEl) {
    typingInputEl.oninput = () => {
        const text = typingInputEl.innerText.toLowerCase();
        if (typeof processInput === 'function') {
            processInput(text, typingDisplayEl, false);
        }
    };
}

// 2. Toolbar Command Logic
function execCmd(command, value = null) {
    document.execCommand(command, false, value);
}

// 3. Smart AI Brain Logic (Consolidated Search & Conversation)
const aiContent = document.getElementById('ai-content');
const aiSearch = document.getElementById('ai-search');

function getLibraryData() {
    const brain = {};
    if (typeof BIBLIOTECA_ENCICLOPEDIA !== 'undefined') Object.assign(brain, BIBLIOTECA_ENCICLOPEDIA);
    if (typeof BIBLIOTECA_LIVRO !== 'undefined') Object.assign(brain, BIBLIOTECA_LIVRO);
    return brain;
}

window.askSmartAI = function(query) {
    if (!query || query.length < 2) return;
    
    const text = query.toLowerCase().trim();
    const brain = getLibraryData();
    let bestMatch = null;
    let highestScore = 0;

    for (const key in brain) {
        let score = 0;
        const entry = brain[key];

        if (entry.keywords) {
            entry.keywords.forEach(k => {
                if (text.includes(k.toLowerCase())) score += 20;
            });
        }
        if (entry.titulo && entry.titulo.toLowerCase().includes(text)) score += 15;
        if (entry.html_content && entry.html_content.toLowerCase().includes(text)) score += 5;

        if (score > highestScore) {
            highestScore = score;
            bestMatch = entry;
        }
    }

    if (bestMatch && highestScore > 0) {
        aiContent.innerHTML = `
            <div style="border-left: 4px solid var(--ai-accent); padding-left: 10px;">
                <small style="color: var(--ai-accent); font-weight: bold;">[CONTEÚDO ENCONTRADO]</small><br>
                <strong>${bestMatch.icone || 'ℹ️'} ${bestMatch.titulo}</strong><br>
                <div style="font-size: 0.9rem; margin-top: 5px;">${bestMatch.html_content}</div>
            </div>
        `;
    } else {
        aiContent.innerHTML = `<i>🧠 Desculpe, não encontrei informações sobre "${query}". Tente outros termos.</i>`;
    }
};

if (aiSearch) {
    aiSearch.oninput = (e) => window.askSmartAI(e.target.value);
    aiSearch.onkeypress = (e) => {
        if (e.key === 'Enter') window.askSmartAI(e.target.value);
    };
}

// 4. Export Logic
function exportToWord() {
    const content = document.getElementById('typing-input').innerHTML;
    const header = `
        <html xmlns:o='urn:schemas-microsoft-com:office:office' 
              xmlns:w='urn:schemas-microsoft-com:office:word' 
              xmlns='http://www.w3.org/TR/REC-html40'>
        <head><meta charset='utf-8'><style>body { font-family: 'Segoe UI', Arial, sans-serif; }</style></head>
        <body>`;
    const footer = "</body></html>";
    const sourceHTML = header + content + footer;
    const blob = new Blob(['\ufeff', sourceHTML], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const fileDownload = document.createElement("a");
    fileDownload.href = url;
    fileDownload.download = 'documento.doc';
    document.body.appendChild(fileDownload);
    fileDownload.click();
    document.body.removeChild(fileDownload);
    URL.revokeObjectURL(url);
}

function exportToPDF() {
    const content = document.getElementById('typing-input').innerHTML;
    const originalBody = document.body.innerHTML;
    document.body.innerHTML = `<div style="padding: 40px; font-family: 'Segoe UI', sans-serif;">${content}</div>`;
    window.print();
    document.body.innerHTML = originalBody;
    window.location.reload();
}

// 5. Template System Logic
const templateSelect = document.getElementById('template-select');

function updateTemplateDropdown() {
    const templates = JSON.parse(localStorage.getItem('typing_templates') || '{}');
    if (!templateSelect) return;
    templateSelect.innerHTML = '<option value="">Modelos...</option>';
    for (const name in templates) {
        const option = document.createElement('option');
        option.value = name;
        option.textContent = name;
        templateSelect.appendChild(option);
    }
}

function saveTemplate() {
    const name = prompt("Digite um nome para este modelo:");
    if (!name) return;
    const content = document.getElementById('typing-input').innerHTML;
    const templates = JSON.parse(localStorage.getItem('typing_templates') || '{}');
    templates[name] = content;
    localStorage.setItem('typing_templates', JSON.stringify(templates));
    alert("Modelo '" + name + "' salvo!");
    updateTemplateDropdown();
}

function loadTemplate() {
    const selectedName = templateSelect.value;
    if (!selectedName) return;
    const templates = JSON.parse(localStorage.getItem('typing_templates') || '{}');
    const content = templates[selectedName];
    if (content !== undefined) {
        const inputArea = document.getElementById('typing-input');
        inputArea.innerHTML = content;
        if (typeof processInput === 'function') {
            processInput(inputArea.innerText.toLowerCase(), typingDisplayEl, false);
        }
    }
}

updateTemplateDropdown();
