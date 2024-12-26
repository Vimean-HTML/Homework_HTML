    // Create an "li" node:
    const node = document.createElement("li");
    
    // Create a text node:
    const textnode = document.createTextNode('go to market');
    
    // Append the text node to the "li" node:
    node.appendChild(textnode);
    
    // Append the "li" node to the list:
    document.getElementById("todo").appendChild(node);






function myFunction() {
    const list = document.getElementById("todo");
    if (list.hasChildNodes()) {
        list.removeChild(list.children[0]);
    }
      

}


    

