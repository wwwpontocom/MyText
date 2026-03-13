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
}
    
    "instalacoes_eletricas_prediais_01_p5": {
        keywords: ["quadro de distribuição", "disjuntor", "circuitos", "DR", "DPS", "barramento"],
        fase: "INSTALAÇÕES E INFRAESTRUTURA URBANA",
        titulo: "Aula 1: O Quadro de Distribuição (Pág 5)",
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
