// 1. Initial Library Definition
let BIBLIOTECA_LIVRO = {
    "form_space_order": {
        keywords: ["arquitetura", "forma", "espaço", "ordem", "ching", "proporção", "ritmo", "hierarquia", "simetria", "Ponto Indica uma posição no espaço Linha Um ponto estendido possui comprimento direção e posição Plano Uma linha estendida possui largura e comprimento Volume Um plano estendido possui profundidade"],
        fase: "TEORIA DA ARQUITETURA",
        titulo: "Forma, Espaço e Ordem",
        icone: "🏛️",
        resumo: "Um guia fundamental sobre os elementos primários do design arquitetônico e como eles organizam o ambiente construído.",
        html_content: `
            <div style="line-height: 1.5; color: #333;">
                <p>A arquitetura é o contato entre a <b>forma</b> e o <b>espaço</b>. Segundo os princípios fundamentais, a ordem é o que organiza esses elementos em um todo coerente.</p>
                
                <h4 style="color: var(--primary);">1. Elementos Primários</h4>
                <ul>
                    <li><b>Ponto:</b> Indica uma posição no espaço.</li>
                    <li><b>Linha:</b> Um ponto estendido; possui comprimento, direção e posição.</li>
                    <li><b>Plano:</b> Uma linha estendida; possui largura e comprimento.</li>
                    <li><b>Volume:</b> Um plano estendido; possui profundidade.</li>
                </ul>

                <h4 style="color: var(--primary);">2. Organização do Espaço</h4>
                <p>Os espaços podem se relacionar de quatro formas principais:</p>
                <ul>
                    <li><b>Espaço dentro de um espaço:</b> Um volume contido em outro maior.</li>
                    <li><b>Espaços interconectados:</b> Onde dois volumes se sobrepôem.</li>
                    <li><b>Espaços adjacentes:</b> Separados por um plano ou limite comum.</li>
                    <li><b>Espaços vinculados por um comum:</b> Dois espaços que confiam em um terceiro para relação.</li>
                </ul>

                <h4 style="color: var(--primary);">3. Princípios de Ordem</h4>
                <p>A ordem não é apenas regularidade, mas a harmonia entre as partes:</p>
                <table style="width:100%; border-collapse: collapse; font-size: 13px;">
                    <tr style="background: #f0f0f0;">
                        <th style="padding: 5px; border: 1px solid #ddd;">Princípio</th>
                        <th style="padding: 5px; border: 1px solid #ddd;">Definição</th>
                    </tr>
                    <tr>
                        <td style="padding: 5px; border: 1px solid #ddd;"><b>Eixo</b></td>
                        <td style="padding: 5px; border: 1px solid #ddd;">Linha que organiza formas e espaços linearmente.</td>
                    </tr>
                    <tr>
                        <td style="padding: 5px; border: 1px solid #ddd;"><b>Simetria</b></td>
                        <td style="padding: 5px; border: 1px solid #ddd;">Distribuição equilibrada de formas equivalentes.</td>
                    </tr>
                    <tr>
                        <td style="padding: 5px; border: 1px solid #ddd;"><b>Hierarquia</b></td>
                        <td style="padding: 5px; border: 1px solid #ddd;">Importância dada a uma forma por tamanho ou forma.</td>
                    </tr>
                    <tr>
                        <td style="padding: 5px; border: 1px solid #ddd;"><b>Ritmo</b></td>
                        <td style="padding: 5px; border: 1px solid #ddd;">Movimento unificador caracterizado pela repetição.</td>
                    </tr>
                </table>
                <p style="margin-top: 15px; font-style: italic; font-size: 11px;">Ref: Francis D.K. Ching - "Architecture: Form, Space, and Order".</p>
            </div>
        `,
        pagina: "Teoria 01"
    }
};

// 2. Expansion Block (Adding detailed analysis for AI Brain)
Object.assign(BIBLIOTECA_LIVRO, {
    "proporcao_escala": {
        keywords: ["proporção", "escala", "humana", "modular", "le corbusier", "seção áurea", "ken"],
        fase: "TEORIA DA ARQUITETURA",
        titulo: "Proporção e Escala",
        icone: "📐",
        resumo: "Estudo da relação entre as dimensões das partes de um edifício e a escala humana.",
        html_content: `
            <div style="line-height: 1.5; color: #333;">
                <h4 style="color: var(--primary);">Sistemas de Proporção</h4>
                <p>Sistemas matemáticos e geométricos que visam criar harmonia visual:</p>
                <ul>
                    <li><b>Seção Áurea:</b> Relação matemática entre duas dimensões (1,618).</li>
                    <li><b>Ordens Clássicas:</b> Proporções baseadas no diâmetro da coluna.</li>
                    <li><b>Modulor:</b> Sistema de Le Corbusier baseado nas dimensões do corpo humano.</li>
                    <li><b>Ken:</b> Unidade de medida tradicional japonesa que organiza o espaço.</li>
                </ul>
                <h4 style="color: var(--primary);">Escala Humana</h4>
                <p>A escala refere-se a como percebemos o tamanho de um edifício em relação ao nosso próprio corpo. Uma escala íntima traz conforto, enquanto uma escala monumental evoca admiração e poder.</p>
            </div>
        `,
        pagina: "Teoria 02"
    }
});
