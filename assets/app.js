"use strict";

function task() {
    
    const boxSize = 7;
    const stepSize = 1;
    const itemsCount = Math.pow(boxSize, 2);
    const start = 2;
    let current = 2;


  function  createBox() {
      let box = document.getElementById('box');
      console.log('box',box);

      for (let i = 0; i < itemsCount; i++) {
      let item = document.createElement('div');
      item.className = "item";
      item.id = i;
      box.appendChild(item);
      box.className="itemBox"};
    };

    function rotatePerson(step){
     console.log('поворачиваемся');
    }
    function startMove(newCurrent){
     console.log('переместиться');
     current = newCurrent;
    }


    function checkDirection(step){
    let sum = current + step;
        
    if(sum <0 || sum >itemsCount-1){
     console.log('мешает стена, не в интервале : ');
     rotatePerson();
     return
    } 

    if( Math.abs(step) === stepSize && Math.floor(current/boxSize) !== Math.floor(sum/boxSize)){
        console.log('мешает стена, другой ряд');
        rotatePerson();
        return
    } 

     startMove(sum);
    }
    

    function go(event){
        console.log('event',event);
        console.log('event.key',event.key);
        let setupKeys = 
        {ArrowRight: +stepSize,
         ArrowLeft:-stepSize,
         ArrowDown: +boxSize,
         ArrowUp: -boxSize,
        }
        if(Object.keys(setupKeys).includes(event.key)){
         let step = setupKeys[event.key];
         checkDirection(step);
         
        }

    }

    createBox();
    addEventListener("keydown", (event)=>go(event));
}

task();
   



