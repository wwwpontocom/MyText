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

  
    "instalacoes_eletricas_prediais_02": {
        keywords: ["diagrama", "ponto de luz", "esquema unifilar", "ligação", "esboço"],
        fase: "INSTALAÇÕES E INFRAESTRUTURA URBANA",
        titulo: "Aula 1: Diagrama de Ligação (Pág 3)",
        icone: "📝",
        resumo: "Simulador de fluxo baseado no esboço técnico do ponto de luz.",
        html_content: `
            <div style="line-height: 1.6; color: #333; padding: 15px; border: 1px solid #ddd; border-radius: 8px; background: #fff;">
                
               
                <h3 style="color: #2c3e50; border-left: 5px solid #d35400; padding-left: 10px;">📘 Material Didático: Aula 02 — Circuitos e Comandos</h3>

            <h4 style="color: #d35400; margin-top: 20px;">1. O Conceito de Seccionamento</h4>
            <p>No laboratório da <b>Aula 02</b>, exploramos o princípio fundamental da segurança em iluminação: o <b>Seccionamento da Fase</b>.</p>
            <p>Diferente de um circuito contínuo, um ponto de luz em uma edificação é um "circuito interrompível". De acordo com a <b>NBR 5410</b>, o dispositivo de manobra (interruptor) deve sempre atuar sobre o condutor <b>Fase</b>.</p>
            
            <blockquote style="background: #fdf2f2; border-left: 5px solid #e74c3c; padding: 10px; margin: 10px 0; font-size: 0.9em;">
                <b>Por que não seccionar o Neutro?</b> Se interrompêssemos o Neutro, a luminária permaneceria energizada (com potencial elétrico) mesmo com a luz apagada, oferecendo risco de choque fatal durante uma manutenção simples.
            </blockquote>

            <h4 style="color: #d35400; margin-top: 20px;">2. A Hierarquia dos Condutores no Esquema</h4>
            <p>Identificamos o percurso da energia através de três atores principais:</p>
            <ul style="font-size: 0.95em;">
                <li><b>Fase (Vermelho/Preto):</b> Sai do Disjuntor (QDC) e desce para o interruptor. Ela "espera" o comando humano.</li>
                <li><b>Retorno (Amarelo):</b> É a continuação da Fase após o interruptor. Leva o potencial ao centro do soquete.</li>
                <li><b>Neutro (Azul Claro):</b> Vai direto do QDC ao ponto de luz, fechando o circuito na base rosqueada.</li>
            </ul>
                
                
                <h4 style="color: #2c3e50; border-bottom: 2px solid #d35400; padding-bottom: 5px;">Esquema Técnico: Fluxo de Potência</h4>
                <div style="background: #f9f9f9; padding: 20px; border-radius: 10px; text-align: center; border: 1px solid #eee;">
                    <svg viewBox="0 0 400 280" style="width: 100%; max-width: 400px; height: auto;">
                        <line x1="20" y1="40" x2="380" y2="40" stroke="#ccc" stroke-width="6" stroke-dasharray="5,5" />
                        <text x="200" y="30" font-size="12" text-anchor="middle" font-weight="bold">Ponto de Luz (Eletroduto)</text>
                        
                        <path d="M 180,40 L 180,90" stroke="#2980b9" stroke-width="2" /> <path d="M 220,40 L 220,80 L 110,80 L 110,200" stroke="#f39c12" stroke-width="2" fill="none" /> <path d="M 200,40 L 100,40 L 100,200" stroke="#c0392b" stroke-width="2" fill="none" /> <circle cx="180" cy="110" r="15" id="lamp-aula2" fill="#bbb" stroke="#333" style="transition: 0.3s;" />
                        <text x="200" y="115" font-size="10">Luminária</text>

                        <rect x="85" y="200" width="30" height="40" fill="#fff" stroke="#333" />
                        <line id="switch-visual-aula2" x1="100" y1="225" x2="115" y2="210" stroke="#333" stroke-width="4" style="transition: 0.2s; transform-origin: 100px 225px; transform: rotate(20deg);" />
                    </svg>

                    <div style="margin-top: 15px;">
                        <button onclick="SimulatorLogic.toggleAula2()" style="background: #2c3e50; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer;">
                            Acionar Interruptor
                        </button>
                    </div>
                    <div id="log-aula2" style="margin-top: 10px; font-family: monospace; font-size: 12px; color: #7f8c8d;">Circuito aberto.</div>
                </div>
            </div>
        `,
        pagina: "Aula 01 - Pág 3"
},

    "instalacoes_eletricas_prediais_01_p4": {
    keywords: ["game", "ligação", "conexão", "prática", "desafio"],
    fase: "INSTALAÇÕES E INFRAESTRUTURA URBANA",
    titulo: "Aula 1: Desafio de Conexões (Pág 4)",
    icone: "ok",
    resumo: "Laboratório interativo para montagem do circuito completo ponto a ponto.",
    html_content: `
        <div style="line-height: 1.6; color: #333; padding: 15px; border: 1px solid #ddd; border-radius: 8px; background: #fff; font-family: sans-serif;">
            
            <h3 style="color: #2c3e50; border-left: 5px solid #27ae60; padding-left: 10px;">🎮 Desafio: Monte o Circuito</h3>
            <p style="font-size: 13px;">Com base na norma <b>NBR 5410</b> e no diagrama técnico, conecte cada condutor ao seu destino correto para acender a lâmpada com segurança.</p>

            <div style="background: #f1f1f1; padding: 20px; border-radius: 10px; border: 1px solid #ccc; position: relative; overflow: hidden; text-align: center;">
                <svg viewBox="0 0 400 300" style="width: 100%; max-width: 400px; height: auto; background: #fff; border-radius: 5px; border: 1px solid #eee;">
                    <rect x="150" y="80" width="100" height="60" fill="none" stroke="#bdc3c7" stroke-dasharray="4" stroke-width="2" /> <text x="200" y="75" font-size="10" text-anchor="middle">Luminária Metálica</text>
                    
                    <circle id="term-sw" cx="100" cy="240" r="6" fill="#ecf0f1" stroke="#333" /> <circle id="term-disco" cx="190" cy="110" r="4" fill="#ecf0f1" stroke="#333" /> <circle id="term-base" cx="210" cy="110" r="4" fill="#ecf0f1" stroke="#333" /> <circle id="term-terra" cx="240" cy="90" r="4" fill="#ecf0f1" stroke="#333" /> <path id="lamp-game" d="M 185,140 Q 185,170 200,175 Q 215,170 215,140 Z" fill="#eee" stroke="#333" style="transition: 0.5s;" />
                    
                    <text x="80" y="245" font-size="8" text-anchor="end">Interruptor</text>
                    <text x="250" y="95" font-size="8">Proteção (Terra)</text>
                </svg>

                <div style="margin-top: 15px; display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                    <button class="btn-game" onclick="SimulatorLogic.gameConnect('fase', 'sw')" style="background: #c0392b; color: white; border: none; padding: 8px; border-radius: 4px; font-size: 11px; cursor: pointer;">Ligar Fase no Interruptor</button>
                    <button class="btn-game" onclick="SimulatorLogic.gameConnect('retorno', 'disco')" style="background: #f39c12; color: white; border: none; padding: 8px; border-radius: 4px; font-size: 11px; cursor: pointer;">Ligar Retorno no Disco Central</button>
                    <button class="btn-game" onclick="SimulatorLogic.gameConnect('neutro', 'base')" style="background: #2980b9; color: white; border: none; padding: 8px; border-radius: 4px; font-size: 11px; cursor: pointer;">Ligar Neutro na Base Rosqueada</button>
                    <button class="btn-game" onclick="SimulatorLogic.gameConnect('terra', 'terra')" style="background: #27ae60; color: white; border: none; padding: 8px; border-radius: 4px; font-size: 11px; cursor: pointer;">Ligar Terra na Carcaça</button>
                </div>

                <div id="game-feedback" style="margin-top: 15px; padding: 10px; background: #fff; border-radius: 5px; font-size: 12px; min-height: 40px; border-left: 4px solid #7f8c8d;">
                    Escolha um condutor para iniciar a instalação.
                </div>
                
                <button onclick="SimulatorLogic.gameReset()" style="margin-top: 10px; background: #eee; border: 1px solid #ccc; padding: 5px 10px; font-size: 10px; border-radius: 3px; cursor: pointer;">🔄 Reiniciar Desafio</button>
            </div>
        </div>
    `,
    pagina: "Aula 01 - Pág 4"
},

    "instalacoes_eletricas_prediais_01_p5": {
    keywords: ["simulador", "NBR 5410", "quadro", "multímetro", "instalação"],
    fase: "INSTALAÇÕES E INFRAESTRUTURA URBANA",
    titulo: "Aula 1: Simulador de Instalação Residencial (Pág 5)",
    icone: "bolt",
    resumo: "Laboratório avançado com Quadro de Distribuição, Multímetro funcional e teste de carga.",
    html_content: `
        <style>
            :root {
                --fase: #ff0000; --neutro: #0000ff; --protecao: #32cd32;
                --retorno: #000000; --bg-wall: #dfe6e9;
            }
            .sim-container { font-family: 'Segoe UI', sans-serif; background: #fff; color: #333; padding: 20px; border-radius: 8px; }
            #render-area { 
                position: relative; width: 100%; height: 550px; background: var(--bg-wall); 
                border: 2px solid #bdc3c7; overflow: hidden; border-radius: 5px; 
            }
            .label-tag { position: absolute; background: #e67e22; color: white; padding: 2px 8px; font-size: 11px; border-radius: 3px; z-index: 10; pointer-events: none; }
            .component { position: absolute; cursor: pointer; z-index: 5; }
            #lamp-img { width: 100px; transition: filter 0.3s; }
            #poste { position: absolute; left: 0; top: 0; width: 200px; height: 100%; background: #ced6e0; border-right: 5px solid #747d8c; padding: 15px; box-sizing: border-box; }
            .wire-source { width: 18px; height: 18px; border-radius: 50%; display: inline-block; margin-right: 8px; border: 2px solid #2f3542; vertical-align: middle; }
            #quadro-distribuicao { position: absolute; left: 240px; top: 40px; width: 160px; height: 200px; background: #2f3542; border-radius: 8px; border: 5px solid #1e272e; color: white; text-align: center; padding: 10px; }
            .breaker { width: 45px; height: 70px; background: #95a5a6; border: 3px solid #7f8c8d; margin: 15px auto; cursor: pointer; position: relative; }
            .breaker-toggle { width: 100%; height: 50%; background: #333; position: absolute; bottom: 0; transition: transform 0.2s; }
            .breaker.on .breaker-toggle { transform: translateY(-100%); background: #c0392b; }
            #multimeter { 
                position: absolute; width: 130px; height: 190px; background: #f1c40f; border: 4px solid #f39c12; border-radius: 12px; 
                bottom: 20px; left: 240px; z-index: 100; cursor: move; padding: 12px; color: #000; text-align: center; box-shadow: 10px 10px 25px rgba(0,0,0,0.4);
            }
            #multi-display { background: #7f8c8d; height: 45px; border-radius: 5px; font-family: 'Courier New', monospace; font-size: 26px; line-height: 45px; margin-bottom: 12px; border: 3px inset #57606f; color: #000; font-weight: bold; }
            .probe { position: absolute; width: 12px; height: 70px; border-radius: 6px; }
            #probe-red { background: #ff4757; left: -25px; top: 60px; border: 2px solid #000; }
            #probe-black { background: #2f3542; right: -25px; top: 60px; border: 2px solid #000; }
            .controls { display: flex; justify-content: space-around; padding: 20px; background: #f1f2f6; border-radius: 8px; margin-top: 15px; flex-wrap: wrap; gap: 10px; }
            .wire-btn { padding: 10px 15px; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; color: white; }
            .btn-fase { background: var(--fase); } .btn-neutro { background: var(--neutro); } .btn-terra { background: var(--protecao); } .btn-retorno { background: var(--retorno); }
            #message-box { height: 70px; margin-top: 15px; padding: 15px; background: #fff; border-left: 8px solid #3498db; font-weight: 500; }
            .hit-point { position: absolute; width: 22px; height: 22px; background: rgba(255, 255, 0, 0.4); border: 2px solid gold; border-radius: 50%; z-index: 20; cursor: crosshair; }
            .short-circuit { animation: flash-red 0.15s infinite; background-color: rgba(255, 0, 0, 0.7) !important; }
            @keyframes flash-red { 0% { opacity: 1; } 50% { opacity: 0.5; } 100% { opacity: 1; } }
            svg { position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 2; }
            line { stroke-width: 6; stroke-linecap: round; }
        </style>

        <div class="sim-container">
            <h2 style="margin:0; text-align: center;">Simulador de Instalação Elétrica Residencial Educativo</h2>
            <p style="text-align: center; font-size: 14px; color: #7f8c8d;">Padrão NBR 5410 - Segurança e Identificação de Condutores</p>

            <div id="render-area">
                <svg id="wire-canvas"></svg>
                <div class="label-tag" style="top: 20px; left: 630px;">Ponto de luz</div>
                <div class="label-tag" style="top: 70px; left: 760px; background: #d35400;">Disco central</div>
                <div class="label-tag" style="top: 150px; left: 760px; background: #d35400;">Base rosqueada</div>

                <div id="poste">
                    <h4 style="margin:0; font-size: 14px;">ENTRADA (REDE)</h4>
                    <div style="margin-top:25px">
                        <div onclick="selectWire('fase', document.querySelector('.btn-fase'))"><span class="wire-source btn-fase"></span> <strong>Fase</strong></div>
                        <div style="margin-top:15px" onclick="selectWire('neutro', document.querySelector('.btn-neutro'))"><span class="wire-source btn-neutro"></span> <strong>Neutro</strong></div>
                        <div style="margin-top:15px" onclick="selectWire('protecao', document.querySelector('.btn-terra'))"><span class="wire-source btn-terra"></span> <strong>Terra</strong></div>
                    </div>
                </div>

                <div id="quadro-distribuicao" onclick="makeConnection('quadro')">
                    <strong style="font-size: 12px;">QUADRO GERAL</strong>
                    <div id="disjuntor-geral" class="breaker" onclick="toggleBreaker(event)">
                        <div class="breaker-toggle"></div>
                    </div>
                    <div id="status-energia" style="font-size: 10px; font-weight: bold; color: #ff4757;">DISJUNTOR: OFF</div>
                </div>

                <div id="multimeter" onmousedown="startDrag(event)">
                    <div id="multi-display">000</div>
                    <div style="font-size: 11px; font-weight: bold;">VOLTÍMETRO AC</div>
                    <div id="probe-red" class="probe"></div>
                    <div id="probe-black" class="probe"></div>
                </div>

                <div class="hit-point" style="top: 40px; left: 185px;" onmouseover="measure('fase_bruta')" onmouseout="clearMeasure()"></div>
                <div class="hit-point" style="top: 135px; left: 385px;" onmouseover="measure('fase_quadro')" onmouseout="clearMeasure()"></div>
                <div class="hit-point" style="bottom: 100px; left: 745px;" onmouseover="measure('interruptor')" onmouseout="clearMeasure()"></div>
                <div class="hit-point" style="top: 90px; left: 635px;" onmouseover="measure('lampada')" onmouseout="clearMeasure()"></div>

                <div id="lampada-container" class="component" style="top: 60px; left: 600px;" onclick="makeConnection('lampada')">
                    <img id="lamp-img" src="https://cdn-icons-png.flaticon.com/512/702/702797.png">
                    <div style="font-size: 12px; font-weight: bold; text-align: center;">Ponto de Luz</div>
                </div>

                <div id="interruptor-box" class="component" style="bottom: 50px; left: 750px; width: 70px; height: 110px; border: 2px solid #ddd; border-radius: 4px;" onclick="makeConnection('interruptor')">
                    <div id="switch-lever" class="switch-btn" style="width: 25px; height: 45px; background: #eee; margin: 30px auto;" onclick="event.stopPropagation(); toggleSwitch();"></div>
                </div>
            </div>

            <div id="message-box">Bem-vindo! Passo 1: Conecte os fios do poste ao Quadro Geral.</div>

            <div class="controls">
                <button class="wire-btn btn-fase" onclick="selectWire('fase', this)">Ligar FASE</button>
                <button class="wire-btn btn-neutro" onclick="selectWire('neutro', this)">Ligar NEUTRO</button>
                <button class="wire-btn btn-terra" onclick="selectWire('protecao', this)">Ligar PROTEÇÃO</button>
                <button class="wire-btn btn-retorno" onclick="selectWire('retorno', this)">Ligar RETORNO</button>
                <button class="wire-btn" style="background: #34495e;" onclick="resetGame()">Reiniciar</button>
            </div>

            <div style="margin-top: 20px; font-size: 0.9em; background: #f9f9f9; padding: 15px; border-radius: 5px;">
                <h3>Manual Técnico:</h3>
                <ul>
                    <li><strong>Fase:</strong> Deve ir <u>sempre</u> para o interruptor.</li>
                    <li><strong>Neutro:</strong> Vai direto para a base rosqueada da lâmpada.</li>
                    <li><strong>Retorno:</strong> Sai do interruptor para o disco central da lâmpada.</li>
                    <li><strong>Terra:</strong> Ligado na carcaça metálica da luminária.</li>
                </ul>
            </div>
        </div>
    `,
    pagina: "Aula 01 - Pág 5"
},
    
    "instalacoes_eletricas_prediais_01_p6": {
        keywords: ["quadro de distribuição", "disjuntor", "circuitos", "DR", "DPS", "barramento"],
        fase: "INSTALAÇÕES E INFRAESTRUTURA URBANA",
        titulo: "Aula 1: O Quadro de Distribuição (Pág 6)",
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
        pagina: "Aula 01 - Pág 4"
    }
});

// --- END OF RESTRUCTURED BRAIN ---
