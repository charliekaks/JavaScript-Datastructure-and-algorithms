
function depthFirstSearchPreOrder(){
    let data = [];
    traverse(root, data);
    return data
}
function traverse(node,values){
    values.push(node.value);
    if(node.left) traverse(node.left,values)
    if(node.right) traverse(node.right,values)
}

function depthFirstSearchPostOrder(){
    let data = [];
    function traverse(node){
        if(node.left) traverse(node.left,values)
        if(node.right) traverse(node.right,values)
        data.push(node.value);   
    }
    traverse(root)
    return data;
}