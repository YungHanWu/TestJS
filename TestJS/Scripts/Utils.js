/* 
 * Title : UCOM Utilities Script
 * Description: xxxxxxxxxxxxxx
 * Author: Jerry, John
 * Version: v0.2
 */
let Hello = () => alert("Hello!!");

let add = (x, y) => {
    //if (typeof x != "number" || typeof y != "number")
    //    throw "參數必須是數值!!";
    if (typeof x != "number" || typeof y != "number") {
        throw { name: "ArgumentError", message: "參數必須是數值!!", stack: "Utils.js" };
    }

    return x + y;
}

let sum = (name, ...scores) => {
    var total = 0;
    for (var score of scores) {
        total += score;
    }
    return name + " 的總分 = " + total;
}
