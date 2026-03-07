// 1. Manual Typing Logic
const typingInputEl = document.getElementById('typing-input');
const typingDisplayEl = document.getElementById('typing-display');

if (typingInputEl) {
    typingInputEl.oninput = () => {
        const text = typingInputEl.innerText.toLowerCase();
        // Uses the processInput function defined in the HTML
        if (typeof processInput === 'function') {
            processInput(text, typingDisplayEl, false);
        }
    };
}

// 2. Toolbar Command Logic
function execCmd(command) {
    document.execCommand(command, false, null);
}

// 3. AI Encyclopedia Search Logic
const aiContent = document.getElementById('ai-content');
const aiSearch = document.getElementById('ai-search');

function buscarNaEnciclopedia(termo) {
    if (!termo || typeof BIBLIOTECA_ENCICLOPEDIA === 'undefined') return;
    const query = termo.toLowerCase().trim();
    let encontrado = false;

    for (const key in BIBLIOTECA_ENCICLOPEDIA) {
        const entry = BIBLIOTECA_ENCICLOPEDIA[key];
        if (entry.keywords.some(k => query.includes(k.toLowerCase()))) {
            aiContent.innerHTML = `<strong>${entry.icone} ${entry.titulo}</strong><br>${entry.html_content}`;
            encontrado = true;
            break;
        }
    }
    if (!encontrado && query.length > 2) {
        aiContent.innerHTML = `<i>Nenhum resultado para "${termo}".</i>`;
    }
}

if (aiSearch) {
    aiSearch.oninput = (e) => buscarNaEnciclopedia(e.target.value);
}
