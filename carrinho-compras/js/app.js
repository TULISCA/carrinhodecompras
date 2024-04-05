let totalGeral;
limpar()
function adicionar() {
  //recuperar valores nome do produto, quantidade e valor
  let produtos = document.getElementById('produto').value;
  let nomeProduto = produtos.split('-')[0];
  let valorUnitario = produtos.split('R$')[1]; 
  let monte = document.getElementById('quantidade').value; 
      //calcular o preço, o nosso subtotal
  let preco = monte * valorUnitario;
  let carrinho = document.getElementById('lista-produtos');
  //adicionar no carrinho
      carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
  <span class="texto-azul">${monte}x</span> ${nomeProduto} <span class="texto-azul">R${preco}</span>
</section>`;
      //atualizar o valor total
      totalGeral = totalGeral + preco;
      let campoTotal = document.getElementById('valor-total'); 
      campoTotal.textContent = `R$ ${totalGeral}`;
      document.getElementById('quantidade').value = 0;
}

function limpar() {
  totalGeral= 0;
  document.getElementById('lista-produtos').innerHTML = '';
  document.getElementById('valor-total').innerHTML= '0';
}
