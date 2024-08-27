const valorTotalFinanciamento = (valor_produto, qnt_parcelas, taxa_j) => {
    const i = taxa_j / 100;
    const valor_parcela = valor_produto / qnt_parcelas;
    const valor_total = valor_parcela *((Math.pow(1+i,qnt_parcelas)-1)/i);
    return valor_total.toFixed(2);
};

const valor_produto = 1000;
const qnt_parcelas = 10;
const taxa_j = 2;

const valor_total = valorTotalFinanciamento(valor_produto,qnt_parcelas,taxa_j);
console.log({valor_total});
