const DisponibilidaDeProduto = (sku,produtos) => {
    const produto = produtos.find(item => item.sku === sku);
    return produto ? produto.quantidade > 0 : false;

};
const produtos = [
    { sku: 1001, nome: 'Camiseta', quantidade: 5 },
    { sku: 1002, nome: 'Calça', quantidade: 10 },
    { sku: 1003, nome: 'Vestido', quantidade: 3 }
    ];

const sku = 1003;
const disponivel = DisponibilidaDeProduto(sku,produtos);
console.log(disponivel);

