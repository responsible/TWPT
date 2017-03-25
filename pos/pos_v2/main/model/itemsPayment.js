"use strict";

class ItemPayment {
  calcItemPrice(countedItemInfo) {
    var allPromotionsInfo = Promotion.all();
    var result = [];
    Object.assign(countedItemInfo).forEach((itemInfo)=> {
      var itemResult = itemInfo;
      itemResult["totalPrice"] = itemInfo.price * itemInfo.amount;

      var satisfiedPromotion = allPromotionsInfo.find((promotion)=> {
        return promotion.barcodes.indexOf(itemInfo.barcode) !== -1;
      });

      if (satisfiedPromotion && satisfiedPromotion.type === "BUY_TWO_GET_ONE_FREE" && itemInfo.amount >= 2) {
        itemResult["promotionalPrice"] = itemResult["totalPrice"] - itemResult.price * Math.floor(itemInfo.amount / 3);
      }

      result.push(itemResult);
    });
    return result;
  }
}
