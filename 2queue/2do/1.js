function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
    }
    function enqueue(element) {
        this.dataStore.push(element);
    }
    function dequeue() {
        return this.dataStore.shift();
    }
    function front() {
        return this.dataStore[0];
    }
    function back() {
        return this.dataStore[this.dataStore.length-1];
    }
    function toString() {
        var retStr = "";
        for (var i = 0; i < this.dataStore.length; ++i) {
            retStr += this.dataStore[i] + "\n";
    }
        return retStr;
    }
    function empty() {
        if (this.dataStore.length == 0) {
            return true;
    }
        else {
            return false;
        }
    }

    function print(element){
        console.log(element);
    }

var a = new Queue();
a.enqueue("Raul");
a.enqueue("Hugo");
a.enqueue("Oscar");
print(a.toString());
a.dequeue();
print(a.toString());
print("Front of queue: " + a.front());
print("Back of queue: " + a.back());
