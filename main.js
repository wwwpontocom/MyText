// main.js - Logic for Encyclopedia and UI interactions

// 1. Manual Typing Logic
const typingInputEl = document.getElementById('typing-input');
const typingDisplayEl = document.getElementById('typing-display');

if (typingInputEl) {
    typingInputEl.oninput = () => {
        // We use innerText to ignore HTML tags when checking the dictionary
        const text = typingInputEl.innerText.toLowerCase();
        if (typeof processInput === 'function') {
            processInput(text, typingDisplayEl, false);
        }
    };
}

// 2. Toolbar Command Logic
// Updated to accept a second parameter for font selection
function execCmd(command, value = null) {
    document.execCommand(command, false, value);
}

// 3. AI Encyclopedia Search Logic
const aiContent = document.getElementById('ai-content');
const aiSearch = document.getElementById('ai-search');

window.buscarNaEnciclopedia = function(termo) {
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
};

if (aiSearch) {
    aiSearch.oninput = (e) => window.buscarNaEnciclopedia(e.target.value);
}

// 4. Export Logic

// Export to Word (.doc)
function exportToWord() {
    const content = document.getElementById('typing-input').innerHTML;
    const header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' "+
            "xmlns:w='urn:schemas-microsoft-com:office:word' "+
            "xmlns='http://www.w3.org/TR/REC-html40'>"+
            "<head><meta charset='utf-8'><title>Export Word</title></head><body>";
    const footer = "</body></html>";
    const sourceHTML = header + content + footer;
    
    const source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
    const fileDownload = document.createElement("a");
    document.body.appendChild(fileDownload);
    fileDownload.href = source;
    fileDownload.download = 'documento.doc';
    fileDownload.click();
    document.body.removeChild(fileDownload);
}

// Export to PDF (Uses Print functionality to preserve styles/fonts)
function exportToPDF() {
    const content = document.getElementById('typing-input').innerHTML;
    const originalBody = document.body.innerHTML;

    // Temporary print-friendly layout
    document.body.innerHTML = `
        <div style="padding: 40px; font-family: 'Segoe UI', sans-serif;">
            ${content}
        </div>
    `;

    window.print();
    
    // Restore page after printing
    document.body.innerHTML = originalBody;
    window.location.reload(); // Reload to re-attach events
}
