'use strict';

function printReceipt(itemBarcodes) {
  var countedBarcodes = parseBarcode(itemBarcodes);
  var countedItemInfo = getItemInfoByBarcode(countedBarcodes);
  var itemInfoWithPrice = calcItemPrice(countedItemInfo);
  var shoppingDetails = detailsFormatter(itemInfoWithPrice);
  var shoppingSummary = summaryFormatter(itemInfoWithPrice);
  var result = shoppingDetails + shoppingSummary;
  console.log(result);
}

function parseBarcode(itemBarcodes) {
  var resultDict = {}, result = [];
  resultDict = itemBarcodes.reduce((prev, barcode)=> {
    var barCodeAndCount = barcode.split("-"), count = parseFloat(barCodeAndCount[1]) || 1;
    prev[barCodeAndCount[0]] = (prev[barCodeAndCount[0]] + count) || count;
    return prev;
  }, {});
  Object.keys(resultDict).forEach(key=> {
    result.push({
      "barcode": key,
      "amount": parseFloat(resultDict[[key]])
    });
  });
  return result;
}

function parseBarcode1(itemBarcodes) {
  var resultDict = {}, result = [];
  resultDict = itemBarcodes.reduce((prev, cur) => {
    var barCodeAndCount = cur.split("-");
    cur = prev;
    cur[barCodeAndCount[0]] = prev[barCodeAndCount[0]] || 1;
    cur[barCodeAndCount[0]] += parseFloat(barCodeAndCount[1]);
    return cur;
  }, {});
  Object.keys(resultDict).forEach(key=> {
    result.push({
      "barcode": key,
      "amount": parseFloat(resultDict[[key]])
    });
  });
  return result;
}

function getItemInfoByBarcode(countedBarcodes) {
  var result = [];
  var allItemInfo = loadAllItems();
  Object.assign(countedBarcodes).forEach((barcodeAndCount)=> {
    var targetItem = allItemInfo.find((item)=> {
      return item.barcode === barcodeAndCount.barcode;
    });
    targetItem["amount"] = barcodeAndCount.amount;
    result.push(targetItem);
  });
  return result;
}

function calcItemPrice(countedItemInfo) {
  var allPromotionsInfo = loadPromotions();
  var result = [];
  Object.assign(countedItemInfo).forEach((itemInfo)=> {
    var itemResult = itemInfo;
    itemResult["totalPrice"] = itemInfo.price * itemInfo.amount;
    var satisfiedPromotion = allPromotionsInfo.filter((promotion)=> {
      return promotion.barcodes.indexOf(itemInfo.barcode) !== -1;
    });
    if (satisfiedPromotion.length > 0 && satisfiedPromotion[0].type === "BUY_TWO_GET_ONE_FREE" && itemInfo.amount >= 2) {
      itemResult["promotionalPrice"] = itemResult["totalPrice"] - itemResult.price;
    }
    result.push(itemResult);
  });
  return result;
}

function detailsFormatter(itemInfoWithPrice) {
  var result = "***<没钱赚商店>收据***\n";
  itemInfoWithPrice.forEach(item=> {
    result += `名称：${item.name}，数量：${item.amount}${item.unit}，单价：${item.price.toFixed(2)}(元)，小计：${(item.promotionalPrice || item.totalPrice).toFixed(2)}(元)\n`;
  });
  return result;
}

function summaryFormatter(itemInfoWithPrice) {
  var result = "----------------------\n";
  var totalPrice = 0, savePrice = 0;
  itemInfoWithPrice.forEach(item=> {
    totalPrice += item.promotionalPrice || item.totalPrice;
    savePrice += item.promotionalPrice ? item.totalPrice - item.promotionalPrice : 0;
  });

  result += `总计：${totalPrice.toFixed(2)}(元)\n`;
  result += `节省：${savePrice.toFixed(2)}(元)\n`;
  result += "**********************";
  return result;
}
