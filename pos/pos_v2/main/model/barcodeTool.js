'use strict';

class BarcodeTool {
  static count(barcodes) {
    var resultDict = {}, result = [];

    resultDict = barcodes.reduce((prev, barcode)=> {
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

  static getItemInfo(countedBarcodes) {
    var result = [];
    var allItemInfo = Object.assign(Item.all());
    countedBarcodes.forEach((barcodeAndCount)=> {
      var targetItem = allItemInfo.find((item)=> {
        return item.barcode === barcodeAndCount.barcode;
      });
      targetItem["amount"] = barcodeAndCount.amount;
      result.push(targetItem);
    });
    return result;
  }
}

