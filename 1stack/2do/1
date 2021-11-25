function Stack() {
    this.dataStore = [];      
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
    }
    function push(element) {
    this.dataStore[this.top++] = element;
    }
    function peek() {
    return this.dataStore[this.top-1];
    }
    function pop() {
    return this.dataStore[--this.top];
    }
    function clear() {
    this.top = 0;
    }
    function length() {
    return this.top;
}
function print(element){
    console.log(element);
}

var a = new Stack();
a.push("Hugo");
a.push("Alejandro");
a.push("Kike");
print("length: " + a.length());
print(a.peek());
var popped = a.pop();
print("The popped element is: " + popped);
print(a.peek());
a.push("Raúl");
print(a.peek());
a.clear();
print("length: " + a.length());
print(a.peek());
a.push("Andrés");
print(a.peek());
