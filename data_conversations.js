// BIBLIOTECA_CONVERSAS: Memória de Diálogos e Aulas Interativas
let BIBLIOTECA_CONVERSAS = {
    "logica_eletricidade_basica": {
        keywords: ["eletricidade", "circuito", "luz", "interruptor", "ligação", "fase", "neutro", "instalações"],
        fase: "INSTALAÇÕES ELÉTRICAS",
        titulo: "Aula Interativa: Lógica de Circuitos",
        icone: "⚡",
        resumo: "Simulação de circuitos e discussão sobre a infraestrutura elétrica na arquitetura moderna.",
        html_content: `
            <div style="line-height: 1.5; color: #333; padding: 10px; border: 1px solid #ddd; border-radius: 8px; background: #fcfcfc;">
                <h4 style="color: #d35400;">💡 Laboratório de Eletricidade</h4>
                <p>Em nossas conversas, discutimos como a fiação deve ser integrada ao projeto sem comprometer a estética. Vamos testar a lógica do interruptor:</p>
                
                <div id="simulador-eletrico" style="text-align: center; padding: 20px; background: #eee; border-radius: 10px;">
                    <div id="lampada" style="font-size: 50px; filter: grayscale(100%); margin-bottom: 10px;">💡</div>
                    <button class="btn-tool" onclick="document.getElementById('lampada').style.filter = document.getElementById('lampada').style.filter === 'grayscale(0%)' ? 'grayscale(100%)' : 'grayscale(0%)'; this.innerText = this.innerText === 'LIGAR' ? 'DESLIGAR' : 'LIGAR';">
                        LIGAR
                    </button>
                    <p style="font-size: 11px; margin-top: 10px;">(Simulação de Circuito Simples)</p>
                </div>

                <h4 style="color: #2980b9; margin-top: 15px;">Conceitos Chave do Professor:</h4>
                <ul>
                    <li><b>Fase:</b> O condutor que traz o potencial elétrico.</li>
                    <li><b>Neutro:</b> Fecha o circuito sem tensão.</li>
                    <li><b>Retorno:</b> O fio que sai do interruptor para a lâmpada.</li>
                </ul>
            </div>
        `,
        pagina: "Conversa 01"
    }
};

// Extensão de Memória: Discussões sobre Urbanismo e Planejamento
Object.assign(BIBLIOTECA_CONVERSAS, {
    "teoria_cidade_jardim": {
        keywords: ["ebenezer howard", "cidade jardim", "urbanismo", "densidade", "cinturão verde", "utopia"],
        fase: "HISTÓRIA DO URBANISMO",
        titulo: "Discussão: A Utopia de Howard",
        icone: "🌳",
        resumo: "Análise crítica sobre a descentralização urbana e o modelo de Cidade Jardim.",
        html_content: `
            <div style="line-height: 1.5;">
                <h4 style="color: #27ae60;">A Cidade Social</h4>
                <p>Lembramos de nossa aula sobre Howard. O segredo não era apenas o verde, mas a <b>gestão da terra</b>.</p>
                <div style="background: #eef9f0; padding: 15px; border-left: 5px solid #27ae60;">
                    <i>"Humanity and Nature can be united in a town-country alliance."</i>
                </div>
                <p style="margin-top:10px;">O diagrama dos <b>Três Ímãs</b> explica por que as pessoas migram para a cidade ou para o campo.</p>
                <button class="btn-tool" onclick="alert('Ímã 1: Cidade (Oportunidades, mas poluição)\\nÍmã 2: Campo (Ar puro, mas tédio)\\nÍmã 3: Cidade-Campo (O melhor dos dois mundos)')">
                    Ver os 3 Ímãs
                </button>
            </div>
        `,
        pagina: "Conversa 02"
    }
});
