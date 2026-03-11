// main.js - Logic for Encyclopedia, Smart AI, Dictionary, and UI interactions

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
    // Relating contents from all data sources
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
            <br><br><b>O que deseja fazer agora?</b> Digite <b>"resumo"</b> para ver os pontos principais ou pergunte sobre a <b>"importância"</b> do que foi dito.`;
}

// Advanced logic to unify multiple data sources into a new logic
function handleRelationIntent(text, brain) {
    if (!text.includes("relacione")) return null;

    // Supports "relacione [A] com [B]" or just typing the terms
    const parts = text.replace("relacione", "").split("com").map(t => t.trim());
    if (parts.length < 2) return "Para unificar conhecimentos, use: 'relacione [termo A] com [termo B]'.";

    const entryA = Object.values(brain).find(e => e.titulo.toLowerCase().includes(parts[0]));
    const entryB = Object.values(brain).find(e => e.titulo.toLowerCase().includes(parts[1]));

    if (entryA && entryB) {
        const descA = (entryA.resumo || entryA.definicao || "").toLowerCase();
        const descB = (entryB.resumo || entryB.definicao || "").toLowerCase();

        // Extracting "Main Points" (Key architectural attributes)
        const pointA = descA.split('.')[0]; 
        const pointB = descB.split('.')[0];

        // Generating New Unified Logic
        const unifiedLogic = `<b>Nova Síntese Arquitetônica:</b> A convergência entre <b>${entryA.titulo}</b> e <b>${entryB.titulo}</b> revela que a lógica de ${pointA} é intrinsecamente potencializada pela premissa de ${pointB}. No design, essa unificação transforma o conceito em uma solução técnica onde a função de um justifica a estética do outro.`;

        return {
            thought: unifiedLogic,
            sources: [entryA, entryB]
        };
    }
    return "Um dos termos não foi localizado nas bibliotecas (Dicionário, Enciclopédia, Vocabulário ou Form).";
}

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
    if (text.includes("resumo")) {
        if (entry.isCustom) {
            const sentences = entry.fullContent.split(/[.!?]/).filter(s => s.trim().length > 20);
            const keyPoints = sentences.slice(0, 3).map(s => `<li>${s.trim()}</li>`).join('');
            
            return `<b>Principais Pontos Identificados:</b>
                    <ul style="margin: 10px 0; padding-left: 20px;">${keyPoints}</ul>
                    <b>Resumo da Análise:</b> O texto apresenta uma narrativa técnica focada em detalhes estruturais.`;
        }
        return `O resumo de <b>${entry.titulo}</b> é: ${entry.resumo || entry.definicao}.`;
    }

    const analysisPrompts = [
        { key: "importancia", response: `A importância de <b>${entry.titulo}</b> reside no fato de que ${(entry.resumo || entry.definicao).toLowerCase()}.` },
        { key: "como funciona", response: `O funcionamento de <b>${entry.titulo}</b> se dá através da articulação de elementos que ${(entry.resumo || entry.definicao).toLowerCase()}.` },
        { key: "significa", response: `Em termos conceituais, <b>${entry.titulo}</b> significa ${(entry.resumo || entry.definicao).toLowerCase()}.` }
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
        `No contexto da arquitetura, <b>${entry.titulo}</b> é fundamental porque `
    ];
    const closers = [" Analise os detalhes técnicos abaixo:", " Veja como isso se aplica no design:", " Note os princípios fundamentais:"];
    const rIntro = openers[Math.floor(Math.random() * openers.length)];
    const rEnd = closers[Math.floor(Math.random() * closers.length)];
    const content = entry.resumo || entry.definicao;
    return `${rIntro}${content.toLowerCase()}${rEnd}`;
}

window.askSmartAI = function(query) {
    if (!query || query.length < 2) return;
    const text = query.toLowerCase().trim();
    const brain = getLibraryData();

    aiContent.innerHTML += `<div class="user-chat-bubble" style="background: #e9ecef; padding: 10px; border-radius: 10px; margin-bottom: 15px; border-right: 4px solid #adb5bd; font-family: sans-serif; font-size: 0.9rem; white-space: pre-wrap;">👤 <strong>Você:</strong> "${query}"</div>`;
    aiContent.scrollTop = aiContent.scrollHeight;

    // --- RELATION & UNIFICATION LOGIC ---
    const relationData = handleRelationIntent(text, brain);
    if (relationData) {
        if (typeof relationData === 'string') {
            aiContent.innerHTML += `<div class="ai-chat-bubble" style="background: #fff5f5; padding: 12px; border-radius: 10px; border-left: 4px solid #ff4d4d; margin-bottom: 15px;">🤖 <strong>AI Tutor:</strong> "${relationData}"</div>`;
        } else {
            aiContent.innerHTML += `
                <div class="ai-chat-bubble" style="background: #f0f7ff; padding: 15px; border-radius: 12px; border-left: 5px solid #007bff; margin-bottom: 10px;">
                    🤖 <strong>Pensamento Unificado:</strong><br>${relationData.thought}
                </div>`;
            relationData.sources.forEach(src => {
                aiContent.innerHTML += `
                <div class="encyclopedia-entry" style="padding: 10px; border-radius: 8px; background: #fafafa; border: 1px solid #eee; margin-bottom: 10px; font-size: 0.85rem;">
                    <strong>Fonte (${src.titulo}):</strong> ${src.html_content || src.definicao}
                </div>`;
            });
        }
        aiContent.scrollTop = aiContent.scrollHeight;
        return;
    }

    if (query.length > 200) {
        const analysisMsg = analyzePastedContent(query);
        aiContent.innerHTML += `<div class="ai-chat-bubble" style="background: #fdfae6; padding: 12px; border-radius: 10px; border-left: 4px solid #f1c40f; margin-bottom: 15px;">🤖 <strong>AI Analista:</strong> ${analysisMsg}</div>`;
        aiContent.scrollTop = aiContent.scrollHeight;
        return;
    }

    const intentResponse = handleIntents(text, brain);
    if (intentResponse) {
        aiContent.innerHTML += `<div class="ai-chat-bubble" style="background: #f0f4f8; padding: 12px; border-radius: 10px; border-left: 4px solid var(--ai-accent); margin-bottom: 15px;">🤖 <strong>AI Tutor:</strong> "${intentResponse}"</div>`;
    } 
    else if (lastResult && synthesizeAnalysis(text, lastResult)) {
        const analysis = synthesizeAnalysis(text, lastResult);
        aiContent.innerHTML += `
            <div class="ai-chat-bubble" style="background: #eef9f0; padding: 12px; border-radius: 10px; border-left: 4px solid #28a745; margin-bottom: 10px;">
                🤖 <strong>Análise:</strong> "${analysis}"
            </div>
            <div class="encyclopedia-entry" style="padding:10px; border:1px solid #eee; background:#fff; font-size:0.9rem; margin-bottom: 15px; border-radius: 8px;">
                <strong>${lastResult.titulo}</strong><hr>${lastResult.html_content || lastResult.definicao}
            </div>`;
    } 
    else {
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
            const isDict = !!bestMatch.definicao;
            aiContent.innerHTML += `
                <div class="ai-chat-bubble" style="background: #f8faff; padding: 15px; border-radius: 12px; border-left: 5px solid var(--ai-accent); margin-bottom: 10px;">
                    🤖 <strong>AI Tutor:</strong> ${getSmartIntroduction(bestMatch)}
                </div>
                <div class="encyclopedia-entry" style="padding: 15px; border-radius: 12px; background: #fff; border: 1px solid #eee; margin-bottom: 15px;">
                    <strong>${isDict ? '📖 Dicionário:' : (bestMatch.icone || '📖') + ' ' + bestMatch.titulo}</strong><hr>
                    ${bestMatch.html_content || bestMatch.definicao}
                    ${isDict ? `<br><small><i>Contexto: ${bestMatch.contexto}</i></small>` : ''}
                </div>`;
        } else {
            aiContent.innerHTML += `<div class="ai-chat-bubble" style="background: #fff5f5; padding: 12px; border-radius: 10px; border-left: 4px solid #ff4d4d; margin-bottom: 15px;">🤖 <strong>AI Tutor:</strong> "Não encontrei o termo '${query}' no dicionário ou biblioteca."</div>`;
        }
    }
    aiContent.scrollTop = aiContent.scrollHeight;
};

if (aiSearch) {
    aiSearch.onkeypress = (e) => { 
        if (e.key === 'Enter') {
            const val = e.target.value;
            window.askSmartAI(val);
            e.target.value = ""; 
        }
    };
}

// 4. Export & Template Logic (Kept Intact)
function exportToWord() {
    // Captura o conteúdo do editor
    const content = document.getElementById('typing-input').innerHTML;
    
    // Configuração do cabeçalho para simular um documento Word XML
    const header = `
        <html xmlns:o='urn:schemas-microsoft-com:office:office' 
              xmlns:w='urn:schemas-microsoft-com:office:word' 
              xmlns='http://www.w3.org/TR/REC-html40'>
        <head>
            <meta charset='utf-8'>
            <title>Export Document</title>
            <style>
                body { font-family: 'Segoe UI', Arial, sans-serif; }
                p { margin: 0; padding: 0; }
            </style>
        </head>
        <body>`;
        
    const footer = "</body></html>";
    const sourceHTML = header + content + footer;

    // Criação do Blob com o MIME type correto para Word
    const blob = new Blob(['\ufeff', sourceHTML], {
        type: 'application/msword' 
    });

    const url = URL.createObjectURL(blob);
    const fileDownload = document.createElement("a");
    fileDownload.href = url;
    
    // Alterado para .doc (que o Word abre como compatível) 
    // ou .docx se você quiser forçar o sistema a reconhecer o XML
    fileDownload.download = 'documento_arquitetura.doc'; 
    
    document.body.appendChild(fileDownload);
    fileDownload.click();
    document.body.removeChild(fileDownload);
    URL.revokeObjectURL(url);
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
