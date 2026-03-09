// main.js - Logic for Encyclopedia, Smart AI, and UI interactions

let lastResult = null; // Memory for the last topic discussed

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

window.triggerSearch = function(topic) {
    if (aiSearch) {
        aiSearch.value = topic;
        window.askSmartAI(topic);
    }
};

// --- CORE SMART LOGIC ---

function handleIntents(text, brain) {
    const greetings = ["ola", "olá", "bom dia", "boa tarde", "boa noite", "oi"];
    if (greetings.includes(text)) {
        return "Olá! Sou seu Tutor de Arquitetura. Como posso ajudar em seus estudos hoje?";
    }

    if (text.includes("falar sobre") || text.includes("discutir sobre") || text.includes("estudar sobre")) {
        for (const key in brain) {
            if (text.includes(brain[key].titulo.toLowerCase())) {
                lastResult = brain[key];
                return `Claro, <b>${brain[key].titulo}</b> é um excelente tema. O que exatamente você gostaria de saber ou analisar sobre este assunto?`;
            }
        }
        return "Sobre qual assunto exatamente você gostaria de conversar?";
    }
    return null;
}

function synthesizeAnalysis(text, entry) {
    const analysisPrompts = [
        { key: "importancia", response: `A importância de <b>${entry.titulo}</b> reside no fato de que ${entry.resumo.toLowerCase()}. Sem isso, o equilíbrio arquitetônico ficaria comprometido.` },
        { key: "como funciona", response: `O funcionamento de <b>${entry.titulo}</b> se dá através da articulação de elementos que ${entry.resumo.toLowerCase()}, permitindo uma leitura clara do espaço.` },
        { key: "significa", response: `Em termos conceituais, <b>${entry.titulo}</b> significa ${entry.resumo.toLowerCase()}. É a base para entender este volume.` }
    ];
    for (let p of analysisPrompts) {
        if (text.includes(p.key)) return p.response;
    }
    return null;
}

function getSmartIntroduction(entry) {
    const openers = [
        `Interessante você perguntar sobre <b>${entry.titulo}</b>. Basicamente, `,
        `Certamente! Ao analisarmos <b>${entry.titulo}</b>, percebemos que `,
        `No contexto da arquitetura, <b>${entry.titulo}</b> é fundamental porque `,
        `Explorar <b>${entry.titulo}</b> nos ajuda a entender como `
    ];
    const closers = [" Analise os detalhes técnicos abaixo:", " Veja como isso se aplica no design:", " Note os princípios fundamentais:"];
    const rIntro = openers[Math.floor(Math.random() * openers.length)];
    const rEnd = closers[Math.floor(Math.random() * closers.length)];
    return `${rIntro}${entry.resumo.toLowerCase()}${rEnd}`;
}

window.askSmartAI = function(query) {
    if (!query || query.length < 2) return;
    const text = query.toLowerCase().trim();
    const brain = getLibraryData();

    // STEP 1: Intent Check
    const intentResponse = handleIntents(text, brain);
    if (intentResponse) {
        aiContent.innerHTML = `<div class="ai-chat-bubble" style="background: #f0f4f8; padding: 12px; border-radius: 10px; border-left: 4px solid var(--ai-accent);">🤖 <strong>AI Tutor:</strong> "${intentResponse}"</div>`;
        return;
    }

    // STEP 2: Analytical Question Check
    if (lastResult) {
        const analysis = synthesizeAnalysis(text, lastResult);
        if (analysis) {
            aiContent.innerHTML = `
                <div class="ai-chat-bubble" style="background: #eef9f0; padding: 12px; border-radius: 10px; border-left: 4px solid #28a745; margin-bottom: 10px;">
                    🤖 <strong>Análise:</strong> "${analysis}"
                </div>
                <div class="encyclopedia-entry" style="padding:10px; border:1px solid #eee; background:#fff; font-size:0.9rem;">
                    <strong>${lastResult.titulo}</strong><hr>${lastResult.html_content}
                </div>`;
            return;
        }
    }

    // STEP 3: Search Logic
    let bestMatch = null;
    let highestScore = 0;
    for (const key in brain) {
        let score = 0;
        const entry = brain[key];
        if (entry.keywords?.some(k => text.includes(k.toLowerCase()))) score += 20;
        if (entry.titulo?.toLowerCase().includes(text)) score += 15;
        if (score > highestScore) {
            highestScore = score;
            bestMatch = entry;
        }
    }

    if (bestMatch && highestScore > 0) {
        lastResult = bestMatch;
        let suggestions = Object.keys(brain).filter(k => k !== bestMatch.key && brain[k].fase === bestMatch.fase).slice(0, 3);
        let suggestionHtml = suggestions.length > 0 ? `<div style="margin-top:10px; border-top:1px dashed #ccc; padding-top:5px;"><small>Relacionados:</small> ` + suggestions.map(k => `<button onclick="triggerSearch('${brain[k].titulo}')" style="background:#fff; border:1px solid var(--ai-accent); border-radius:10px; cursor:pointer; font-size:10px; margin-right:3px;">${brain[k].titulo}</button>`).join('') + `</div>` : "";

        aiContent.innerHTML = `
            <div class="ai-chat-bubble" style="background: #f8faff; padding: 15px; border-radius: 12px; border-left: 5px solid var(--ai-accent); margin-bottom: 15px;">
                🤖 <strong>AI Tutor:</strong> ${getSmartIntroduction(bestMatch)}
                ${suggestionHtml}
            </div>
            <div class="encyclopedia-entry" style="padding: 15px; border-radius: 12px; background: #fff; border: 1px solid #eee;">
                <strong>${bestMatch.icone || '📖'} ${bestMatch.titulo}</strong><hr>${bestMatch.html_content}
            </div>`;
    } else {
        aiContent.innerHTML = `<div class="ai-chat-bubble" style="background: #fff5f5; padding: 12px; border-radius: 10px; border-left: 4px solid #ff4d4d;">🤖 <strong>AI Tutor:</strong> "Poderia reformular ou citar um conceito específico de arquitetura?"</div>`;
    }
};

if (aiSearch) {
    aiSearch.oninput = (e) => window.askSmartAI(e.target.value);
    aiSearch.onkeypress = (e) => { if (e.key === 'Enter') window.askSmartAI(e.target.value); };
}

// 4. Export & Template Logic (Kept Intact)
function exportToWord() {
    const content = document.getElementById('typing-input').innerHTML;
    const header = `<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><style>body { font-family: 'Segoe UI', Arial, sans-serif; }</style></head><body>`;
    const sourceHTML = header + content + "</body></html>";
    const blob = new Blob(['\ufeff', sourceHTML], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const fileDownload = document.createElement("a");
    fileDownload.href = url; fileDownload.download = 'documento.doc';
    document.body.appendChild(fileDownload); fileDownload.click();
    document.body.removeChild(fileDownload); URL.revokeObjectURL(url);
}

function exportToPDF() {
    const content = document.getElementById('typing-input').innerHTML;
    const originalBody = document.body.innerHTML;
    document.body.innerHTML = `<div style="padding: 40px; font-family: 'Segoe UI', sans-serif;">${content}</div>`;
    window.print(); document.body.innerHTML = originalBody; window.location.reload();
}

const templateSelect = document.getElementById('template-select');
function updateTemplateDropdown() {
    const templates = JSON.parse(localStorage.getItem('typing_templates') || '{}');
    if (!templateSelect) return;
    templateSelect.innerHTML = '<option value="">Modelos...</option>';
    for (const name in templates) {
        const option = document.createElement('option');
        option.value = name; option.textContent = name;
        templateSelect.appendChild(option);
    }
}
function saveTemplate() {
    const name = prompt("Nome do modelo:"); if (!name) return;
    const templates = JSON.parse(localStorage.getItem('typing_templates') || '{}');
    templates[name] = document.getElementById('typing-input').innerHTML;
    localStorage.setItem('typing_templates', JSON.stringify(templates));
    updateTemplateDropdown();
}
function loadTemplate() {
    const templates = JSON.parse(localStorage.getItem('typing_templates') || '{}');
    const content = templates[templateSelect.value];
    if (content) document.getElementById('typing-input').innerHTML = content;
}
updateTemplateDropdown();
