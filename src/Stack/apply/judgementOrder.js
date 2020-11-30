// **判断合法的出栈顺序**

import Stack from '../Stack.js';

function judgementOrder(arr1 , arr2) {

  const stack = new Stack();

  while(arr1.length >= 0){
    if(arr1.length > 0) {
      stack.push(arr1.shift());
      if(stack.peek() == arr2[0]) {
        stack.pop();
        arr2.shift();

        while(!stack.isEmpty() && stack.peek() == arr2[0]){
          stack.pop();
          arr2.shift();
        }
      }else {
        continue;
      }
    }else {
      while(!stack.isEmpty()) {
        if(stack.peek() == arr2[0]) {
          stack.pop();
          arr2.shift();
        }else {
          return false
        }
      }
      return true;
    }
  }
  
}

console.log(judgementOrder([6,5,4,3,2,1] , [4,5,3,2,1,6]));