function takeOrder(order, deliveryOrders) {
if (deliveryOrders.length < 3) {
//return
deliveryOrders.push(order);
}

}
function refundOrder(order, deliveryOrders) {
deliveryOrders.shift(order);
//same output w/ or without parameter in the parens
}
function listItems(deliveryOrders) {
  var items = "";
  for (var i = 0; i < deliveryOrders.length; i++) {
    items += (deliveryOrders[i].item)
    if ([i] < 2) {
      items += ", "
    }
  }

  return items;
}

function searchOrder(deliveryOrders, order) {
  var ordered = false;
  if (deliveryOrders[0].item === order) {
      ordered = true;
  }
  if (deliveryOrders[1].item === order) {
    ordered = true;
  }
  return ordered;
}












module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
