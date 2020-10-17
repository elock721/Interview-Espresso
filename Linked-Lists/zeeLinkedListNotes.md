Linked List Notes 

Object Oriented Programming 

Exp: A factory
    * Class produces objects 
    * In your class, design the object

Class will define properties (holds information about the object) and methods (allows interaction with the object)

Classes will also always have a constructor in JS (init in Python) -> run on creation

Linked List -> chain of nodes

A node can hold a piece of data (like a number) which is normally stored in the dot value property 

Pointer connects to next node in the list - pointers repped by .next property 

.next you can set to point to a new node 

First node is the head: head -> head.next -> head.next.next -> null

Typically how you use a pointer traversal in a linked list

let on = head;
while (on !== null) {
    console.log(on.val)
    on = on.next;
}





