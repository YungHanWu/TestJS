/* 
 * Title : UCOM Utilities Script
 * Description: xxxxxxxxxxxxxx
 * Author: Jerry, John
 * Version: v0.3
 */
let Utils = {
    author: "John",
    version: "v0.3",
    modifyDate: "2021/11/11",
    Hello() {
        alert("Hello!!");
    }
};

Utils.add = (x, y) => {
    //if (typeof x != "number" || typeof y != "number")
    //    throw "參數必須是數值!!";
    if (typeof x != "number" || typeof y != "number") {
        throw { name: "ArgumentError", message: "參數必須是數值!!", stack: "Utils.js" };
    }

    return x + y;
}

Utils.sum = (name, ...scores) => {
    var total = 0;
    for (var score of scores) {
        total += score;
    }
    return name + " 的總分 = " + total;
}

Utils.dice = () => {

    var num1 = Math.floor(Math.random() * 6 + 1);
    var num2 = Math.floor(Math.random() * 6 + 1);
    var num3 = Math.floor(Math.random() * 6 + 1);
    var total = num1 + num2 + num3;

    var msg = "開 ";

    if (num1 == num2 && num2 == num3)
        msg = `${num1}, ${num2}, ${num3} 豹子通殺!!`;
    else {
        msg += `${total % 2 == 0 ? "雙 " : "單 "} ${num1}, ${num2}, ${num3} ${total}點 ${total >= 4 && total <= 10 ? "小" : "大"}`;
    }

    return [msg, num1, num2, num3];
}