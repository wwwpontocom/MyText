// simulators.js - Logic for Architectural & Electrical Simulators
// --- FIX IS HERE: Fully Consolidated Logic (All Lessons + Page 5) ---

window.SimulatorLogic = {
    // --- LESSON 01 - PAGE 2: SOCKET ASSEMBLY ---
    n_connected: false,
    r_connected: false,
    sw_on: false,
    
    conectarFio(tipo) {
        const log = document.getElementById('log-conexao');
        const fn = document.getElementById('fio-neutro');
        const fr = document.getElementById('fio-retorno');
        const central = document.getElementById('contato-central');

        if(!log) return;
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

    // --- PAGE 5: WIRING CHALLENGE STATE ---
    pg5_switchOn: false,
    pg5_breakerOn: false,
    selectedWireType: null,
    connections: { 
        posteToQuadro: { fase: false, neutro: false, protecao: false },
        quadroToHouse: { fase: false, neutro: false, retorno: false, protecao: false }
    },

    selectWire(type, btn) {
        this.selectedWireType = type;
        document.querySelectorAll('.wire-btn').forEach(b => b.classList.remove('selected'));
        if (btn) btn.classList.add('selected');
        const msgBox = document.getElementById('message-box');
        if (msgBox) msgBox.innerHTML = `Fio <strong>${type.toUpperCase()}</strong> selecionado. Clique no destino para conectar.`;
    },

    toggleBreaker(e) {
        if(e) e.stopPropagation();
        const msgBox = document.getElementById('message-box');
        if (!this.connections.posteToQuadro.fase) {
            if(msgBox) msgBox.innerHTML = "❌ <span style='color:red'>ERRO:</span> Não há energia vindo do poste!";
            return;
        }
        this.pg5_breakerOn = !this.pg5_breakerOn;
        const b = document.getElementById('disjuntor-geral');
        const s = document.getElementById('status-energia');
        if (this.pg5_breakerOn) {
            if(b) b.classList.add('on');
            if(s) { s.innerText = "DISJUNTOR: ON"; s.style.color = "#2ecc71"; }
            this.checkVictoryPG5();
        } else {
            if(b) b.classList.remove('on');
            if(s) { s.innerText = "DISJUNTOR: OFF"; s.style.color = "#ff4757"; }
            const lamp = document.getElementById('lamp-img');
            if(lamp) lamp.style.filter = "none";
        }
    },

    makeConnection(target) {
        if (!this.selectedWireType) return;
        const msgBox = document.getElementById('message-box');
        let isCorrect = false;

        if (this.selectedWireType === 'fase') {
            if (target === 'quadro') {
                this.drawLine(200, 45, 240, 140, 'red');
                this.connections.posteToQuadro.fase = true;
                isCorrect = true;
            } else if (target === 'interruptor') {
                if (!this.connections.posteToQuadro.fase) { msgBox.innerText = "Ligue o poste primeiro!"; return; }
                this.drawLine(400, 140, 750, 440, 'red');
                this.connections.quadroToHouse.fase = true;
                isCorrect = true;
            }
        } else if (this.selectedWireType === 'neutro') {
            if (target === 'quadro') {
                this.drawLine(200, 85, 240, 95, 'blue');
                this.connections.posteToQuadro.neutro = true;
                isCorrect = true;
            } else if (target === 'lampada') {
                this.drawLine(400, 95, 630, 95, 'blue');
                this.connections.quadroToHouse.neutro = true;
                isCorrect = true;
            }
        } else if (this.selectedWireType === 'retorno' && target === 'lampada') {
            if (!this.connections.quadroToHouse.fase) { msgBox.innerText = "O interruptor precisa de fase!"; return; }
            this.drawLine(785, 440, 700, 150, 'black');
            this.connections.quadroToHouse.retorno = true;
            isCorrect = true;
        } else if (this.selectedWireType === 'protecao' && target === 'lampada') {
            this.drawLine(200, 125, 740, 70, 'green');
            this.connections.quadroToHouse.protecao = true;
            isCorrect = true;
        }

        if (!isCorrect) this.triggerShortCircuit();
        if (this.pg5_breakerOn) this.checkVictoryPG5();
    },

    drawLine(x1, y1, x2, y2, color) {
        const canvas = document.getElementById('wire-canvas');
        if (!canvas) return;
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', x1); line.setAttribute('y1', y1);
        line.setAttribute('x2', x2); line.setAttribute('y2', y2);
        line.setAttribute('stroke', color);
        line.setAttribute('stroke-width', '4');
        canvas.appendChild(line);
    },

    triggerShortCircuit() {
        const msgBox = document.getElementById('message-box');
        if(msgBox) msgBox.innerHTML = "<strong style='color:red;'>💥 ERRO DE CONEXÃO!</strong> Perigo de Curto!";
        const area = document.getElementById('render-area');
        if(area) {
            area.classList.add('short-circuit');
            setTimeout(() => area.classList.remove('short-circuit'), 1000);
        }
    },

    checkVictoryPG5() {
        const lamp = document.getElementById('lamp-img');
        const msgBox = document.getElementById('message-box');
        const isFullyConnected = this.connections.quadroToHouse.fase && 
                                 this.connections.quadroToHouse.neutro && 
                                 this.connections.quadroToHouse.retorno;

        if (this.pg5_breakerOn && this.pg5_switchOn && isFullyConnected) {
            if(lamp) lamp.style.filter = "drop-shadow(0 0 40px #f1c40f) brightness(1.3)";
            if(msgBox) msgBox.innerHTML = "<b style='color:green;'>💡 EXCELENTE! Lâmpada Acesa!</b>";
        }
    },

    toggleSwitchPG5() {
        const msgBox = document.getElementById('message-box');
        if (!this.connections.quadroToHouse.fase || !this.connections.quadroToHouse.retorno) {
            if(msgBox) msgBox.innerHTML = "⚠️ Interruptor sem fiação completa.";
            return;
        }
        this.pg5_switchOn = !this.pg5_switchOn;
        const lever = document.getElementById('switch-lever');
        if(lever) {
            lever.style.backgroundColor = this.pg5_switchOn ? "#fff" : "#eee";
            lever.style.transform = this.pg5_switchOn ? "scaleY(0.8)" : "scaleY(1)";
        }
        this.checkVictoryPG5();
    },

    measure(point) {
        const display = document.getElementById('multi-display');
        if(!display) return;
        if (point === 'fase_bruta') {
            display.innerText = "127";
        } else if (!this.pg5_breakerOn) {
            display.innerText = "000";
        } else {
            if (point === 'fase_quadro' && this.connections.posteToQuadro.fase) display.innerText = "127";
            else if (point === 'interruptor' && this.connections.quadroToHouse.fase) display.innerText = "127";
            else if (point === 'lampada' && this.connections.quadroToHouse.retorno && this.pg5_switchOn) display.innerText = "127";
            else display.innerText = "000";
        }
    }
};
// --- MULTIMETER DRAG LOGIC ---
    multimeterState: { offset: { x: 0, y: 0 } },

    startDrag(e) {
        const multi = document.getElementById('multimeter');
        if (!multi) return;

        // Calculate offset
        this.multimeterState.offset.x = e.clientX - multi.offsetLeft;
        this.multimeterState.offset.y = e.clientY - multi.offsetTop;

        // Use arrow functions to maintain "this" context
        const onMouseMove = (ev) => {
            multi.style.left = (ev.clientX - this.multimeterState.offset.x) + 'px';
            multi.style.top = (ev.clientY - this.multimeterState.offset.y) + 'px';
        };

        const onMouseUp = () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    }
}; // --- END OF SIMULATORLOGIC OBJECT ---

// --- GLOBAL BRIDGE (Keeps HTML onclicks/onmousedown working) ---
window.selectWire = (t, b) => window.SimulatorLogic.selectWire(t, b);
window.makeConnection = (t) => window.SimulatorLogic.makeConnection(t);
window.toggleBreaker = (e) => window.SimulatorLogic.toggleBreaker(e);
window.toggleSwitch = () => window.SimulatorLogic.toggleSwitchPG5();
window.measure = (p) => window.SimulatorLogic.measure(p);
window.clearMeasure = () => { const d = document.getElementById('multi-display'); if(d) d.innerText = "000"; };

// Link the multimeter drag event
window.startDrag = (e) => window.SimulatorLogic.startDrag(e);
