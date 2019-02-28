function Node(value) {
	this.value = value;
	this.left  = null;
	this.right = null;
}

function Tree() {
	this.root = null;
}

// 生成二叉树
Tree.prototype.insertNode = function(value) {
	if(!this.root) {
		this.root = new Node(value);
		return;
	}
	var root = current = this.root;

	while(current) {
		if(current.value > value) {
			if(!current.left) {
				current.left = new Node(value);
				break;
			} else {
				current = current.left;
			}
		} else {
			if(!current.right) {
				current.right = new Node(value);
				break;
			} else {
				current = current.right;
			}
		}
	}
};

// 前序遍历-递归实现
Tree.prototype.preOrder = function(node) {
	var root = node || this.root;

	console.log(root.value);
	if(root.left) {
		this.preOrder(root.left);
	}
	if(root.right) {
		this.preOrder(root.right);
	}
};

// 中序遍历-递归实现
Tree.prototype.midOrder = function(node) {
	var root = node || this.root;

	if(root.left) {
		this.midOrder(root.left);
	}
	console.log(root.value);
	if(root.right) {
		this.midOrder(root.right);
	}
};

// 后序遍历-递归实现
Tree.prototype.afterOrder = function(node) {
	var root = node || this.root;

	if(root.left) {
		this.afterOrder(root.left);
	}
	if(root.right) {
		this.afterOrder(root.right);
	}
	console.log(root.value);
};

// 前序遍历-栈实现
Tree.prototype.preOrderNoLoop = function() {
	var root = this.root;
	var list = [];
	var current = null;

	list.push(root);
	while(list.length) {
		current = list.pop();
		console.log(current.value);
		if(current.right) {
			list.push(current.right);
		}
		if(current.left) {
			list.push(current.left);
		}
	}
};

// 中序遍历-栈实现
Tree.prototype.midOrderNoLoop = function() {
	var root = this.root;
	var list = [];
	var current = root;

	while(current != null || list.length) {
		while(current != null) {
			list.push(current);
			current = current.left;
		}
		current = list.pop();
		console.log(current.value);
		current = current.right;
	}
};

// 后序遍历-栈实现
Tree.prototype.afterOrderNoLoop = function() {
	var list = [];
	var current = this.root;
	var last = null;

	while(current != null || list.length) {
		while(current != null) {
			list.push(current);
			current = current.left;
		}

		current = list[list.length -1];
		if(current.right == null || current.right == last) {
			console.log(current.value);
			list.pop();
			last = current;
			current = null;
		} else {
			current = current.right;
		}
	}
}

// 广度优先遍历
Tree.prototype.breadSearch = function() {
	var root = this.root;
	var queue = [];
	var current = null;

	queue.push(root);
	while(queue.length) {
		current = queue.shift();
		console.log(current.value);
		if(current.left != null) {
			queue.push(current.left);
		}
		if(current.right != null) {
			queue.push(current.right);
		}
	}
};

var tree = new Tree();

tree.insertNode(10);
tree.insertNode(5);
tree.insertNode(15);
tree.insertNode(2);
tree.insertNode(8);
tree.insertNode(12);
tree.insertNode(18);
tree.insertNode(1);
tree.insertNode(4);
tree.insertNode(6);
tree.insertNode(9);
tree.insertNode(11);
tree.insertNode(13);
tree.insertNode(16);
tree.insertNode(20);

// tree.preOrder();
// tree.midOrder();
// tree.afterOrder();
// tree.preOrderNoLoop();
// tree.midOrderNoLoop();
// tree.afterOrderNoLoop();
// tree.breadSearch();
