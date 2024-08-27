const GerarRelatorio = (vendas,data_inicio,data_fim)=> {
    const relatorio = {};
    let valor_total_vendido = 0;
    const dataInicio = new Date(data_inicio);
    const dataFim = new Date(data_fim);

    vendas.forEach(venda => {
        const data_venda = new Date(venda.data);
        if (data_venda >= dataInicio && data_venda <= dataFim ){
            if (relatorio[venda.sku]) {
                relatorio[venda.sku].quantidade += venda.quantidade;
                relatorio[venda.sku].valor_total += venda.valorTotal
            } else {
                relatorio[venda.sku] = {
                    quantidade : venda.quantidade,
                    valor_total: venda.valorTotal
                };
            }
            valor_total_vendido += venda.valorTotal
        }
    });
    return{ 
        relatorio,
        valor_total_vendido
    };
};
const vendas = [
    { sku: 1001, quantidade: 2, valorTotal: 50.00, data: '2021-01-01' },
    { sku: 1002, quantidade: 1, valorTotal: 20.00, data: '2021-01-01' },
    { sku: 1003, quantidade: 5, valorTotal: 100.00, data: '2021-01-02' },
    { sku: 1001, quantidade: 1, valorTotal: 25.00, data: '2021-01-02' }
];

 const data_inicio = '2021-01-01';
 const data_fim = '2021-01-02';

 const relatorio = GerarRelatorio(vendas,data_inicio,data_fim);
 console.log(JSON.stringify(relatorio, null, 2));
 //console.log(relatorio);