jQuery Sticky Float Plugin
===================

Create sticky elements that always visible as you scroll

## How It Works
1. Get the target element's offset (`offset.left` and `offset.top`), put the the element's margin into account
2. As the document scrolls, when `window.scrollY` >= `offset.top`, make the element sticky by setting it to `position: fixed`, `top: 0`, `left: [offset.left]px`
3. When resizing the window, un-sticky the element to recalculate `offset.left`, then make it sticky again

## Usage
* Include jQuery (v1.2.6 or later) and jquery.sticky-float.js
* Call Sticky Float
```javascript
$(function () {
    $("#side-nav").stickyFloat();
});
```
* Don't use inline CSS on sticky elements
