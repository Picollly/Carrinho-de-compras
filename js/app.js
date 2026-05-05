let total = 0
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').textContent = 'R$ 0';

function adicionar(){
    // chamar e separar o valor e nome dos produtos; quantidade
    let listaProdutos = document.getElementById('produto').value;
    let valorProduto = listaProdutos.split('R$')[1];
    let nomesProduto = listaProdutos.split('R$')[0];
    let quantidade = document.getElementById('quantidade').value;
    let valorAdicionado = quantidade * valorProduto;
   
    // adicionar valor e produto a lista
    let carrinhoCompras = document.getElementById('lista-produtos');
    carrinhoCompras.innerHTML = carrinhoCompras.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomesProduto} <span class="texto-azul">R$${valorAdicionado   }</span>
        </section>`;
    // atualizar o total
    total = total + valorAdicionado 
    let listaTotal = document.getElementById('valor-total');
     listaTotal.textContent = `R$ ${total}`

    document.getElementById('quantidade').value = "0"
    
}


function limpar(){
    total = 0
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}