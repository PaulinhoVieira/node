import BinarySearchTree from "./BinarySearchTree.js"

class AVL extends BinarySearchTree {


  calcAltura(node) {
    if (node.right === null && node.left === null) {
      return 0;
    }
    let nodes = [node];
    let altura = 0;
    while (true) {
      let newNodes = [];
      for (let no of nodes) {
        if (no.left !== null)
          newNodes.push(no.left);
        if (no.right !== null)
          newNodes.push(no.right);
      }
      nodes = newNodes;
      altura++;
      if (nodes.length === 0)
        break;
    }
    return altura > 0 ? altura - 1 : 0;
  }
  
  getBalanceFactor(node){
    return this.calcAltura(node.left) - this.calcAltura(node.right);
  }
  
  balance

}

const arvore = new AVL();
arvore.insert(30);
arvore.insert(20);
arvore.insert(40);
arvore.insert(5);
arvore.insert(2);
arvore.insert(8);
arvore.insert(25);
arvore.insert(32);
arvore.insert(45);
arvore.insert(42);
arvore.printNodeByLevel();
console.log(arvore.calcAltura(arvore.root));
console.log(arvore.calcAltura(arvore.searchNode(42)));