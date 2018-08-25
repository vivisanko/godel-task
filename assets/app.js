"use strict";

function task() {
    
    const boxSize = 7;
    const stepSize = 1;
    const itemsCount = boxSize**2;
    const box = document.getElementById('box');
    const person = document.getElementById('person');
    const start = 2;
    const setupKeys = 
    {ArrowRight: +stepSize,
     ArrowLeft:-stepSize,
     ArrowDown: +boxSize,
     ArrowUp: -boxSize,
    }

    let current = start;
    let lastStep = "ArrowDown";
    let currentStep = '';
    let rotate = 0;
 
  
    function determineBoxSizes(){
    let wrapper = document.getElementsByClassName("wrapper")[0];
    let html = document.getElementsByTagName("html")[0];
    
    let width = wrapper.clientWidth;
    let height = wrapper.clientHeight;
    let units = (Math.min(width,height)===height)? "vh":"vw";
       html.style.setProperty(`--area-size`, `80${units}`);
       html.style.setProperty(`--cell-size`, `${80/boxSize}${units}`);
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

    function rotatePerson(){
     console.log('поворачиваемся');
     
        let angleOfRotation = () => {
            if(lastStep === currentStep){
                return 0;
            }
            if(Math.abs(setupKeys[lastStep]) === Math.abs(setupKeys[currentStep])) {
                return 180
            } 
            let arr= ["ArrowRight","ArrowDown","ArrowLeft","ArrowUp","ArrowRight"];
            let prevInd = arr.findIndex((el,index) => el === lastStep);
            console.log('часовая стрелка',prevInd);
            const isClockwise = arr[prevInd+1] === currentStep;
            console.log('isClockwise',isClockwise);
            
            return isClockwise ? 90 : -90;
        }
        console.log('angleOfRotation',angleOfRotation());       
        rotate+=angleOfRotation();
        person.style.transform = `rotate(${rotate}deg)`;
        lastStep = currentStep;
        
    }

    

    function startMove(newCurrent){
     console.log('переместиться');
     current = newCurrent;
     findPositionMutableEl(newCurrent, person);

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
       
        if(Object.keys(setupKeys).includes(event.key)){
         let step = setupKeys[event.key];
         currentStep = event.key;
         checkDirection(step);
        }
    }

    function findPositionMutableEl(elemId, mutable){
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
    findPositionMutableEl(start, person);
}

task();
   



