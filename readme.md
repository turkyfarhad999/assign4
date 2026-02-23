1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
--->
getelementbyid returns node,specific node of that id.
getelementbyclassname returns all elements of class in htmlcollection
queryselector ekta selector er first element ta return kore
queryselectorall selector er sob return kore nodelist a 

2.How do you create and insert a new element into the DOM?
-->
document.createElement("x"), here x is the element i want to create
document.appendChild(x),here x is the element i want to add


3.What is Event Bubbling? And how does it work?
-->
when an event occurs it trigger the first element , then go to it's parents and grandparets. this term is caleed Event bubbling.
when an event occurs it first goes to it's node, and try to find from where the event occurs , to find that it traverse through dom tree, from child to parents to grandparents to root.

4.What is Event Delegation in JavaScript? Why is it useful?
-->
It is a method where a listener is used in parent node , so that child node can be accessed and modified through event.target option.
It is more memory efficient and can be used in dynamically added elements in parent Node

5.What is the difference between preventDefault() and stopPropagation() methods?
-->
preventdefault() stops browser's default action whereas stoppropagation stops event bubbling in a dom tree
