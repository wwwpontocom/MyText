// simulators.js - Logic for Architectural & Electrical Simulators
// --- FIX IS HERE: Ensuring global access and complete logic for all pages ---

window.SimulatorLogic = {
    // Lesson 01 - Page 2: Socket Assembly State
    n_connected: false,
    r_connected: false,
    
    conectarFio(tipo) {
        const log = document.getElementById('log-conexao');
        const central = document.getElementById('contato-central');
        if(!log || !central) return;

        if(tipo === 'neutro') {
            this.n_connected = true;
            log.innerHTML = "✅ Neutro conectado à base rosqueada.";
        }
        if(tipo === 'retorno') {
            this.r_connected = true;
            central.style.background = "#f1c40f";
            central.style.boxShadow = "0 0 10px #f1c40f";
            log.innerHTML = "✅ Retorno conectado ao disco central.";
        }
        if(this.n_connected && this.r_connected) {
            log.innerHTML = "💡 CIRCUITO PRONTO! Lâmpada pode ser acionada.";
            log.style.color = "#27ae60";
        }
    },

    // Lesson 01 - Page 3: Breaker Panel (QDC) Logic
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
    }
};
