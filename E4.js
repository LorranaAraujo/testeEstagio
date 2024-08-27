const AtualizarEstoque = (itensVendidos,estoque) =>{
    itensVendidos.forEach(produto_vendido => {
        const produto_estoque = estoque.find(produto =>produto.sku === produto_vendido.sku);
        if (produto_estoque) {
            produto_estoque.quantidade -= produto_vendido.quantidade;
        }
    });
    return estoque;
};
const itensVendidos = [
    { sku: 1001, quantidade: 2 },
    { sku: 1002, quantidade: 1 },
    { sku: 1003, quantidade: 5 }
    ];
const estoque = [
    { sku: 1001, quantidade: 5 },
    { sku: 1002, quantidade: 2 },
    { sku: 1003, quantidade: 5 }
    ];

const estoque_atualizado = AtualizarEstoque(itensVendidos,estoque);
console.log(JSON.stringify(estoque_atualizado, null, 2));
