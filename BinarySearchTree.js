import Node from "./Node.js";

class BinarySearchTree {
    
    constructor(){
        this.root = null;
    }

    insert(value){
        if (this.root === null){
            this.root = new Node(value);
        }else{
            let node = this.root;
            while(true){
                if (value < node.value){
                    if (node.left === null){
                        node.left = new Node(value);
                        break;
                    }else{
                        node = node.left;
                    }
                }else{
                    if (node.right === null){
                        node.right = new Node(value);
                        break;
                    }
                    else{
                        node = node.right;
                    }
                }
            }
        }
    }

    insertRecursive(value){
        if (this.root === null){
            this.root = new Node(value);
        }else{
            this.insertNode(this.root, value);
        }
    }

    insertNode(node, value){
        if (value < node.value){
            if (node.left === null){
                node.left = new Node(value);
            }else{
                this.insertNode(node.left, value);
            }
        }else{
            if (node.right === null){
                node.right = new Node(value);
            }else{
                this.insertNode(node.right, value);
            }
        }
    }

    printNodeByLevel(){
        let node = this.root;
        let nodes = [node]
        while(nodes != null){
            let newNodes = []
            let value = ""; 
            for(let element of nodes){
                value = value + element.value + " ";
                if(element.left !== null)
                    newNodes.push(element.left);
                if(element.right !== null)
                    newNodes.push(element.right);  
            }
            console.log(value);
            nodes = newNodes;
            console.log('=====================');
            if(nodes.length === 0){
                break;
            }
        }
        
    }
    maxNode(){
        if (this.root === null){
            this.root = new Node(value);
        }else{
            let node = this.root;
            
        }    
    }

    //Insert(value)
    //search(value)
    //inOrder()
    //preOrder()
    //postOrder()
    //min()
    //max()
    //remove()
}

let arvore = new BinarySearchTree();
arvore.insert(30);
arvore.insert(20);
arvore.insert(40);
arvore.insert(5);
arvore.insert(2);
arvore.insert(8);
arvore.insert(25);
arvore.printNodeByLevel();


