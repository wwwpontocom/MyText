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

window.triggerSearch = function(topic) {
    if (aiSearch) {
        aiSearch.value = topic;
        window.askSmartAI(topic);
    }
};

// New Helper: Generates a "Professor-like" introduction
function getSmartIntroduction(entry) {
    const intros = [
        `Interessante você perguntar sobre <b>${entry.titulo}</b>. Basicamente, trata-se de `,
        `Certamente! Ao analisarmos <b>${entry.titulo}</b>, percebemos que `,
        `No contexto da arquitetura, <b>${entry.titulo}</b> é fundamental porque `,
        `Explorar <b>${entry.titulo}</b> nos ajuda a entender como `
    ];
    const conclusion = [
        " Analise os detalhes técnicos abaixo:",
        " Veja como isso se aplica no design:",
        " Note os princípios fundamentais descritos aqui:"
    ];
    
    const randomIntro = intros[Math.floor(Math.random() * intros.length)];
    const randomEnd = conclusion[Math.floor(Math.random() * conclusion.length)];
    
    return `${randomIntro}${entry.resumo.charAt(0).toLowerCase() + entry.resumo.slice(1)}${randomEnd}`;
}

window.askSmartAI = function(query) {
    if (!query || query.length < 2) return;
    
    const text = query.toLowerCase().trim();
    const brain = getLibraryData();
    let bestMatch = null;
    let highestScore = 0;
    let suggestions = [];

    // 1. Advanced Search Logic
    for (const key in brain) {
        let score = 0;
        const entry = brain[key];
        if (entry.keywords) {
            entry.keywords.forEach(k => { if (text.includes(k.toLowerCase())) score += 20; });
        }
        if (entry.titulo && entry.titulo.toLowerCase().includes(text)) score += 15;
        // Boost score if the query exactly matches a keyword
        if (entry.keywords && entry.keywords.includes(text)) score += 30;

        if (score > highestScore) {
            highestScore = score;
            bestMatch = entry;
            bestMatch.key = key;
        }
    }

    // 2. Suggestion Logic
    if (bestMatch) {
        suggestions = Object.keys(brain)
            .filter(key => key !== bestMatch.key)
            .filter(key => brain[key].fase === bestMatch.fase || brain[key].keywords.some(k => bestMatch.keywords.includes(k)))
            .slice(0, 3);
    }

    // 3. UI Rendering (Smart Response)
    if (bestMatch && highestScore > 0) {
        let suggestionHtml = "";
        if (suggestions.length > 0) {
            suggestionHtml = `
                <div style="margin-top: 12px; border-top: 1px dashed rgba(0,0,0,0.1); padding-top: 8px;">
                    <small style="display:block; margin-bottom: 5px; color: #666; font-style: normal;">Para aprofundar, veja também:</small>
                    ${suggestions.map(key => `
                        <button onclick="triggerSearch('${brain[key].titulo}')" 
                                style="background: white; border: 1px solid var(--ai-accent); border-radius: 12px; padding: 3px 10px; font-size: 11px; cursor: pointer; margin-right: 5px; color: var(--ai-accent); transition: 0.2s;">
                            ${brain[key].icone || '🔍'} ${brain[key].titulo}
                        </button>
                    `).join('')}
                </div>
            `;
        }

        const aiIntroText = getSmartIntroduction(bestMatch);

        aiContent.innerHTML = `
            <div class="ai-chat-bubble" style="background: #f8faff; padding: 15px; border-radius: 12px; border: 1px solid #e0e6ed; border-left: 5px solid var(--ai-accent); margin-bottom: 15px; font-family: 'Segoe UI', sans-serif;">
                <span style="font-size: 1.2rem; margin-right: 5px;">🎓</span> <strong>AI Professor:</strong>
                <p style="margin: 8px 0; line-height: 1.5; color: #2c3e50;">${aiIntroText}</p>
                ${suggestionHtml}
            </div>
            <div class="encyclopedia-entry" style="padding: 15px; border-radius: 12px; background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.05); border: 1px solid #eee;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                   <strong style="font-size: 1.1rem;">${bestMatch.icone || '📖'} ${bestMatch.titulo}</strong>
                   <small style="background: #f0f0f0; padding: 2px 8px; border-radius: 10px; color: #666;">Pág. ${bestMatch.pagina || '---'}</small>
                </div>
                <hr style="border: 0; border-top: 1px solid #eee; margin-bottom: 10px;">
                <div style="font-size: 0.95rem; color: #444;">${bestMatch.html_content}</div>
            </div>
        `;
    } else {
        aiContent.innerHTML = `
            <div class="ai-chat-bubble" style="background: #fff5f5; padding: 15px; border-radius: 12px; border-left: 5px solid #ff4d4d; color: #842029;">
                <strong>AI Professor:</strong> "Não encontrei uma correlação direta para '${query}' em minha biblioteca atual. Que tal explorarmos os conceitos de <i>Forma</i> ou <i>Organização Espacial</i>?"
            </div>`;
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
    const header = `<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><style>body { font-family: 'Segoe UI', Arial, sans-serif; }</style></head><body>`;
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
