var modName = "myModule";
let id = 1;
const PI = 3.14;

function sayhi(name) {
    return "Hi, " + name;
}

//預設主要匯出
//export default function sayhello(name) {
//    return "Hello, " + name;
//}
function sayhello(name) {
    return "Hello, " + name;
}



class Employee {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    printInfo() {
        console.log(this.id + " , " + this.name);
    }
}

export { modName, id, PI, sayhi as greeting, sayhello as default, Employee };
