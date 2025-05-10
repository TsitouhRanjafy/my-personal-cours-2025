type TreeNode<T> = {
    value: T; // le T est un type générique
    left: TreeNode<T> | null;
    right: TreeNode<T> | null;
};

// si on utilise interface au lieu de type
/* -------------------------------------------

interface TreeNode<T> {
  value: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;
}
----------------------------------------------- */

// répresentation tree FIGURE N°1
const binaryTree: TreeNode<number> = {
    value: 8,
    left: {
        value: 3,
        left: {
            value: 1,
            left: null,
            right: null
        },
        right: {
            value: 6,
            left: {
                value: 4,
                left: null,
                right: null
            },
            right: {
                value: 7,
                left: null,
                right: null
            }
        }
    },
    right: {
        value: 10,
        left: null,
        right: {
            value: 14,
            left: null,
            right: {
                value: 13,
                left: null,
                right: null
            }
        }
    }
}

// répresentation linked list FIGUREN°2
type LinkedList<T> = {
    value: T;
    next: LinkedList<T> | null;
};

// si on utilise interface au lieu de type
/* -------------------------------------------

interface LinkedList<T> {
    value: T;
    next: LinkedList<T> | null;
}
    
----------------------------------------------- */



const linkedList: LinkedList<number> = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: null
        }
    }
}





