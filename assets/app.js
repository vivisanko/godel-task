"use strict";

function task() {
    
    const boxSize = 7;
    const stepSize = 1;
    const itemsCount = boxSize**2;
    const box = document.getElementById('box');

    const start = 2;
    let current = start;
    const person = document.getElementById('person');
  
  function determineBoxSizes(){
    let wrapper = document.getElementsByClassName("wrapper")[0];
    let html = document.getElementsByTagName("html")[0];
    console.log('html',html);
    
    let width = wrapper.clientWidth;
    let height = wrapper.clientHeight;
    let units = (Math.min(width,height)===height)? "vh":"vw";
       html.style.setProperty(`--area-size`, `80${units}`);
       html.style.setProperty(`--cell-size`, `${80/boxSize}${units}`);

    
    console.log('wrapper.clientWidth',width);
    console.log('wrapper.clientHeight',height);
    console.log('initialSize',units);
    // console.log('initialSize',initialSize);


    
  }

  function  createBox() {
      determineBoxSizes();
      for (let i = 0; i < itemsCount; i++) {
      let item = document.createElement('div');
      item.className = "item";
      item.id = i;
      box.appendChild(item);
      box.className="itemBox"};
    };

    function rotatePerson(step){
     console.log('поворачиваемся', step);
     if(step<0){
         person.style.transform = `rotate(${Math.abs(step)===1 ? 90 : 180}deg)`;
     } else {
        person.style.transform = `rotate(${Math.abs(step)===1 ? -90 : 0}deg)`;        
     }

    }
    function startMove(newCurrent){
     console.log('переместиться');
     current = newCurrent;
     findPosition(newCurrent, person);

    }


    function checkDirection(step){
    let sum = current + step;
        
    if(sum <0 || sum >itemsCount-1){
     console.log('мешает стена, не в интервале : ');
     rotatePerson(step);
     return
    } 

    if( Math.abs(step) === stepSize && Math.floor(current/boxSize) !== Math.floor(sum/boxSize)){
        console.log('мешает стена, другой ряд');
        rotatePerson(step);
        return
    } 

     startMove(sum);
     rotatePerson(step);
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

    function findPosition(elemId, mutable){
    let elem = document.getElementById(elemId);
    let position = elem.getBoundingClientRect();
    mutable.style.left = `${position.left}px`;
    mutable.style.top = `${position.top}px`;
    mutable.style.display = "flex";
    mutable.offsetTop;
    }

   
    createBox();
    
    addEventListener("keydown", (event)=>go(event));
    // person.addEventListener("transitionend", function () {
    //     console.log('переход закончен');
    // })
    findPosition(start, person);
}

task();
   



