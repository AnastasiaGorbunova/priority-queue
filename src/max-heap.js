const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root=null;
		this.parentNodes=[];
		this.length=0;
	}

	push(data, priority) {
		
	}

	pop() {
		
	}

	detachRoot() {
		
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		
	}

	isEmpty() {
		if(this.length===null){
			return true;
		}
		else {
			return false;
		}
	}

	clear() {
		this.root=null;
		this.parentNodes=[];
		this.length=0;
	}

	insertNode(node) {
		
	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
