const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.00}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'

]

// Retornar um array apenas com preco

const paraObjetos = json => JSON.parse(json)
const apenasProcos = produto => produto.preco

const resultado2 = carrinho.map(paraObjetos)
const resultado = carrinho.map(paraObjetos).map(apenasPrecos)
console.log(resultado)
console.log(resultado2)