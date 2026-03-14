Object.assign(BIBLIOTECA_CONVERSAS, {
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
    #game-container-p5 { width: 100%; max-width: 1000px; background: #fff; border-radius: 10px; padding: 25px; color: #333; position: relative; margin: auto; }
    #render-area { position: relative; width: 100%; height: 550px; background: var(--bg-wall); border: 2px solid #bdc3c7; overflow: hidden; border-radius: 5px; }
    .label-tag { position: absolute; background: #e67e22; color: white; padding: 2px 8px; font-size: 11px; border-radius: 3px; z-index: 10; pointer-events: none; }
    .component { position: absolute; cursor: pointer; z-index: 5; }
    #poste { position: absolute; left: 0; top: 0; width: 200px; height: 100%; background: #ced6e0; border-right: 5px solid #747d8c; padding: 15px; box-sizing: border-box; }
    .wire-source { width: 18px; height: 18px; border-radius: 50%; display: inline-block; border: 2px solid #2f3542; vertical-align: middle; }
    #quadro-distribuicao { position: absolute; left: 240px; top: 40px; width: 160px; height: 200px; background: #2f3542; border-radius: 8px; color: white; text-align: center; padding: 10px; }
    .breaker { width: 45px; height: 70px; background: #95a5a6; margin: 15px auto; cursor: pointer; position: relative; border: 3px solid #7f8c8d; }
    .breaker-toggle { width: 100%; height: 50%; background: #333; position: absolute; bottom: 0; transition: 0.2s; }
    .breaker.on .breaker-toggle { transform: translateY(-100%); background: #c0392b; }
    #multimeter { position: absolute; width: 130px; height: 190px; background: #f1c40f; border: 4px solid #f39c12; border-radius: 12px; bottom: 20px; left: 240px; z-index: 100; cursor: move; padding: 12px; color: #000; text-align: center; }
    #multi-display { background: #7f8c8d; height: 45px; border-radius: 5px; font-family: monospace; font-size: 26px; line-height: 45px; color: #000; font-weight: bold; }
    .probe { position: absolute; width: 12px; height: 70px; border-radius: 6px; pointer-events: none; border: 2px solid #000; }
    #probe-red { background: #ff4757; left: -25px; top: 60px; }
    #probe-black { background: #2f3542; right: -25px; top: 60px; }
    .controls { display: flex; justify-content: space-around; padding: 20px; background: #f1f2f6; border-radius: 8px; margin-top: 15px; }
    .wire-btn { padding: 10px 15px; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; color: white; }
    .selected { outline: 4px solid #f1c40f; transform: scale(1.05); }
    #message-box { height: 70px; margin-top: 15px; padding: 15px; background: #fff; border-left: 8px solid #3498db; }
    svg { position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 2; }
    line { stroke-width: 6; stroke-linecap: round; }
    .hit-point { position: absolute; width: 22px; height: 22px; background: rgba(255, 255, 0, 0.4); border: 2px solid gold; border-radius: 50%; z-index: 20; }
    .short-circuit { animation: flash-red 0.15s infinite; background-color: rgba(255, 0, 0, 0.7) !important; }
    @keyframes flash-red { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
</style>

<div id="game-container-p5">
    <div class="header">
        <h2>Simulador NBR 5410 - Prática Profissional</h2>
    </div>

    <div id="render-area">
        <svg id="wire-canvas"></svg>
        <div id="poste">
            <div onclick="p5_logic.selectWire('fase', this)"><span class="wire-source" style="background:var(--fase)"></span> <b>Fase</b></div>
            <div onclick="p5_logic.selectWire('neutro', this)" style="margin-top:10px"><span class="wire-source" style="background:var(--neutro)"></span> <b>Neutro</b></div>
            <div onclick="p5_logic.selectWire('protecao', this)" style="margin-top:10px"><span class="wire-source" style="background:var(--protecao)"></span> <b>Terra</b></div>
        </div>

        <div id="quadro-distribuicao" onclick="p5_logic.makeConnection('quadro')">
            <strong>QUADRO GERAL</strong>
            <div id="disjuntor-geral" class="breaker" onclick="p5_logic.toggleBreaker(event)"><div class="breaker-toggle"></div></div>
            <div id="status-energia" style="font-size:10px; color:#ff4757;">OFF</div>
        </div>

        <div id="multimeter" onmousedown="p5_logic.startDrag(event)">
            <div id="multi-display">000</div>
            <div id="probe-red" class="probe"></div>
            <div id="probe-black" class="probe"></div>
        </div>

        <div class="hit-point" style="top:40px; left:185px;" onmouseover="p5_logic.measure('fase_bruta')" onmouseout="p5_logic.clearMeasure()"></div>
        <div class="hit-point" style="top:135px; left:385px;" onmouseover="p5_logic.measure('fase_quadro')" onmouseout="p5_logic.clearMeasure()"></div>

        <div id="lampada-container" class="component" onclick="p5_logic.makeConnection('lampada')">
            <img id="lamp-img" src="https://cdn-icons-png.flaticon.com/512/702/702797.png" width="80">
        </div>

        <div id="interruptor-box" class="component" onclick="p5_logic.makeConnection('interruptor')">
            <div id="switch-lever" class="switch-btn" onclick="event.stopPropagation(); p5_logic.toggleSwitch();"></div>
        </div>
    </div>

    <div id="message-box">Inicie conectando os fios do poste ao Quadro Geral.</div>

    <div class="controls">
        <button class="wire-btn" style="background:var(--fase)" onclick="p5_logic.selectWire('fase', this)">FASE</button>
        <button class="wire-btn" style="background:var(--neutro)" onclick="p5_logic.selectWire('neutro', this)">NEUTRO</button>
        <button class="wire-btn" style="background:var(--protecao)" onclick="p5_logic.selectWire('protecao', this)">TERRA</button>
        <button class="wire-btn" style="background:var(--retorno)" onclick="p5_logic.selectWire('retorno', this)">RETORNO</button>
    </div>
</div>

<script>
    // Usamos um objeto único para evitar conflitos globais
    var p5_logic = {
        switchOn: false, breakerOn: false, selectedType: null,
        conn: { pToQ: {fase:false, neutro:false, terra:false}, qToH: {fase:false, neutro:false, retorno:false, terra:false} },

        selectWire(type, btn) {
            this.selectedType = type;
            document.querySelectorAll('.wire-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
        },

        toggleBreaker(e) {
            e.stopPropagation();
            if(!this.conn.pToQ.fase) return alert("Sem energia do poste!");
            this.breakerOn = !this.breakerOn;
            document.getElementById('disjuntor-geral').classList.toggle('on', this.breakerOn);
            document.getElementById('status-energia').innerText = this.breakerOn ? "ON" : "OFF";
            this.checkVictory();
        },

        makeConnection(target) {
            if(!this.selectedType) return;
            const canvas = document.getElementById('wire-canvas');
            const draw = (x1,y1,x2,y2,c) => {
                let l = document.createElementNS('http://www.w3.org/2000/svg','line');
                l.setAttribute('x1',x1); l.setAttribute('y1',y1); l.setAttribute('x2',x2); l.setAttribute('y2',y2);
                l.setAttribute('stroke',c); canvas.appendChild(l);
            };

            if(this.selectedType === 'fase' && target === 'quadro') { draw(200,45,240,140,'red'); this.conn.pToQ.fase = true; }
            if(this.selectedType === 'fase' && target === 'interruptor') { draw(400,140,750,440,'red'); this.conn.qToH.fase = true; }
            if(this.selectedType === 'neutro' && target === 'lampada') { draw(200,85,630,95,'blue'); this.conn.qToH.neutro = true; }
            if(this.selectedType === 'retorno' && target === 'lampada') { draw(785,440,700,150,'black'); this.conn.qToH.retorno = true; }
            
            this.checkVictory();
        },

        measure(p) {
            let d = document.getElementById('multi-display');
            if(p==='fase_bruta') d.innerText = "127";
            else d.innerText = (this.breakerOn && this.conn.pToQ.fase) ? "127" : "000";
        },

        clearMeasure() { document.getElementById('multi-display').innerText = "000"; },

        toggleSwitch() {
            this.switchOn = !this.switchOn;
            document.getElementById('switch-lever').style.transform = this.switchOn ? "scaleY(0.7)" : "scaleY(1)";
            this.checkVictory();
        },

        startDrag(e) {
            let m = document.getElementById('multimeter');
            let ox = e.clientX - m.offsetLeft, oy = e.clientY - m.offsetTop;
            document.onmousemove = (ev) => { m.style.left = (ev.clientX-ox)+'px'; m.style.top = (ev.clientY-oy)+'px'; };
            document.onmouseup = () => document.onmousemove = null;
        },

        checkVictory() {
            let win = this.breakerOn && this.switchOn && this.conn.qToH.fase && this.conn.qToH.neutro && this.conn.qToH.retorno;
            document.getElementById('lamp-img').style.filter = win ? "drop-shadow(0 0 30px yellow) brightness(1.2)" : "none";
        }
    };
</script>
        `,
        pagina: "Aula 01 - Pág 5"
    }
});
