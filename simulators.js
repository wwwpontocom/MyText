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


// --- PAGE 7: FUNDAMENTALS LOGIC ---
    electrons: [],
    
    initFundamentals() {
        const group = document.getElementById('electron-group');
        if (!group) return;
        group.innerHTML = "";
        this.electrons = [];
        for (let i = 0; i < 40; i++) {
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('r', '3');
            circle.setAttribute('fill', '#f1c40f');
            group.appendChild(circle);
            this.electrons.push({
                el: circle,
                x: Math.random() * 280 + 10,
                y: Math.random() * 20 + 65
            });
        }
        this.animateElectrons();
    },

    updateFundamentals() {
        const v = document.getElementById('range-v').value;
        const a = document.getElementById('range-a').value;
        const p = v * a;

        document.getElementById('val-v').innerText = v;
        document.getElementById('val-a').innerText = a;
        document.getElementById('power-result').innerHTML = `Potência: <strong>${p}W</strong>`;
        
        // Visual feedback: Power brightness
        const resultBox = document.getElementById('power-result');
        const intensity = Math.min(p / 6600, 1); // Max 6600W for scale
        resultBox.style.background = `rgba(241, 196, 15, ${intensity})`;
    },

    animateElectrons() {
        const v = document.getElementById('range-v')?.value || 0;
        const a = document.getElementById('range-a')?.value || 0;
        
        this.electrons.forEach((e, index) => {
            // Speed depends on Voltage (V)
            // Number of visible electrons active depends on Current (A)
            if (index < a * 1.3) { 
                e.el.style.display = "block";
                e.x += (v / 20); 
                if (e.x > 290) e.x = 10;
            } else {
                e.el.style.display = "none";
            }
            e.el.setAttribute('cx', e.x);
            e.el.setAttribute('cy', e.y);
        });

        requestAnimationFrame(() => this.animateElectrons());
    }
