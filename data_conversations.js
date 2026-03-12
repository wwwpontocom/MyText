// --- FIX IS HERE: ADDED PAGE 2 AND NAVIGATION LOGIC ---

// --- FIX IS HERE: COMPLETED INTRODUCTORY CONTAINER ---

// 1. Initial Library Definition: The Conceptual "Capa" of our Dialogues
let BIBLIOTECA_CONVERSAS = {
    "memoria_academica_geral": {
        keywords: ["memória", "diálogos", "estudos", "conclusões", "professor", "harvard", "aprendizado"],
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

// 2. Expansion Block (Subjects like 'capa_instalacoes_eletricas', 'p1', 'p2', 'p3' follow here...)
// Object.assign(BIBLIOTECA_CONVERSAS, { ... });

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
            <div style="text-align: center; padding: 20px; border: 2px solid var(--primary);">
                <h2 style="color: var(--primary);">Instalações e Infraestrutura Urbana</h2>
                <p>Módulo de Estudos Técnicos e Práticos</p>
                <hr>
                <p style="font-size: 14px;">Este diretório armazena nossas discussões sobre a norma NBR 5410 e a eficiência energética no projeto.</p>
                <div style="margin-top: 10px; font-weight: bold; color: var(--primary);">PRÓXIMO: Aula 01, Pág 1</div>
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
                    <li><b>Fase:</b> Tensão ativa.</li>
                    <li><b>Neutro:</b> Retorno de corrente.</li>
                </ul>
            </div>
        `,
        pagina: "Aula 01 - Pág 1"
    },
  // --- FIX IS HERE: EXPANDED PAGE 2 WITH FOUR-WIRE LOGIC AND INTERACTIVITY ---

Object.assign(BIBLIOTECA_CONVERSAS, {
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
                    <span>Pág 3: Em breve →</span>
                </div>

                <h4 style="color: #d35400;">1. A Anatomia do Ponto de Luz</h4>
                <p>O provimento de luz não é apenas estético; exige uma infraestrutura de quatro vias para garantir funcionamento e segurança (NBR 5410):</p>
                
                <table style="width:100%; border-collapse: collapse; font-size: 12px; margin-bottom: 15px;">
                    <tr style="background: #f2f2f2;">
                        <th style="border: 1px solid #ccc; padding: 5px;">Condutor</th>
                        <th style="border: 1px solid #ccc; padding: 5px;">Função Técnica</th>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ccc; padding: 5px;"><b>Fase (L)</b></td>
                        <td style="border: 1px solid #ccc; padding: 5px;">Traz o potencial. Nunca vai direto à lâmpada; deve passar pelo interruptor.</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ccc; padding: 5px; color: #2980b9;"><b>Neutro (N)</b></td>
                        <td style="border: 1px solid #ccc; padding: 5px;">Referência zero. Conecta-se diretamente à <b>base rosqueada</b> (rosca) da luminária.</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ccc; padding: 5px; color: #27ae60;"><b>Terra (PE)</b></td>
                        <td style="border: 1px solid #ccc; padding: 5px;">Proteção. Conecta-se à carcaça metálica da luminária para escoar fugas.</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ccc; padding: 5px; color: #f39c12;"><b>Retorno (R)</b></td>
                        <td style="border: 1px solid #ccc; padding: 5px;">A "fase seccionada". Conecta o interruptor ao <b>disco central</b> (contato fundo) da luminária.</td>
                    </tr>
                </table>

                <h4 style="color: #d35400;">2. Laboratório: Montagem do Soquete</h4>
                <p style="font-size: 13px;">Clique nos componentes para simular a ligação correta:</p>
                
                <div id="box-aula-eletrica" style="background: #f9f9f9; padding: 20px; border-radius: 10px; border: 1px solid #eee; text-align: center;">
                    <div style="display: inline-block; text-align: left; background: #fff; padding: 15px; border: 2px solid #333; border-radius: 50%; width: 120px; height: 120px; position: relative;">
                        <div style="border: 5px solid #bdc3c7; border-radius: 50%; width: 80px; height: 80px; margin: 15px auto; position: relative;">
                            <div id="contato-central" style="width: 20px; height: 20px; background: #ccc; border-radius: 50%; position: absolute; top: 30px; left: 30px;"></div>
                        </div>
                        <p style="position: absolute; bottom: -30px; left: 20px; font-size: 10px; font-weight: bold;">LUMINÁRIA (BASE)</p>
                    </div>

                    <div style="margin-top: 40px; display: flex; justify-content: center; gap: 10px;">
                        <button class="btn-tool" onclick="conectarFio('neutro')" style="background: #2980b9; color: white; border: none; padding: 5px 10px; cursor: pointer;">Ligar Neutro na Rosca</button>
                        <button class="btn-tool" onclick="conectarFio('retorno')" style="background: #f39c12; color: white; border: none; padding: 5px 10px; cursor: pointer;">Ligar Retorno no Centro</button>
                    </div>
                    <div id="log-conexao" style="margin-top: 15px; font-size: 12px; font-family: monospace; color: #e67e22;">Aguardando conexões...</div>
                </div>

                <p style="font-size: 12px; margin-top: 15px; background: #fff3cd; padding: 10px; border-radius: 5px;">
                    <b>Nota do Professor:</b> Por que o Neutro na rosca? Para evitar que, ao trocar uma lâmpada, o usuário tome um choque ao encostar acidentalmente na parte rosqueada metálica. O potencial vivo (Retorno) fica "escondido" no fundo do bocal.
                </p>
            </div>
        `,
        interatividade: {
            script: `
                let n_connected = false;
                let r_connected = false;
                function conectarFio(tipo) {
                    const log = document.getElementById('log-conexao');
                    const central = document.getElementById('contato-central');
                    if(tipo === 'neutro') {
                        n_connected = true;
                        log.innerHTML = "✅ Neutro conectado à base rosqueada.";
                    }
                    if(tipo === 'retorno') {
                        r_connected = true;
                        central.style.background = "#f1c40f";
                        central.style.boxShadow = "0 0 10px #f1c40f";
                        log.innerHTML = "✅ Retorno conectado ao disco central.";
                    }
                    if(n_connected && r_connected) {
                        log.innerHTML = "💡 CIRCUITO SEGURO E PRONTO! Lâmpada pode ser acionada.";
                        log.style.color = "#27ae60";
                    }
                }
            `
        },
        pagina: "Aula 01 - Pág 2"
    }
});

// --- FIX IS HERE: ADDED PAGE 3 - QUADRO DE DISTRIBUIÇÃO (QDC) ---

Object.assign(BIBLIOTECA_CONVERSAS, {
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
                <p>Como discutimos em nossa análise projetual, o <b>Quadro de Distribuição de Circuitos (QDC)</b> é onde a energia vinda da rua é organizada e protegida antes de ser distribuída para os pontos de luz e tomadas.</p>
                
                <h4 style="color: #2980b9;">Componentes de Segurança Críticos:</h4>
                <ul style="font-size: 13px;">
                    <li><b>Disjuntor Geral:</b> Protege a entrada de energia de toda a unidade. Se ele cai, nada funciona.</li>
                    <li><b>Disjuntores Termomagnéticos (DTM):</b> Protegem cada circuito individual (ex: apenas luzes da sala) contra sobrecargas e curtos.</li>
                    <li><b>IDR (Interruptor Diferencial Residual):</b> O "salva-vidas". Desliga o circuito instantaneamente se detectar uma fuga de corrente (choque elétrico).</li>
                    <li><b>DPS (Dispositivo de Proteção contra Surtos):</b> Protege seus equipamentos contra raios e picos de tensão da rede.</li>
                </ul>

                <div id="simulador-qdc" style="background: #2c3e50; padding: 20px; border-radius: 10px; color: white; margin: 15px 0;">
                    <h5 style="margin-top:0; color: #ecf0f1; text-align: center;">Painel de Controle de Circuitos</h5>
                    
                    <div style="display: flex; justify-content: space-around; align-items: flex-end; height: 100px; border: 2px solid #34495e; padding: 10px;">
                        <div id="dj-geral" style="width: 40px; height: 60px; background: #c0392b; border: 2px solid #fff; position: relative;">
                             <span style="font-size:8px; position:absolute; top:-15px; left:0;">GERAL</span>
                        </div>
                        <div id="dj-luz" style="width: 30px; height: 50px; background: #27ae60; border: 2px solid #fff; position: relative;">
                             <span style="font-size:8px; position:absolute; top:-15px; left:0;">LUZ</span>
                        </div>
                        <div id="dj-tomada" style="width: 30px; height: 50px; background: #27ae60; border: 2px solid #fff; position: relative;">
                             <span style="font-size:8px; position:absolute; top:-15px; left:0;">TUG</span>
                        </div>
                    </div>

                    <div style="margin-top: 20px; text-align: center;">
                        <button class="btn-tool" onclick="simularCurto()" style="background: #e67e22; color: white; border: none; padding: 5px 15px; cursor: pointer;">Simular Curto no Circuito de Luz</button>
                        <button class="btn-tool" onclick="resetarQuadro()" style="background: #3498db; color: white; border: none; padding: 5px 15px; cursor: pointer; margin-left: 5px;">Resetar Quadro</button>
                    </div>
                    <p id="status-qdc" style="font-size: 12px; margin-top: 10px; color: #bdc3c7; font-family: monospace;">Sistema Operacional: Normal</p>
                </div>

                <p style="font-size: 12px; background: #e8f4fd; padding: 10px; border-left: 5px solid #2980b9;">
                    <b>Reflexão Arquitetônica:</b> O QDC deve ser localizado em local de fácil acesso e o mais próximo possível do centro de carga da edificação para economizar condutores e reduzir a queda de tensão.
                </p>
            </div>
        `,
        interatividade: {
            script: `
                function simularCurto() {
                    document.getElementById('dj-luz').style.transform = "rotate(180deg)";
                    document.getElementById('dj-luz').style.background = "#7f8c8d";
                    document.getElementById('status-qdc').innerHTML = "⚠️ ALERTA: Curto-circuito detectado! Disjuntor 'LUZ' desarmado.";
                    document.getElementById('status-qdc').style.color = "#e74c3c";
                }
                function resetarQuadro() {
                    document.getElementById('dj-luz').style.transform = "rotate(0deg)";
                    document.getElementById('dj-luz').style.background = "#27ae60";
                    document.getElementById('status-qdc').innerHTML = "Sistema Operacional: Normal";
                    document.getElementById('status-qdc').style.color = "#bdc3c7";
                }
            `
        },
        pagina: "Aula 01 - Pág 3"
    }
});

// --- END OF RESTRUCTURED BRAIN ---
