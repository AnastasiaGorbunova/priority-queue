const MaxHeap = require('./max-heap.js');


class PriorityQueue {
	constructor(maxSize) {
		this.maxSize=maxSize||30;
		this.heap=new MaxHeap();
	}

	push(data, priority) {
		this.heap.push(data, priority);
		if(this.size()==this.maxSize()){
			throw new Error();
		}	
	}

	shift() {
		if(this.isEmpty()){
			throw new Error();
		}
		else {
			return this.heap.pop();
		}
	}

	size() {
		return this.heap.size();
	}

	isEmpty() {
		if(this.heap.size()===0){
		return true;
	}
	else {
		return false;
	}
}
}
module.exports = PriorityQueue;