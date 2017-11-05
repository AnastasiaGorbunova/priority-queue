const MaxHeap = require('./max-heap.js');


class PriorityQueue {
	constructor(maxSize) {
		if(maxSize!==undefined){
			this.maxSize=30;
		}
		else {
			this.maxSize=maxSize;
		}
		this.heap=new MaxHeap();
	}

	push(data, priority) {
		if(this.size()==this.maxSize()){
			throw new Error();
		}
		else {
			this.heap.push(data, priority);
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