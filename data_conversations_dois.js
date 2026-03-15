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
                
                <div style="text-align:center; padding:20px;">
                <button onclick="window.loadSimulatorPage('instalacoes_eletricas_prediais_01_p5')" 
                        style="padding:15px 30px; cursor:pointer; background:#3498db; color:white; border:none; border-radius:5px;">
                    Abrir Simulador da Página 5
                </button>
            </div>
            </div>
        `,
        pagina: "Aula 01 - Launcher"

          },
    
   "conceitos_fundamentais_eletricidade_p7": {
    keywords: ["eletricidade", "volts", "amps", "watts", "grandezas", "cálculo"],
    fase: "INSTALAÇÕES E INFRAESTRUTURA URBANA",
    titulo: "Simulador: Grandezas Elétricas Fundamentais",
    icone: "electrical_services",
    resumo: "Laboratório prático para visualização da Lei de Ohm e comportamento de cargas (P = V × I) em tempo real.",
    html_content: `
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 40px; background: #fdfdfd; border-radius: 15px; border: 2px dashed #3498db; text-align: center;">
            <div style="font-size: 50px; margin-bottom: 20px;">⚡</div>
            <h3 style="color: #2c3e50; margin-bottom: 10px;">Cálculo de Potência e Corrente</h3>
            <p style="color: #7f8c8d; max-width: 400px; margin-bottom: 25px;">
                Teste o limite de disjuntores e visualize o fluxo de elétrons ao variar a tensão e corrente do circuito.
            </p>
            
            <div style="text-align:center; padding:20px;">
                <button onclick="window.loadSimulatorPage('pagina_sete')" 
                        style="padding:15px 30px; cursor:pointer; background:#3498db; color:white; border:none; border-radius:5px; font-weight:bold; transition: 0.3s;">
                    Abrir Módulo de Grandezas (Pág 7)
                </button>
            </div>
        </div>
    `,
    pagina: "Aula 01 - Pág 07"
},

// --- NEW PAGE 8 LAUNCHER ---
    "padrao_entrada_p8_launcher": {
        keywords: ["padrão de entrada", "concessionária", "poste", "consumidor", "responsabilidade"],
        fase: "INSTALAÇÕES E INFRAESTRUTURA URBANA",
        titulo: "Módulo: Padrão de Entrada e Responsabilidades",
        icone: "house",
        resumo: "Estude os componentes do padrão de entrada e identifique o que é responsabilidade do consumidor.",
        html_content: `
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 40px; background: #fffdf9; border-radius: 15px; border: 2px dashed #f39c12; text-align: center;">
                <div style="font-size: 50px; margin-bottom: 20px;">🏠</div>
                <h3 style="color: #2c3e50; margin-bottom: 10px;">Infraestrutura de Entrada</h3>
                <p style="color: #7f8c8d; max-width: 400px; margin-bottom: 25px;">
                    Explore o ramal de ligação, poste particular e quadro de medição em um diagrama interativo.
                </p>
                <div style="text-align:center; padding:20px;">
                    <button onclick="window.loadSimulatorPage('pagina_oito')" 
                            style="padding:15px 30px; cursor:pointer; background:#f39c12; color:white; border:none; border-radius:5px; font-weight:bold; transition: 0.3s;">
                        Abrir Padrão de Entrada (Pág 8)
                    </button>
                </div>
            </div>
        `,
        pagina: "Aula 01 - Pág 08"
    },

   "dimensionamento_carga_p9_launcher": {
    keywords: ["monofásico", "bifásico", "trifásico", "kW", "carga"],
    fase: "INSTALAÇÕES E INFRAESTRUTURA URBANA",
    titulo: "Tipos de Ligação e Carga (Pág 9)",
    icone: "settings_input_component",
    resumo: "Calculadora interativa para determinar o tipo de fornecimento com base na carga total.",
    html_content: `
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 40px; background: #f4f7f6; border-radius: 15px; border: 2px dashed #9b59b6; text-align: center;">
            <div style="font-size: 50px; margin-bottom: 20px;">🧮</div>
            <h3 style="color: #2c3e50; margin-bottom: 10px;">Calculadora de Fornecimento</h3>
            <p style="color: #7f8c8d; max-width: 400px; margin-bottom: 25px;">
                Determine se a edificação exige entrada Monofásica, Bifásica ou Trifásica com base na carga em kW.
            </p>
            <div style="text-align:center; padding:20px;">
                <button onclick="window.loadSimulatorPage('pagina_nove')" 
                        style="padding:15px 30px; cursor:pointer; background:#9b59b6; color:white; border:none; border-radius:5px; font-weight:bold; transition: 0.3s;">
                    Abrir Dimensionamento (Pág 9)
                </button>
            </div>
        </div>
    `,
    pagina: "Aula 01 - Pág 09"
}
});
