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

    // Lesson 01 - Page 4: Breaker Panel (QDC) Logic
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
    }
};
