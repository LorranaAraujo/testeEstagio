const FreteEntrega = (peso,distancia,precos_tabela) => {
    for (const k in precos_tabela) {
        const [peso_range, distancia_range] = k.split(',');
        const [peso_min, peso_max] = peso_range.split('-').map(Number);
        const [distancia_min, distancia_max] = distancia_range.split('-').map(Number);
        if (peso >= peso_min && peso <= peso_max && distancia >= distancia_min && distancia <= distancia_max) {
            return precos_tabela[k];
        }
    }
    return null;
}
const precos_tabela = {
    '0-1,0-5': 10.0,    // Até 1 kg e até 5 km: R$ 10,00
    '0-1,6-10': 15.0,   // Até 1 kg e 6-10 km: R$ 15,00
    '1-5,0-5': 20.0,    // 1-5 kg e até 5 km: R$ 20,00
    '1-5,6-10': 25.0,   // 1-5 kg e 6-10 km: R$ 25,00
    '5-10,0-5': 30.0,   // 5-10 kg e até 5 km: R$ 30,00
    '5-10,6-10': 35.0   // 5-10 kg e 6-10 km: R$ 35,00
};
const peso = 3;
const distancia = 7;
const valot_frete = FreteEntrega(peso,distancia,precos_tabela);
console.log(`Valor do frete : R$ ${valot_frete}`)