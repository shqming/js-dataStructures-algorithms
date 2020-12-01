import Queue from '../Queue.js'


function passGame(nameList, number) {
  
  let queue = new Queue();

  // 入队
  for(let i=0; i<nameList.length; i++) {
    queue.enqueue(nameList[i]);
  }

  while(queue.size() > 1) {

    for(let i=0; i<number; i++) {
      queue.enqueue(queue.dequeue());
    }
    let failMan = queue.dequeue();
    console.log(failMan+'在击鼓传花游戏中被淘汰。');
  }
  console.log('胜利者：'+queue.front());
}

// passGame(['John','Jack','Camila','Ingrid','Carl'] , 7);