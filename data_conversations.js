let BIBLIOTECA_CONVERSAS = {
    "memoria_academica_geral": {
        keywords: ["geral","memoria", "dialogos", "estudos", "conclusões", "professor", "harvard", "aprendizado"],
        fase: "CONVERSATIONS & BRAIN",
        titulo: "Repositório de Diálogos Acadêmicos",
        icone: "🧠",
        resumo: "Here are the thoughts, conversations, explanations and conclusions about several issues, subjects, like grammar, architecture, languages, and so forth.",
        html_content: `
            <div style="line-height: 1.6; color: #2c3e50; padding: 20px; border: 2px solid #34495e; border-radius: 12px; background: #fff;">
                <h3 style="color: #2c3e50; text-align: center; border-bottom: 2px solid #34495e; padding-bottom: 10px;">
                    Digital Brain: Academic Dialogues
                </h3>
                <p>Este espaço funciona como uma <b>extensão cognitiva</b> de nossas sessões de mentoria. Aqui, transformamos conversas informais e dúvidas de aula em módulos de conhecimento estruturados.</p>
                
                <div style="background: #f8f9fa; padding: 15px; border-left: 5px solid #34495e; margin: 15px 0;">
                    <p style="margin: 0; font-style: italic;">
                        "Architecture is not just building; it is the conversation between the environment, the technique, and the human inhabitant."
                    </p>
                </div>

                <h4 style="color: #34495e;">O que você encontrará aqui:</h4>
                <ul>
                    <li><b>Insights de Arquitetura:</b> Da teoria de Harvard às práticas de canteiro.</li>
                    <li><b>Refinamento Linguístico:</b> Evoluções rumo ao nível C2 de Inglês.</li>
                    <li><b>Infraestrutura Urbana:</b> Detalhamentos técnicos e tecnológicos.</li>
                    <li><b>Conclusões Conjuntas:</b> Onde o pensamento crítico encontra a aplicação prática.</li>
                </ul>
                
                <p style="font-size: 13px; color: #7f8c8d; text-align: center; margin-top: 20px;">
                    <i>Utilize os botões de navegação para alternar entre as aulas e reflexões salvas.</i>
                </p>
            </div>
        `,
        pagina: "Início"
    }
};

// --- END OF INITIALIZATION ---

// 2. Expansion Block: Subject Cover, Lesson 01 (Part 1 & 2)
Object.assign(BIBLIOTECA_CONVERSAS, {
    "capa_instalacoes_eletricas": {
        keywords: ["materia", "instalacoes", "infraestrutura", "eletrica"],
        fase: "INSTALAÇÕES E INFRAESTRUTURA URBANA",
        titulo: "Materia Principal: Infraestrutura Elétrica",
        icone: "📂",
        resumo: "Visão geral sobre a integração de sistemas de potência e dados no ambiente urbano e predial.",
        html_content: `
            <div style="text-align: center; padding: 20px; border: 2px solid #34495e; border-radius: 8px;">
                <h2 style="color: #2c3e50;">Instalações e Infraestrutura Urbana</h2>
                <p>Módulo de Estudos Técnicos e Práticos</p>
                <hr style="border: 0; border-top: 1px solid #eee;">
                <p style="font-size: 14px;">Este diretório armazena nossas discussões sobre a norma NBR 5410 e a eficiência energética no projeto.</p>
                <div style="margin-top: 10px; font-weight: bold; color: #d35400;">PRÓXIMO: Aula 01, Pág 1</div>
            </div>
        `,
        pagina: "Capa"
    },
    "instalacoes_eletricas_prediais_01": {
        keywords: ["eletricidade", "circuito", "fase", "neutro", "retorno", "NBR 5410"],
        fase: "INSTALAÇÕES E INFRAESTRUTURA URBANA",
        titulo: "Aula 1: Instalações Elétricas (Pág 1)",
        icone: "⚡",
        resumo: "Fundamentos de circuitos residenciais e a lógica dos condutores.",
        html_content: `
            <div style="line-height: 1.5; color: #333; padding: 10px; border: 1px solid #ddd; border-radius: 8px; background: #fcfcfc;">
                <div style="display: flex; justify-content: space-between; font-size: 11px; color: #777; margin-bottom: 10px;">
                    <span>← Capa</span>
                    <span>Pág 2: Luz Artificial →</span>
                </div>
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
                    <li><b>Fase:</b> Tensão ativa (potencial elétrico).</li>
                    <li><b>Neutro:</b> Referência de retorno (zero volts).</li>
                    <li><b>Retorno:</b> A fase após passar pelo interruptor.</li>
                </ul>
            </div>
        `,
        pagina: "Aula 01 - Pág 1"
    },

 "instalacoes_eletricas_prediais_01_p2": {
    keywords: ["luz artificial", "interruptor simples", "fase", "neutro", "terra", "retorno", "NBR 5410"],
    fase: "INSTALAÇÕES E INFRAESTRUTURA URBANA",
    titulo: "Aula 1: Componentes e Conexões (Pág 2)",
    icone: "🔌",
    resumo: "Detalhamento técnico dos condutores e anatomia da conexão em luminárias.",
    html_content: `
        <div style="line-height: 1.6; color: #333; padding: 15px; border: 1px solid #ddd; border-radius: 8px; background: #fff;">
            <div style="display: flex; justify-content: space-between; font-size: 11px; color: #777; margin-bottom: 10px;">
                <span>← Pág 1: Conceitos Iniciais</span>
                <span>Pág 3: Quadro de Distribuição →</span>
            </div>

            <h4 style="color: #d35400;">1. A Anatomia do Ponto de Luz</h4>
            <p>O provimento de luz exige uma infraestrutura de quatro vias (NBR 5410):</p>
            
            <table style="width:100%; border-collapse: collapse; font-size: 11px; margin-bottom: 15px;">
                <tr style="background: #f2f2f2;">
                    <th style="border: 1px solid #ccc; padding: 5px;">Condutor</th>
                    <th style="border: 1px solid #ccc; padding: 5px;">Função Técnica</th>
                </tr>
                <tr>
                    <td style="border: 1px solid #ccc; padding: 5px;"><b>Fase (L)</b></td>
                    <td style="border: 1px solid #ccc; padding: 5px;">Traz o potencial. Passa pelo interruptor.</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ccc; padding: 5px; color: #2980b9;"><b>Neutro (N)</b></td>
                    <td style="border: 1px solid #ccc; padding: 5px;">Referência zero. Conecta-se à <b>rosca</b>.</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ccc; padding: 5px; color: #f39c12;"><b>Retorno (R)</b></td>
                    <td style="border: 1px solid #ccc; padding: 5px;">Fase seccionada. Conecta-se ao <b>centro</b>.</td>
                </tr>
            </table>

            <h4 style="color: #d35400;">2. Laboratório: Montagem do Soquete</h4>
            <div id="box-aula-eletrica" style="background: #f1f1f1; padding: 30px 20px; border-radius: 10px; border: 1px solid #eee; text-align: center; position: relative; overflow: hidden;">
                
                <div style="display: inline-block; background: #fff; padding: 15px; border: 2px solid #333; border-radius: 50%; width: 120px; height: 120px; position: relative; z-index: 2;">
                    <svg style="position: absolute; top: -40px; left: -40px; width: 200px; height: 200px; pointer-events: none; z-index: 1;">
                        <path id="fio-neutro" d="M 20,100 Q 50,150 90,120" stroke="#2980b9" stroke-width="4" fill="none" style="opacity: 0; transition: opacity 0.5s;" />
                        <path id="fio-retorno" d="M 180,100 Q 150,150 110,110" stroke="#f39c12" stroke-width="4" fill="none" style="opacity: 0; transition: opacity 0.5s;" />
                    </svg>

                    <span id="lampada-visual" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 50px; color: #bbb; z-index: 4; transition: all 0.5s ease;">💡</span>

                    <div style="border: 5px solid #bdc3c7; border-radius: 50%; width: 80px; height: 80px; margin: 15px auto; position: relative; z-index: 3; background: rgba(255,255,255,0.8);">
                        <div id="contato-central" style="width: 20px; height: 20px; background: #ccc; border-radius: 50%; position: absolute; top: 30px; left: 30px; transition: background 0.3s;"></div>
                    </div>
                </div>

                <div style="margin-top: 50px; display: flex; justify-content: center; gap: 8px; flex-wrap: wrap; position: relative; z-index: 5;">
                    <button class="btn-tool" onclick="SimulatorLogic.conectarFio('neutro')" style="background: #2980b9; color: white; border: none; padding: 8px 10px; cursor: pointer; border-radius: 4px; font-size: 11px;">Ligar Neutro</button>
                    <button class="btn-tool" onclick="SimulatorLogic.conectarFio('retorno')" style="background: #f39c12; color: white; border: none; padding: 8px 10px; cursor: pointer; border-radius: 4px; font-size: 11px;">Ligar Retorno</button>
                    <button id="btn-switch" class="btn-tool" onclick="SimulatorLogic.alternarInterruptor()" style="background: #95a5a6; color: white; border: none; padding: 8px 10px; cursor: pointer; border-radius: 4px; font-size: 11px;">Interruptor: OFF</button>
                    <button class="btn-tool" onclick="SimulatorLogic.resetarSoquete()" style="background: #6c757d; color: white; border: none; padding: 8px 10px; cursor: pointer; border-radius: 4px; font-size: 11px;">🔄 Reset</button>
                </div>
                <div id="log-conexao" style="margin-top: 15px; font-size: 12px; font-family: monospace; font-weight: bold; color: #e67e22; min-height: 1.5em;">Aguardando conexões...</div>
            </div>
            <p style="font-size: 11px; margin-top: 15px; background: #fff3cd; padding: 8px; border-radius: 5px;">
                <b>Nota:</b> O Neutro na rosca evita choques durante a troca da lâmpada.
            </p>
        </div>
    `,
    pagina: "Aula 01 - Pág 2"
},
    
    "instalacoes_eletricas_prediais_01_p3": {
        keywords: ["quadro de distribuição", "disjuntor", "circuitos", "DR", "DPS", "barramento"],
        fase: "INSTALAÇÕES E INFRAESTRUTURA URBANA",
        titulo: "Aula 1: O Quadro de Distribuição (Pág 3)",
        icone: "🎛️",
        resumo: "O cérebro da instalação: organização de circuitos, proteção térmica e seccionamento.",
        html_content: `
            <div style="line-height: 1.6; color: #333; padding: 15px; border: 1px solid #ddd; border-radius: 8px; background: #fff;">
                <div style="display: flex; justify-content: space-between; font-size: 11px; color: #777; margin-bottom: 10px;">
                    <span>← Pág 2: Conexões e Soquetes</span>
                    <span>Pág 4: Dimensionamento →</span>
                </div>
                <h4 style="color: #c0392b;">🏛️ O Coração da Edificação: O QDC</h4>
                <p>O <b>QDC</b> organiza a energia e garante a segurança através de dispositivos de proteção.</p>
                <ul style="font-size: 13px;">
                    <li><b>Geral:</b> Desliga tudo.</li>
                    <li><b>DTM:</b> Protege contra curtos.</li>
                    <li><b>IDR:</b> Protege contra choques.</li>
                </ul>
                <div id="simulador-qdc" style="background: #2c3e50; padding: 20px; border-radius: 10px; color: white; margin: 15px 0;">
                    <div style="display: flex; justify-content: space-around; align-items: flex-end; height: 80px; border: 2px solid #34495e; padding: 10px;">
                        <div id="dj-geral" style="width: 30px; height: 50px; background: #c0392b; border: 1px solid #fff;"></div>
                        <div id="dj-luz" style="width: 25px; height: 40px; background: #27ae60; border: 1px solid #fff;"></div>
                    </div>
                 <div style="margin-top: 20px; text-align: center;">
    <button class="btn-tool" onclick="SimulatorLogic.simularCurto()" style="background: #e67e22; color: white; border: none; padding: 5px 10px; cursor: pointer;">Simular Curto</button>
    <button class="btn-tool" onclick="SimulatorLogic.resetarQuadro()" style="background: #3498db; color: white; border: none; padding: 5px 10px; cursor: pointer;">Resetar</button>
</div>
                    <p id="status-qdc" style="font-size: 11px; margin-top: 10px; text-align: center; font-family: monospace;">Status: Normal</p>
                </div>
                <script>
                    window.simularCurto = function() {
                        const d = document.getElementById('dj-luz');
                        d.style.transform = "rotate(180deg)";
                        d.style.background = "#7f8c8d";
                        document.getElementById('status-qdc').innerHTML = "⚠️ Curto detectado! Disjuntor desarmado.";
                    };
                    window.resetarQuadro = function() {
                        const d = document.getElementById('dj-luz');
                        d.style.transform = "rotate(0deg)";
                        d.style.background = "#27ae60";
                        document.getElementById('status-qdc').innerHTML = "Status: Normal";
                    };
                </script>
            </div>
        `,
        pagina: "Aula 01 - Pág 3"
    }
});

// --- END OF RESTRUCTURED BRAIN ---
