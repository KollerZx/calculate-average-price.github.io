function calcule() {
  let precoMedio = parseFloat(document.getElementById("precoMedio").value);
  let qtde = parseFloat(document.getElementById("qtde").value);
  let cotacao = parseFloat(document.getElementById("cotacao").value);
  let qtdeCompra = parseFloat(document.getElementById("qtdCompra").value);
  let custo = precoMedio * qtde;
  let compra = qtdeCompra * cotacao;
  let custoNovo = compra + custo;
  let qtdAt = qtde + qtdeCompra;
  let pm = (custoNovo / qtdAt).toFixed(2);

  return (document.getElementById("resultado").innerHTML = "R$ " + pm);
}
