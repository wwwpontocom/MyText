// --- FIX IS HERE: SIMPLIFIED INITIALIZATION AND OBJECT INJECTION ---

// 1. Initial Library Definition: Introductory Container
let BIBLIOTECA_CONVERSAS = {
    "intro_memoria": {
        resumo: "Here is the thoughts, estudos and conclusions of our academic journey."
    }
};

// 2. Expansion Block: Subject Cover (Capa) and Lesson 01
Object.assign(BIBLIOTECA_CONVERSAS, {
    "capa_instalacoes_eletricas": {
        keywords: ["materia", "instalacoes", "infraestrutura", "eletrica"],
        fase: "INSTALAÇÕES E INFRAESTRUTURA URBANA",
        titulo: "Materia Principal: Infraestrutura Elétrica",
        icone: "📂",
        resumo: "Visão geral sobre a integração de sistemas de potência e dados no ambiente urbano e predial.",
        html_content: `
            <div style="text-align: center; padding: 20px; border: 2px solid var(--primary);">
                <h2 style="color: var(--primary);">Instalações e Infraestrutura Urbana</h2>
                <p>Módulo de Estudos Técnicos e Práticos</p>
                <hr>
                <p style="font-size: 14px;">Este diretório armazena nossas discussões sobre a norma NBR 5410 e a eficiência energética no projeto.</p>
            </div>
        `,
        pagina: "Capa"
    },
    "instalacoes_eletricas_prediais_01": {
        keywords: ["eletricidade", "circuito", "fase", "neutro", "retorno", "NBR 5410"],
        fase: "INSTALAÇÕES E INFRAESTRUTURA URBANA",
        titulo: "Aula 1: Instalações Elétricas Prediais",
        icone: "⚡",
        resumo: "Fundamentos de circuitos residenciais e a lógica dos condutores.",
        html_content: `
            <div style="line-height: 1.5; color: #333; padding: 10px; border: 1px solid #ddd; border-radius: 8px; background: #fcfcfc;">
                <h4 style="color: #d35400;">💡 Laboratório de Eletricidade: Aula 01</h4>
                <div id="simulador-eletrico" style="text-align: center; padding: 20px; background: #eee; border-radius: 10px;">
                    <div id="lampada" style="font-size: 50px; filter: grayscale(100%); margin-bottom: 10px; transition: 0.3s;">💡</div>
                    <button class="btn-tool" style="padding: 10px 20px; cursor: pointer; border-radius: 5px; border: none; background: #d35400; color: white;" 
                        onclick="const bulb = document.getElementById('lampada'); 
                                 const isOn = bulb.style.filter === 'grayscale(0%)';
                                 bulb.style.filter = isOn ? 'grayscale(100%)' : 'grayscale(0%)'; 
                                 bulb.style.textShadow = isOn ? 'none' : '0 0 20px #f1c40f';
                                 this.innerText = isOn ? 'LIGAR (FECHAR CIRCUITO)' : 'DESLIGAR (ABRIR CIRCUITO)';">
                        LIGAR (FECHAR CIRCUITO)
                    </button>
                </div>
                <h4 style="color: #2980b9; margin-top: 15px;">Conceitos:</h4>
                <ul style="font-size: 13px;">
                    <li><b>Fase:</b> Tensão ativa.</li>
                    <li><b>Neutro:</b> Retorno de corrente.</li>
                    <li><b>Retorno:</b> Fase controlada pelo interruptor.</li>
                </ul>
            </div>
        `,
        pagina: "Aula 01"
    }
});

// --- END OF RESTRUCTURED BRAIN ---
