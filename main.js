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
    
    // Template HTML necessário para o Word reconhecer a codificação e estilos
    const header = `
        <html xmlns:o='urn:schemas-microsoft-com:office:office' 
              xmlns:w='urn:schemas-microsoft-com:office:word' 
              xmlns='http://www.w3.org/TR/REC-html40'>
        <head>
            <meta charset='utf-8'>
            <style>
                body { font-family: 'Segoe UI', Arial, sans-serif; }
            </style>
        </head>
        <body>
    `;
    const footer = "</body></html>";
    const sourceHTML = header + content + footer;

    // Criamos um Blob com o conteúdo e o tipo MIME correto
    const blob = new Blob(['\ufeff', sourceHTML], {
        type: 'application/msword'
    });

    // Geramos um link temporário para o download
    const url = URL.createObjectURL(blob);
    const fileDownload = document.createElement("a");
    
    fileDownload.href = url;
    fileDownload.download = 'documento.doc'; // Você também pode tentar .docx em alguns casos
    
    document.body.appendChild(fileDownload);
    fileDownload.click();
    
    // Limpeza
    document.body.removeChild(fileDownload);
    URL.revokeObjectURL(url);
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

// 5. Template System Logic

const templateSelect = document.getElementById('template-select');

// Load template names into dropdown on startup
function updateTemplateDropdown() {
    const templates = JSON.parse(localStorage.getItem('typing_templates') || '{}');
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
    
    alert("Modelo '" + name + "' salvo com sucesso!");
    updateTemplateDropdown();
}

function loadTemplate() {
    const selectedName = templateSelect.value;
    if (!selectedName) {
        alert("Por favor, selecione um modelo na lista.");
        return;
    }

    const templates = JSON.parse(localStorage.getItem('typing_templates') || '{}');
    const content = templates[selectedName];

    if (content !== undefined) {
        const inputArea = document.getElementById('typing-input');
        inputArea.innerHTML = content;
        
        // Trigger the dictionary processing manually after loading
        if (typeof processInput === 'function') {
            processInput(inputArea.innerText.toLowerCase(), document.getElementById('typing-display'), false);
        }
    }
}

// Initialize the dropdown when the script loads
updateTemplateDropdown();
