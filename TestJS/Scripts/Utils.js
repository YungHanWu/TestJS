/* 
 * Title : UCOM Utilities Script
 * Description: xxxxxxxxxxxxxx
 * Author: Jerry, John
 * Version: v0.1
 */
function Hello() {
    alert("Hello!!");
}

function add(x, y) {
    //if (typeof x != "number" || typeof y != "number")
    //    throw "參數必須是數值!!";
    if (typeof x != "number" || typeof y != "number") {
        throw { name: "ArgumentError", message: "參數必須是數值!!", stack: "Utils.js" };
    }

    return x + y;
}