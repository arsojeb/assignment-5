
1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Ans:  Difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll** are:
        i. the purpose of getElementById is to get a element by its id..
        ii. the purpose of getElementsByClassName is to get elements by there class name.
        iii. the purpose of uerySelector / querySelectorAll is to Select elements using any CSS selector.

2. How do you **create and insert a new element into the DOM**?

Ans:  Steps to create and insert a new element :
        i. Create the element by using .createElement tag
        ii. Set its content or attributes
        iii. Insert it into the DOM using appendChild.

3. What is **Event Bubbling** and how does it work?

Ans:  Event Bubbling is a type of event propagation in the DOM where an event triggered on a specific element first runs on that element and then bubbles up through its parent elements in the DOM hierarchy, eventually reaching the document and window.

    How it works:
        i. When an event occurs on an element (e.g., a click on a button), the event handler for that element executes first.
        ii. After executing the target element’s handler, the event automatically propagates to its parent elements, executing any handlers attached to them.
        iii. This process continues up the DOM tree until it reaches the root.

4. What is **Event Delegation** in JavaScript? Why is it useful?

Ans:   Event Delegation is a technique in JavaScript where a single event listener is added to a parent element to handle events on its child elements instead of adding separate listeners to each child. It works because of event bubbling, where events triggered on child elements propagate up to the parent.

    Why it is useful:
        i. Reduces memory usage by attaching fewer event listeners.
        ii. Handles dynamic elements that are added to the DOM after the page loads.
        iii. Simplifies code and makes it easier to maintain.

5. What is the difference between **preventDefault() and stopPropagation()** methods?

Ans:    Difference between preventDefault() and stopPropagation() methods in JavaScript are :
            A. preventDefault():
                    i. Stops the default action of an HTML element from occurring.
                    ii. It does not stop event bubbling.
            
            B. stopPropagation()
                    i. Stops the event from bubbling up (or capturing down) the DOM tree.
                    ii. The default action still occurs unless preventDefault() is also used.
