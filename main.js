// main.js - Logic for Encyclopedia, Smart AI, Dictionary, and UI interactions

let lastResult = null; // Memory for the last topic discussed

// 1. Manual Typing Logic
// --- FIX IS HERE: Ensures typing-input triggers vocabulary highlighting in typing-display ---
const typingInputEl = document.getElementById('typing-input');
const typingDisplayEl = document.getElementById('typing-display');

if (typingInputEl && typingDisplayEl) {
    typingInputEl.oninput = () => {
        const text = typingInputEl.innerText; // Get raw text
        // Call the global processInput function (defined in HTML or shared)
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
    if (typeof BIBLIOTECA_DICIONARIO !== 'undefined') Object.assign(brain, BIBLIOTECA_DICIONARIO);
    if (typeof BIBLIOTECA_VOCABULARIO !== 'undefined') Object.assign(brain, BIBLIOTECA_VOCABULARIO);
    if (typeof BIBLIOTECA_FORM !== 'undefined') Object.assign(brain, BIBLIOTECA_FORM);
    return brain;
}

window.triggerSearch = function(topic) {
    if (aiSearch) {
        aiSearch.value = topic;
        window.askSmartAI(topic);
    }
};

// --- CORE SMART LOGIC ---

function analyzePastedContent(text) {
    const wordCount = text.split(/\s+/).length;
    const preview = text.substring(0, 150) + "...";
    
    lastResult = {
        titulo: "Conteúdo Externo Analisado",
        resumo: `um fragmento de texto com aproximadamente ${wordCount} palavras.`,
        html_content: `<div style="font-style: italic; color: #555;">"${preview}"</div>`,
        fullContent: text,
        isCustom: true
    };

    return `Li o conteúdo que você colou (${wordCount} palavras). Identifiquei a estrutura do texto. 
            <br><br><b>O que deseja fazer agora?</b> Digite <b>"resumo"</b> para ver os pontos principais ou pergunte sobre a <b>"importância"</b>.`;
}

function handleRelationIntent(text, brain) {
    if (!text.includes("relacione")) return null;

    const parts = text.replace("relacione", "").split("com").map(t => t.trim());
    if (parts.length < 2) return "Para unificar conhecimentos, use: 'relacione [termo A] com [termo B]'.";

    const entryA = Object.values(brain).find(e => e.titulo.toLowerCase().includes(parts[0]));
    const entryB = Object.values(brain).find(e => e.titulo.toLowerCase().includes(parts[1]));

    if (entryA && entryB) {
        const descA = (entryA.resumo || entryA.definicao || "").toLowerCase();
        const descB = (entryB.resumo || entryB.definicao || "").toLowerCase();
        const pointA = descA.split('.')[0]; 
        const pointB = descB.split('.')[0];

        const unifiedLogic = `<b>Nova Síntese Arquitetônica:</b> A convergência entre <b>${entryA.titulo}</b> e <b>${entryB.titulo}</b> revela que a lógica de ${pointA} é potencializada por ${pointB}.`;

        return { thought: unifiedLogic, sources: [entryA, entryB] };
    }
    return "Um dos termos não foi localizado nas bibliotecas.";
}

function handleIntents(text, brain) {
    const greetings = ["ola", "olá", "bom dia", "boa tarde", "boa noite", "oi"];
    if (greetings.includes(text)) return "Olá! Sou seu Tutor de Arquitetura. Como posso ajudar?";

    if (text.includes("falar sobre") || text.includes("estudar sobre")) {
        for (const key in brain) {
            if (text.includes(brain[key].titulo.toLowerCase())) {
                lastResult = brain[key];
                return `Claro, <b>${brain[key].titulo}</b> é um excelente tema. O que gostaria de saber?`;
            }
        }
    }
    return null;
}

function synthesizeAnalysis(text, entry) {
    if (text.includes("resumo")) {
        if (entry.isCustom) {
            const sentences = entry.fullContent.split(/[.!?]/).filter(s => s.trim().length > 20);
            const keyPoints = sentences.slice(0, 3).map(s => `<li>${s.trim()}</li>`).join('');
            return `<b>Pontos Identificados:</b><ul>${keyPoints}</ul>`;
        }
        return `O resumo de <b>${entry.titulo}</b> é: ${entry.resumo || entry.definicao}.`;
    }
    return null;
}

function getSmartIntroduction(entry) {
    const openers = [`Interessante você perguntar sobre <b>${entry.titulo}</b>. `, `No contexto da arquitetura, <b>${entry.titulo}</b> é fundamental. `];
    const rIntro = openers[Math.floor(Math.random() * openers.length)];
    return `${rIntro} Veja os detalhes abaixo:`;
}

window.askSmartAI = function(query) {
    if (!query || query.length < 2 || !aiContent) return;
    const text = query.toLowerCase().trim();
    const brain = getLibraryData();

    aiContent.innerHTML += `<div style="background: #e9ecef; padding: 10px; border-radius: 10px; margin-bottom: 15px;">👤 <strong>Você:</strong> "${query}"</div>`;

    const relationData = handleRelationIntent(text, brain);
    if (relationData) {
        if (typeof relationData === 'string') {
            aiContent.innerHTML += `<div style="background: #fff5f5; padding: 12px; border-radius: 10px; border-left: 4px solid #ff4d4d; margin-bottom: 15px;">🤖 ${relationData}</div>`;
        } else {
            aiContent.innerHTML += `<div style="background: #f0f7ff; padding: 15px; border-radius: 12px; border-left: 5px solid #007bff; margin-bottom: 10px;">🤖 ${relationData.thought}</div>`;
        }
        aiContent.scrollTop = aiContent.scrollHeight;
        return;
    }

    const intentResponse = handleIntents(text, brain);
    if (intentResponse) {
        aiContent.innerHTML += `<div style="background: #f0f4f8; padding: 12px; border-radius: 10px; border-left: 4px solid #007bff; margin-bottom: 15px;">🤖 ${intentResponse}</div>`;
    } else {
        // Simple keyword match
        let match = Object.values(brain).find(e => e.titulo.toLowerCase().includes(text));
        if (match) {
            lastResult = match;
            aiContent.innerHTML += `<div style="background: #fff; border: 1px solid #eee; padding: 15px; border-radius: 10px; margin-bottom: 15px;"><strong>${match.titulo}</strong><hr>${match.html_content || match.definicao}</div>`;
        } else {
            aiContent.innerHTML += `<div style="color: #666; font-style: italic; margin-bottom: 15px;">🤖 Não localizei este termo.</div>`;
        }
    }
    aiContent.scrollTop = aiContent.scrollHeight;
};

if (aiSearch) {
    aiSearch.onkeypress = (e) => { if (e.key === 'Enter') { window.askSmartAI(e.target.value); e.target.value = ""; } };
}

// 4. Export Logic
function exportToWord() {
    const content = document.getElementById('typing-input').innerHTML;
    const blob = new Blob(['\ufeff', content], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url; link.download = 'documento_ia.doc'; link.click();
}

function exportToPDF() { window.print(); }

// 5. Template Management
function updateTemplateDropdown() {
    const select = document.getElementById('template-select');
    if (!select) return;
    const templates = JSON.parse(localStorage.getItem('typing_templates') || '{}');
    select.innerHTML = '<option value="">Modelos...</option>';
    Object.keys(templates).forEach(name => {
        const opt = document.createElement('option');
        opt.value = name; opt.textContent = name;
        select.appendChild(opt);
    });
}

function saveTemplate() {
    const name = prompt("Nome do modelo:");
    if (!name) return;
    const templates = JSON.parse(localStorage.getItem('typing_templates') || '{}');
    templates[name] = document.getElementById('typing-input').innerHTML;
    localStorage.setItem('typing_templates', JSON.stringify(templates));
    updateTemplateDropdown();
}

function loadTemplate() {
    const select = document.getElementById('template-select');
    const templates = JSON.parse(localStorage.getItem('typing_templates') || '{}');
    if (select && templates[select.value]) {
        document.getElementById('typing-input').innerHTML = templates[select.value];
        // Trigger re-highlighting
        if (typeof processInput === 'function') {
            processInput(document.getElementById('typing-input').innerText, typingDisplayEl, false);
        }
    }
}

document.addEventListener('DOMContentLoaded', updateTemplateDropdown);
