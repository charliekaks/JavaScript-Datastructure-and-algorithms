
function depthFirstSearchPreOrder(){
    let data = [];
    traverse(this.root, data);
    return data
}
function traverse(node,values){
    values.push(node.value);
    if(node.left) traverse(node.left,values)
    if(node.right) traverse(node.right,values)
}