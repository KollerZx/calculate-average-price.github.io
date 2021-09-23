function calculateAveragePrice() {
  let averageSharePrice = parseFloat(document.getElementById("averageSharePrice").value);
  let quantity = parseFloat(document.getElementById("quantity").value);
  let currentPrice = parseFloat(document.getElementById("currentPrice").value);
  let quantityPurchased = parseFloat(document.getElementById("quantityPurchased").value);

  let walletCost = averageSharePrice * quantity;
  let buy = quantityPurchased * currentPrice;
  let updatedCost = buy + walletCost;
  let updatedQuantity = quantity + quantityPurchased;
  let newAveragePrice = (updatedCost / updatedQuantity).toFixed(2);

  return (document.getElementById("newAveragePrice").innerHTML = "R$ " + newAveragePrice);
}
