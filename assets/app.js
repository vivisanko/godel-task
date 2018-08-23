"use strict";

function task() {
    const boxSize = 7;
    const start = 2;
    let current = 2;


  function  createBox(size) {
      let itemsCount = Math.pow(size, 2);
      console.log('itemsCount',itemsCount);
      let box = document.getElementById('box');
      console.log('box',box);

      for (let i = 0; i < itemsCount; i++) {
      let item = document.createElement('div');
      item.className = "item";
      item.id = i;
      box.appendChild(item);
      box.className="itemBox"
      
    
    };
    };
    createBox(7);
    addEventListener("keydown", function(event) {
        console.log('event',event);
        
      });
}

task();
   



