//利用栈结构的特点封装实现十进制转换为二进制的方法。

import Stack from '../Stack.js';

function dec2bin(dec) {
  // stack 存储 余数
  const stack = new Stack();

  while(dec > 0) {
    stack.push( dec % 2);
    dec = Math.floor(dec / 2); // 除数，除以2向下取整
  }

  // 打印结果
  let binaryString = '';
  while(!stack.isEmpty()){
    binaryString += stack.pop();
  }

  return binaryString;
}

// console.log(dec2bin(100));