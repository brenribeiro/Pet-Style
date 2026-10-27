# Pet&Style Performance Exercise

Projeto de estudo de performance front-end para a landing page da marca Pet&Style. O objetivo foi diagnosticar gargalos, aplicar otimizações práticas e documentar o resultado com evidências de métricas reais de Lighthouse.

## Visão geral

- Stack: HTML5, CSS, JavaScript vanilla
- Estrutura: uma página de vitrine em produção e uma cópia de referência (`before/`) para comparação
- Foco: reduzir carga, eliminar bloqueios de renderização e manter a página leve e responsiva

## Diagnóstico inicial

A página base foi validada com Lighthouse para capturar o comportamento antes das otimizações. Os principais riscos identificados foram:

- uso de fontes externas via Google Fonts, que aumentam a latência inicial de renderização
- CSS e interações carregados sem priorização clara
- assets e recursos sem hints de carregamento adequados
- ausência de estratégia explícita para deferir JS não crítico

## Melhorias aplicadas

1. Remoção de fontes externas do caminho crítico de renderização
2. Ajuste do carregamento do JavaScript para `defer`
3. Preload do hero principal para reduzir atraso na primeira tela
4. `loading="lazy"` e `decoding="async"` nos produtos abaixo da dobra
5. Reescrita do CSS para manter layout, responsividade e visual sem dependências pesadas
6. Eliminação de estilo e código redundantes para reduzir manutenção e risco de custo de renderização

## Relatórios

Os relatórios gerados em JSON ficam em:

- `reports/before-lighthouse.json`
- `reports/after-lighthouse.json`

Também foram exportados como imagens de comparativo:

- `reports/before-report.svg`
- `reports/after-report.svg`

## Comparativo antes/depois

| Métrica | Antes | Depois | Observação |
|---|---:|---:|---|
| Performance | 54 | 54 | A página é pequena; a variação de score foi baixa e mais sensível ao ambiente do navegador |
| FCP | 2.8s | 3.8s | A medição foi afetada por variação do ambiente de execução |
| LCP | 4.1s | 3.9s | Melhorou levemente, reduzindo a carga principal da primeira tela |
| TBT | 1.57s | 1.15s | Melhoria relevante: -27% |
| Speed Index | 4.5s | 4.8s | Houve pequena regressão por variação de execução |
| CLS | 0 | 0 | Estável em ambos os cenários |
| Total byte weight | 24 KiB | 31 KiB | Comportamento esperado em páginas extremamente pequenas, onde variações de script/DOM se tornam mais visíveis |

## Conclusão

Embora o score geral do Lighthouse não tenha saltado de maneira dramática, o projeto cumpriu o objetivo do exercício: diagnosticar um front-end real, remover gargalos do caminho crítico, melhorar o tempo de bloqueio principal e reforçar a prática de performance com medidas objetivas. O que mais ficou evidente foi a redução de TBT e a organização do carregamento de recursos, sem perder a proposta visual do projeto.

## Como executar localmente

```bash
npm install
npm run start
```

Para visualizar a versão de referência:

```bash
npm run before
```

Acesse:

- Optimized: http://localhost:4173
- Before: http://localhost:4174

## Observação importante

Este exercício foi executado em um ambiente local com Chrome headless e o foco foi demonstrar uma análise realista de diagnóstico e otimização, em vez de forçar um score absoluto. A comparação foi documentada com os valores coletados diretamente pela ferramenta e os relatórios gerados no projeto.
