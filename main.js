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

// Helper to trigger search from suggested buttons
window.triggerSearch = function(topic) {
    if (aiSearch) {
        aiSearch.value = topic;
        window.askSmartAI(topic);
    }
};

window.askSmartAI = function(query) {
    if (!query || query.length < 2) return;
    
    const text = query.toLowerCase().trim();
    const brain = getLibraryData();
    let bestMatch = null;
    let highestScore = 0;
    let suggestions = [];

    // 1. Search Logic
    for (const key in brain) {
        let score = 0;
        const entry = brain[key];
        if (entry.keywords) {
            entry.keywords.forEach(k => { if (text.includes(k.toLowerCase())) score += 20; });
        }
        if (entry.titulo && entry.titulo.toLowerCase().includes(text)) score += 15;
        if (entry.html_content && entry.html_content.toLowerCase().includes(text)) score += 5;

        if (score > highestScore) {
            highestScore = score;
            bestMatch = entry;
            bestMatch.key = key; // Store key to avoid suggesting itself
        }
    }

    // 2. Suggestion Logic (Find 3 related items)
    if (bestMatch) {
        suggestions = Object.keys(brain)
            .filter(key => key !== bestMatch.key) // Don't suggest current topic
            .filter(key => {
                // Check if they share keywords or are in the same phase/category
                const entry = brain[key];
                return entry.fase === bestMatch.fase || 
                       entry.keywords.some(k => bestMatch.keywords.includes(k));
            })
            .slice(0, 3); // Limit to 3 suggestions
    }

    // 3. Conversational Logic (The Chat Layer)
    if (bestMatch && highestScore > 0) {
        let suggestionHtml = "";
        if (suggestions.length > 0) {
            suggestionHtml = `
                <div style="margin-top: 12px; border-top: 1px dashed #ccc; padding-top: 8px;">
                    <small style="display:block; margin-bottom: 5px; color: #666;">Tópicos relacionados:</small>
                    ${suggestions.map(key => `
                        <button onclick="triggerSearch('${brain[key].titulo}')" 
                                style="background: #e3f2fd; border: 1px solid #bbdefb; border-radius: 15px; padding: 4px 10px; font-size: 11px; cursor: pointer; margin-right: 5px; color: #1976d2;">
                            ${brain[key].icone || '🔍'} ${brain[key].titulo}
                        </button>
                    `).join('')}
                </div>
            `;
        }

        const aiIntroduction = `
            <div class="ai-chat-bubble" style="background: #f0f4f8; padding: 12px; border-radius: 10px; border-left: 4px solid var(--ai-accent); margin-bottom: 15px; font-style: italic;">
                🤖 <strong>AI Tutor:</strong> "Sobre <b>${bestMatch.titulo}</b>, posso te dizer que ${bestMatch.resumo.toLowerCase()} 
                Aqui estão os detalhes técnicos que encontrei nos meus arquivos:"
                ${suggestionHtml}
            </div>
        `;

        aiContent.innerHTML = `
            ${aiIntroduction}
            <div class="encyclopedia-entry" style="padding: 10px; border: 1px solid #eee; border-radius: 8px; background: #fff; line-height: 1.6;">
                <small style="color: #888;">FONTE: Pág. ${bestMatch.pagina || '---'}</small><br>
                <strong>${bestMatch.icone || '📖'} ${bestMatch.titulo}</strong><hr>
                ${bestMatch.html_content}
            </div>
        `;
    } else {
        aiContent.innerHTML = `
            <div class="ai-chat-bubble" style="background: #fff5f5; padding: 12px; border-radius: 10px; border-left: 4px solid #ff4d4d;">
                🤖 <strong>AI Tutor:</strong> "Ainda não tenho informações detalhadas sobre '${query}' no meu cérebro. Tente pesquisar sobre 'forma', 'espaço' ou 'proporção'."
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
