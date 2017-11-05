class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		if(this.left===null){
			this.left=node;
			node.parent=this;
		}
		else {
			if(this.right===null){
				this.right=node;
				node.parent=this;
			}
		}
	}

	removeChild(node) {
		if(this.left===node){
			this.left=null;
			node.parent=null;
		}
		else if (this.right===node){
			this.right=null;
			node.parent=null;
		}
		else {
			throw new Error();
		}
	}

	remove() {
		if(this.parent!==null){
			this.parent.removeChild(this);
		}
		return this;
	}

	swapWithParent() {
		if(this.parent!==null){
			if(this.parent.parent!==null){
				if(this.parent===this.parent.parent.left){
					this.parent.parent.left=this;
					}
					else{
						this.parent.parent.right=this;
					}
				}
				if(this.parent===this.parent.left){
					this.parent.left=this;
				}
				else {
					this.parent.right=this;
				}
			}
		}
	}


module.exports = Node;
