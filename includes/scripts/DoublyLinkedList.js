function Node(data) {
    this.data = data;
    this.previous = null;
    this.next = null;
    
}
function DoublyList(func) {
    this._length = 0;
    this.head = null;
    this.tail = null;
    this.func = func();
}
function compare(a, b) {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
}
DoublyList.prototype.addLast = function(value) {
        var node = new Node(value);

        if (this._length) {
            this.tail.next = node;
            node.previous = this.tail;
            this.tail = node;
        } else {
            this.head = node;
            this.tail = node;
        }

        this._length++;

        return node;
    
};
DoublyList.prototype.addFirst = function(value) {
    var node = new Node(value);

    if (this._length) {
        this.head.previous = node;
        node.next = this.head;
        this.head = node;
    } else {
        this.head = node;
        this.tail = node;
    }

    this._length++;

    return node;
};
DoublyList.prototype.insertBetweenTwoElems = function(value1, value2, newElem) {
    var newNode = new Node(newElem);
    var curr = this.head;
    while(curr !== null){
        if(curr.data === value1){
            newNode.next = curr.next;
            newNode.previous = curr;
            curr.next = newNode;
            curr = newNode.next;
            curr.previous = newNode;       
        }else{
            curr = curr.next;
        }
    }
   
    this._length++;
};  
DoublyList.prototype.lengthList = function() {
    return this._length;
};
DoublyList.prototype.empty = function() {
    if (this._length === 0){
        return true;
    }
    else{
        return false;
    }
};


var test = new Node(50);
var list = new DoublyList(compare);

/*list.addFirst(1240);
list.addFirst(440);
list.addLast(132);
list.insertBetweenTwoElems(1240,132,345);
list.insertBetweenTwoElems(345,132,480);*/
console.log(test);
console.log(list);