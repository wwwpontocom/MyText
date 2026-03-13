// simulators.js - Logic for Architectural & Electrical Simulators
// --- FIX IS HERE: Consolidated Logic with Enhanced Safety and Aula 2 Expansion ---

window.SimulatorLogic = {
    // Lesson 01 - Page 2: Socket Assembly State
    n_connected: false,
    r_connected: false,
    sw_on: false,
    
    conectarFio(tipo) {
        const log = document.getElementById('log-conexao');
        const fn = document.getElementById('fio-neutro');
        const fr = document.getElementById('fio-retorno');
        const central = document.getElementById('contato-central');

        if(!log) return;

        // Safety Check: Avoid "shocks" if switch is already closed
        if(this.sw_on) {
            log.innerHTML = "⚠️ PERIGO: Desligue o interruptor antes de manusear os fios!";
            log.style.color = "#c0392b";
            return;
        }

        if(tipo === 'neutro') {
            this.n_connected = true;
            if(fn) fn.style.opacity = "1";
            log.innerHTML = "✅ Neutro conectado à base rosqueada.";
            log.style.color = "#2980b9";
        }
        if(tipo === 'retorno') {
            this.r_connected = true;
            if(fr) fr.style.opacity = "1";
            if(central) {
                central.style.background = "#f1c40f";
                central.style.boxShadow = "0 0 10px #f1c40f";
            }
            log.innerHTML = "✅ Retorno conectado ao disco central.";
            log.style.color = "#f39c12";
        }
        this.atualizarLampada();
    },

    alternarInterruptor() {
        const btn = document.getElementById('btn-switch');
        const log = document.getElementById('log-conexao');
        this.sw_on = !this.sw_on;

        if(btn) {
            btn.innerHTML = this.sw_on ? "Interruptor: LIGADO" : "Interruptor: DESLIGADO";
            btn.style.background = this.sw_on ? "#27ae60" : "#95a5a6";
        }

        if(this.sw_on && (!this.n_connected || !this.r_connected)) {
            if(log) {
                log.innerHTML = "⚠️ Circuito aberto: conecte os fios primeiro.";
                log.style.color = "#e67e22";
            }
        }
        
        this.atualizarLampada();
    },

    atualizarLampada() {
        const lamp = document.getElementById('lampada-visual');
        const log = document.getElementById('log-conexao');
        
        if(this.n_connected && this.r_connected && this.sw_on) {
            if(lamp) {
                lamp.style.color = "#f1c40f";
                lamp.style.textShadow = "0 0 20px #f1c40f, 0 0 40px #f1c40f";
                lamp.style.transform = "translate(-50%, -50%) scale(1.2)";
            }
            if(log) {
                log.innerHTML = "💡 LÂMPADA ACESA! Instalação concluída com sucesso.";
                log.style.color = "#27ae60";
            }
        } else {
            if(lamp) {
                lamp.style.color = "#bbb";
                lamp.style.textShadow = "none";
                lamp.style.transform = "translate(-50%, -50%) scale(1)";
            }
        }
    },

    resetarSoquete() {
        this.n_connected = false;
        this.r_connected = false;
        this.sw_on = false;
        
        const btn = document.getElementById('btn-switch');
        if(btn) { 
            btn.innerHTML = "Interruptor: DESLIGADO"; 
            btn.style.background = "#95a5a6"; 
        }
        
        const fn = document.getElementById('fio-neutro');
        const fr = document.getElementById('fio-retorno');
        const central = document.getElementById('contato-central');
        const log = document.getElementById('log-conexao');
        
        if(fn) fn.style.opacity = "0";
        if(fr) fr.style.opacity = "0";
        if(central) { central.style.background = "#ccc"; central.style.boxShadow = "none"; }
        if(log) { log.innerHTML = "Aguardando conexões..."; log.style.color = "#e67e22"; }
        
        this.atualizarLampada();
    },

    // Lesson 01 - Page 5: Breaker Panel (QDC) Logic
    simularCurto() {
        const d = document.getElementById('dj-luz');
        const status = document.getElementById('status-qdc');
        if(d && status) {
            d.style.transform = "rotate(180deg)";
            d.style.background = "#7f8c8d";
            status.innerHTML = "⚠️ Curto detectado! Disjuntor desarmado.";
        }
    },

    resetarQuadro() {
        const d = document.getElementById('dj-luz');
        const status = document.getElementById('status-qdc');
        if(d && status) {
            d.style.transform = "rotate(0deg)";
            d.style.background = "#27ae60";
            status.innerHTML = "Status: Normal";
        }
    },

    // Aula 02 Logic (Expansion)
   aula2_switch: false,
    toggleAula2() {
        const lamp = document.getElementById('lamp-aula2');
        const sw = document.getElementById('switch-visual-aula2');
        const log = document.getElementById('log-aula2');
        this.aula2_switch = !this.aula2_switch;
        
        if(this.aula2_switch) {
            if(lamp) {
                lamp.setAttribute('fill', '#f1c40f');
                lamp.style.filter = "drop-shadow(0 0 10px #f1c40f)";
            }
            if(sw) sw.style.transform = "rotate(-10deg)";
            if(log) log.innerHTML = "⚡ Circuito Fechado: Corrente fluindo pelo Retorno.";
        } else {
            if(lamp) {
                lamp.setAttribute('fill', '#bbb');
                lamp.style.filter = "none";
            }
            if(sw) sw.style.transform = "rotate(20deg)";
            if(log) log.innerHTML = "⚪ Circuito Aberto: Interruptor seccionou a Fase.";
        }
    }, // --- FIX IS HERE: Replaced }; with a comma to keep the object open ---

    // NEW: Game Logic for Page 4 (Wiring Challenge)
    gameState: { fase: false, retorno: false, neutro: false, terra: false },
    
    gameConnect(fio, destino) {
        const feedback = document.getElementById('game-feedback');
        const term = document.getElementById('term-' + destino);
        
        if (this.gameState[fio]) return; 

        let msg = "";
        let color = "#333";

        if (fio === 'fase' && destino === 'sw') {
            msg = "<b>Fase ligada!</b> Conforme a NBR 5410, a fase deve ser seccionada pelo interruptor para garantir que o bocal não fique energizado ao desligar.";
            color = "#c0392b";
            this.gameState.fase = true;
        } else if (fio === 'retorno' && destino === 'disco') {
            msg = "<b>Retorno ligado!</b> O retorno conecta a saída do interruptor ao disco central da lâmpada, completando o caminho da fase.";
            color = "#f39c12";
            this.gameState.retorno = true;
        } else if (fio === 'neutro' && destino === 'base') {
            msg = "<b>Neutro ligado!</b> Deve ser conectado na base rosqueada para evitar choque elétrico se alguém tocar na rosca durante a troca.";
            color = "#2980b9";
            this.gameState.neutro = true;
        } else if (fio === 'terra' && destino === 'terra') {
            msg = "<b>Terra ligado!</b> Conectado à carcaça metálica da luminária para desviar correntes de fuga e proteger o usuário.";
            color = "#27ae60";
            this.gameState.terra = true;
        }

        if (term) term.setAttribute('fill', color);
        if (feedback) {
            feedback.innerHTML = msg;
            feedback.style.borderLeftColor = color;
        }
        
        this.checkVictory();
    },

    checkVictory() {
        const lamp = document.getElementById('lamp-game');
        const feedback = document.getElementById('game-feedback');
        if (this.gameState.fase && this.gameState.retorno && this.gameState.neutro && this.gameState.terra) {
            if (lamp) {
                lamp.setAttribute('fill', '#f1c40f');
                lamp.style.filter = "drop-shadow(0 0 15px #f1c40f)";
            }
            if (feedback) {
                feedback.innerHTML = "<b>✨ SUCESSO!</b> Circuito completo e seguro. A lâmpada acendeu seguindo todas as normas técnicas.";
                feedback.style.borderLeftColor = "#27ae60";
            }
        }
    },

    gameReset() {
        this.gameState = { fase: false, retorno: false, neutro: false, terra: false };
        const lamp = document.getElementById('lamp-game');
        if (lamp) { lamp.setAttribute('fill', '#eee'); lamp.style.filter = "none"; }
        ['sw', 'disco', 'base', 'terra'].forEach(id => {
            const t = document.getElementById('term-' + id);
            if (t) t.setAttribute('fill', '#ecf0f1');
        });
        const feedback = document.getElementById('game-feedback');
        if (feedback) {
            feedback.innerHTML = "Escolha um condutor para iniciar a instalação.";
            feedback.style.borderLeftColor = "#7f8c8d";
        }
    }
};


let switchOn = false; 
let selectedWireType = null;
let breakerOn = false;
let connections = { 
    posteToQuadro: { fase: false, neutro: false, protecao: false },
    quadroToHouse: { fase: false, neutro: false, retorno: false, protecao: false }
};

const canvas = document.getElementById('wire-canvas');
const msgBox = document.getElementById('message-box');
const display = document.getElementById('multi-display');

function selectWire(type, btn) {
    selectedWireType = type;
    document.querySelectorAll('.wire-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    msgBox.innerHTML = `Fio <strong>${type.toUpperCase()}</strong> selecionado. Clique no destino para conectar.`;
}

function toggleBreaker(e) {
    e.stopPropagation();
    if (!connections.posteToQuadro.fase) {
        msgBox.innerHTML = "❌ <span style='color:red'>ERRO:</span> Não há energia chegando do poste ao quadro!";
        return;
    }
    breakerOn = !breakerOn;
    const b = document.getElementById('disjuntor-geral');
    const s = document.getElementById('status-energia');
    if (breakerOn) {
        b.classList.add('on');
        s.innerText = "DISJUNTOR: ON";
        s.style.color = "#2ecc71";
        msgBox.innerHTML = "⚡ <strong>Energia armada!</strong> Use o multímetro para testar os pontos de luz.";
        checkVictory();
    } else {
        b.classList.remove('on');
        s.innerText = "DISJUNTOR: OFF";
        s.style.color = "#ff4757";
        document.getElementById('lamp-img').style.filter = "none";
    }
}

function drawLine(x1, y1, x2, y2, color) {
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', x1); line.setAttribute('y1', y1);
    line.setAttribute('x2', x2); line.setAttribute('y2', y2);
    line.setAttribute('stroke', color);
    canvas.appendChild(line);
}

function makeConnection(target) {
    if (!selectedWireType) return;

    let isCorrect = false;

    if (selectedWireType === 'fase') {
        if (target === 'quadro') {
            drawLine(200, 45, 240, 140, 'red');
            connections.posteToQuadro.fase = true;
            msgBox.innerText = "Fase conectada à entrada do disjuntor geral.";
            isCorrect = true;
        } else if (target === 'interruptor') {
            if (!connections.posteToQuadro.fase) { msgBox.innerText = "Ligue o quadro ao poste primeiro!"; return; }
            drawLine(400, 140, 750, 440, 'red');
            connections.quadroToHouse.fase = true;
            msgBox.innerText = "Fase conectada ao interruptor (conforme NBR 5410).";
            isCorrect = true;
        }
    } 
    else if (selectedWireType === 'neutro') {
        if (target === 'quadro') {
            drawLine(200, 85, 240, 95, 'blue');
            connections.posteToQuadro.neutro = true;
            isCorrect = true;
        } else if (target === 'lampada') {
            drawLine(400, 95, 630, 95, 'blue');
            connections.quadroToHouse.neutro = true;
            msgBox.innerText = "Neutro conectado à base rosqueada da lâmpada.";
            isCorrect = true;
        }
    }
    else if (selectedWireType === 'retorno' && target === 'lampada') {
        if (!connections.quadroToHouse.fase) { msgBox.innerText = "O interruptor precisa de fase para gerar retorno!"; return; }
        drawLine(785, 440, 700, 150, 'black');
        connections.quadroToHouse.retorno = true;
        msgBox.innerText = "Retorno conectado ao disco central da lâmpada.";
        isCorrect = true;
    }
    else if (selectedWireType === 'protecao' && target === 'lampada') {
        drawLine(200, 125, 740, 70, 'green');
        connections.quadroToHouse.protecao = true;
        msgBox.innerText = "Luminária metálica devidamente aterrada.";
        isCorrect = true;
    }

    if (!isCorrect) {
        triggerShortCircuit();
    }

    if (breakerOn) checkVictory();
}

function triggerShortCircuit() {
    msgBox.innerHTML = "<strong style='color:red;'>💥 ERRO DE CONEXÃO!</strong> Isso causaria um curto-circuito ou choque!";
    const area = document.getElementById('render-area');
    area.classList.add('short-circuit');
    
    setTimeout(() => {
        area.classList.remove('short-circuit');
    }, 1000);
}

function startDrag(e) {
    let multi = document.getElementById('multimeter');
    let offset = { x: e.clientX - multi.offsetLeft, y: e.clientY - multi.offsetTop };
    document.onmousemove = (ev) => {
        multi.style.left = (ev.clientX - offset.x) + 'px';
        multi.style.top = (ev.clientY - offset.y) + 'px';
    };
    document.onmouseup = () => document.onmousemove = null;
}

function resetGame() { location.reload(); }

function toggleSwitch() {
    if (!connections.quadroToHouse.fase || !connections.quadroToHouse.retorno) {
        msgBox.innerHTML = "⚠️ O interruptor está sem fiação completa para funcionar.";
        return;
    }

    switchOn = !switchOn;
    const lever = document.getElementById('switch-lever');
    
    lever.style.backgroundColor = switchOn ? "#fff" : "#eee";
    lever.style.transform = switchOn ? "scaleY(0.8)" : "scaleY(1)";

    msgBox.innerHTML = switchOn ? "🔌 <strong>Interruptor Ligado.</strong>" : "🔌 <strong>Interruptor Desligado.</strong>";

    checkVictory();
}

function measure(point) {
    if (point === 'fase_bruta') {
        display.innerText = "127";
    } else if (!breakerOn) {
        display.innerText = "000";
    } else {
        if (point === 'fase_quadro' && connections.posteToQuadro.fase) {
            display.innerText = "127";
        } else if (point === 'interruptor' && connections.quadroToHouse.fase) {
            display.innerText = "127";
        } else if (point === 'lampada' && connections.quadroToHouse.retorno && switchOn) {
            display.innerText = "127";
        } else {
            display.innerText = "000";
        }
    }
}

function clearMeasure() { 
    display.innerText = "000"; 
}

function checkVictory() {
    const lamp = document.getElementById('lamp-img');
    const isFullyConnected = connections.quadroToHouse.fase && 
                             connections.quadroToHouse.neutro && 
                             connections.quadroToHouse.retorno;

    if (breakerOn && switchOn && isFullyConnected) {
        lamp.style.filter = "drop-shadow(0 0 40px #f1c40f) brightness(1.3)";
        msgBox.innerHTML = "<b style='color:green; font-size: 18px;'>💡 EXCELENTE! Circuito fechado e Lâmpada Acesa!</b>";
    } else {
        lamp.style.filter = "none";
        if (breakerOn && !switchOn && isFullyConnected) {
            msgBox.innerHTML = "⚡ <b>Circuito pronto.</b> Ligue o interruptor para acender a lâmpada.";
        }
    }
}
