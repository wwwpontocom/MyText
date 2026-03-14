Object.assign(BIBLIOTECA_CONVERSAS, {
    "instalacoes_eletricas_prediais_01_p5_launcher": {
        keywords: ["simulador", "NBR 5410", "acesso", "prática"],
        fase: "INSTALAÇÕES E INFRAESTRUTURA URBANA",
        titulo: "Laboratório Virtual: Instalação Residencial",
        icone: "play_circle",
        resumo: "Clique no botão abaixo para iniciar o simulador interativo de fiação e medição.",
        html_content: `
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 40px; background: #f8f9fa; border-radius: 15px; border: 2px dashed #3498db; text-align: center;">
                <div style="font-size: 50px; margin-bottom: 20px;">⚡</div>
                <h3 style="color: #2c3e50; margin-bottom: 10px;">Simulador NBR 5410</h3>
                <p style="color: #7f8c8d; max-width: 400px; margin-bottom: 25px;">
                    Você entrará em um ambiente 2D interativo para montar o quadro geral e realizar medições com multímetro.
                </p>
                
                <button 
                    onclick="loadSimulatorPage('instalacoes_eletricas_prediais_01_p5')" 
                    style="padding: 15px 40px; font-size: 18px; font-weight: bold; color: white; background: #3498db; border: none; border-radius: 50px; cursor: pointer; transition: 0.3s; box-shadow: 0 4px 15px rgba(52, 152, 219, 0.4);"
                    onmouseover="this.style.background='#2980b9'; this.style.transform='scale(1.05)'"
                    onmouseout="this.style.background='#3498db'; this.style.transform='scale(1)'">
                    🚀 INICIAR SIMULADOR
                </button>
            </div>
        `,
        pagina: "Aula 01 - Launcher"
    }
});
