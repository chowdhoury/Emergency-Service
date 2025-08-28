# Emergency-Service
## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
* getElementById-find only one element from document by it's unique ID. Return only a single element.

Example: ```document.getElementById('header');```

* getElementsByClassName-find elements from document with class. Return a array like object.

Example: ```document.getElementByClassName('section');```

* querySelector-find the first element from document matched with the selector.Return only a single element.

Example: ```document.querySelector(".section");```

* querySelectorAll-find all the elements from document with matched with the selector. Return a array like object.

Example: ```document.querySelectorAll(".section");```

## 2. How do you create and insert a new element into the DOM?
* Create new element document.createElement("tag")
* Add Text or Html
* Insert into the DOM

Example: 
```
const newItem = document.createElement("li");
newItem.textContent = "New Task";
document.getElementById("taskList").appendChild(newItem);
```

## 3. What is Event Bubbling and how does it work?
* When a child element is clicked it bubbles us until it reaches the root.

Order: Child > Parent > GrandParent > Document
## 4. What is Event Delegation in JavaScript?
Attaching a single event listener to a parent element to handle events on its child elements.
### 4.1 Why is it useful?
* Better Perfomance.

* Dynamically added elements
## 5. What is the difference between preventDefault() and stopPropagation() methods?
* ```preventDefault()``` -Stops the default browser behavior.

Example: Prevent a form from submitting or a link from navigating.

* ```stopPropagation()``` -Stops the event from bubbling to parent elements.