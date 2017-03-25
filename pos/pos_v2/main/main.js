'use strict';

function printReceipt(itemBarcodes) {
  var countedBarcodes = BarcodeTool.count(itemBarcodes),
    countedItemInfo = BarcodeTool.getItemInfo(countedBarcodes),
    itemInfoWithPrice = new ItemPayment().calcItemPrice(countedItemInfo);
  const receiptFormatter = new ReceiptFormatter(itemInfoWithPrice);
  console.log(receiptFormatter.getFormattedReceipt());
}
