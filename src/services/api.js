const API_KEY ='demo4608072';
const API_BASE ='https://www.mockable.io/';

/*
***** API REST de geração de produtos fictícios ****
Lista de itens que vou gerar
- ID
- produto
- bebida
- tamanho
- Preço
- sabor
*/

//funcao auxiliar para pegar o fetch da url e retornar o JSON
const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`)
    const json = await req.json();
    return json;
}
//exportando o json
export default {
//função que pega as listas, direciona, e retorna para a aplicacao
    getHomeList: async () => {
        return [
            {
                slug: 'productID',
                title: 'ID do produto',
                items: await basicFetch(`/products/{productID}`)
            },
            {
                slug: 'product',
                title: 'Nome do produto',
                items: await basicFetch(`/products/{productName}`)
            },
            {
                slug: 'size',
                title: 'Tamanho do Produto', 
                items: await basicFetch(`/products/{sizeName}`)
            },
            {
                slug: 'price',
                title: 'Preço',
                items: await basicFetch(`/products/{sizePrice}`)
            }
        ]
    }
}