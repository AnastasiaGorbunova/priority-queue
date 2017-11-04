const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root=null;
		this.parentNodes=[];
		this.length=0;
	}

	push(data, priority) {
		let node = new Node(data, priority);
		this.insertNode(node);
		this.shiftNodeUp(node);
	}

	pop() {
		if(!this.isEmpty){

		}
	}

	detachRoot() {
		
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		return this.length;
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
		if(this.root===null){

		}
	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
