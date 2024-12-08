function QueueObj() {

    let memory = [];

    this.add = function (num) {
        memory.push(num);
        return memory;
    }

    this.getFirst = function () {
        if (memory.length !== 0) {
            const firstEl = memory[0];
            memory.splice(0,1);
            return firstEl;
        }
        else {
            return null;
        }
    }

    this.getLast = function () {
        if (memory.length !== 0) {
            const lastEl = memory[memory.length - 1];
            memory.pop();
            return lastEl;
        }
        else {
            return null;
        }
    }
}

const queue = new QueueObj();
console.log(queue.add(12));
console.log(queue.add(14));
console.log(queue.getFirst());
console.log(queue.getLast());
console.log(queue.getLast());
