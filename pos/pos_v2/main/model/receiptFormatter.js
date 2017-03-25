'use strict';

class ReceiptFormatter {
  constructor(itemInfoWithPrice) {
    this.itemInfoWithPrice = itemInfoWithPrice;
  }

  getCurrentDatetime() {
    const dateDigitToString = num => (num < 10 ? `0${num}` : num);
    const currentDate = new Date(),
      year = dateDigitToString(currentDate.getFullYear()),
      month = dateDigitToString(currentDate.getMonth() + 1),
      date = dateDigitToString(currentDate.getDate()),
      hour = dateDigitToString(currentDate.getHours()),
      minute = dateDigitToString(currentDate.getMinutes()),
      second = dateDigitToString(currentDate.getSeconds());
    return `${year}年${month}月${date}日 ${hour}:${minute}:${second}`;
  }

  detailsFormatter() {
    var result = "----------------------\n";
    this.itemInfoWithPrice.forEach(item=> {
      result += `名称：${item.name}，数量：${item.amount}${item.unit}，单价：${item.price.toFixed(2)}(元)，小计：${(item.promotionalPrice || item.totalPrice).toFixed(2)}(元)\n`;
    });
    return result;
  }

  summaryFormatter() {
    var result = "----------------------\n";
    var totalPrice = 0, savePrice = 0;
    this.itemInfoWithPrice.forEach(item=> {
      totalPrice += item.promotionalPrice || item.totalPrice;
      savePrice += item.promotionalPrice ? item.totalPrice - item.promotionalPrice : 0;
    });

    result += `总计：${totalPrice.toFixed(2)}(元)\n`;
    result += `节省：${savePrice.toFixed(2)}(元)\n`;
    result += "**********************";
    return result;
  }

  datetimeFormatter() {
    return "打印时间：" + this.getCurrentDatetime() + "\n";
  }

  getFormattedReceipt() {
    var result = "***<没钱赚商店>收据***\n";
    result += this.datetimeFormatter();
    return result + this.detailsFormatter() + this.summaryFormatter();
  }
}

