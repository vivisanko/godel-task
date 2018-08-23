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
   
// const terrain = [
//     {
//     x: 1,
//     y: 1,
//     // height: 2,
//     height: 6,

// },
// {
//     x: 2,
//     y: 1,
//     height: 5,
// },

// {
//     x: 3,
//     y: 1,
//     height: 4,
// },
// {
//     x: 1,
//     y: 2,
//     height: 3,

// },
// {
//     x: 2,
//     y: 2,
//     height: 4,


// },
// {
//     x: 3,
//     y: 2,
//     height: 3,
// },
// {
//     x: 1,
//     y: 3,
//     height: 0,
// },

// {
//     x: 2,
//     y: 3,
//     height: 1,
// },
// {
//     x: 3,
//     y: 3,
//     height: 2,
// },

//  ]

//  function findRoute(locality, start, end){
//     console.log('start',start);
//     console.log('end',end);
    
//     if(end.height > start.height) {
//         console.log('караван не пройдет, т.к. высота конечной точки выше высоты в начальной точке');
//         return []
//     }

    
//     // console.log('locality1',locality);
//     locality.sort((el1,el2)=>el1.y - el2.y);
//     // console.log('locality2',locality);
//     locality.sort((el1,el2)=>el1.y === el2.y && el1.x - el2.x);
//     // console.log('locality3',locality);
    
//     const rowStep = locality.length ** 0.5;
//     // console.log('rowStep',rowStep);
    
//     let queue = [];
//     let queueNumber = 0;
//     let allBestRoute = [];

//     queue.push([start]);
//     let route = queue[queueNumber];
//     console.log('route start',route);
    
    
//     function findAdmissiblePaths(route) {
//         console.log('route',route);
        
//     let ind = locality.findIndex((el,index) => el === route[route.length - 1]);
    
//     console.log('locality',locality);
    
//     console.log('locality[ind]',locality[ind]);
//     let steps = {};
//     console.log('ind',ind);



//     if(ind+1<locality.length && locality[ind].y === locality[ind +1].y
//         && locality[ind + 1]!==route[route.length - 2]
//         && route[route.length-1].height > locality[ind + 1].height) {
//     steps.right=locality[ind +1];
//     console.log('steps.right Yes',steps.right);
//     } else {
//     // stepRight = undefined;
//     console.log('right No');
//     }
//     if(ind-1 > -1 && locality[ind].y === locality[ind - 1].y
//         && locality[ind - 1]!== route[route.length - 2] 
//         && route[route.length-1].height > locality[ind - 1].height ) {
//         steps.left=locality[ind -1];
//         console.log('steps.left Yes',steps.left);
//             } else {
//             // stepLeft = undefined;
//         console.log('stepsleft No');
//             }
//     if(ind + rowStep < locality.length && locality[ind + rowStep] !==route[route.length - 2]
//         && route[route.length-1].height > locality[ind + rowStep].height) {
//         steps.down = locality[ind + rowStep];
//         console.log('steps.down Yes',steps.down);
//             } else {
//             // stepDown = undefined;
//         console.log('steps.down No');
//             }
//     if(ind - rowStep > -1 && locality[ind - rowStep] !== route[route.length - 2]
//         && route[route.length-1].height > locality[ind - rowStep].height) {
//         steps.up = locality[ind - rowStep];
//         console.log('steps.up Yes',steps.up);
//             } else {
//                 // stepUp = undefined;
//         console.log('steps.up No');
//             }
//         console.log('steps',steps);
        
//         return steps;
//     }
//     // findAdmissiblePaths(route, startInd);


//     function addOptionsToQueve (possibleWays, route){
//         if(Object.keys(possibleWays).length===0){
//             goToTheNext();
//             return
//         }

//     Object.keys(possibleWays).forEach(way => {
//         if(!route.includes(possibleWays[way])){
//             let novelWay = route.slice();
//             novelWay.push(possibleWays[way]);
//             if(possibleWays[way]===end){
//                 allBestRoute.push(novelWay);
//                 return
//             }
//             queue.push(novelWay);

//         }

//     })
//     console.log('queue',queue);
//     if(allBestRoute.length === 0){
//     goToTheNext();
//     } else {
//     return 
//     }


//        };
//     function goToTheNext(){
//         console.log('queue в goToTheNext',queue);
//         if(queue.length - 1 > queueNumber){
//         queueNumber+=1;
//         console.log('queueNumber',queueNumber);
        
//         route = queue[queueNumber];
//         let admissiblePaths = findAdmissiblePaths(route);
//         addOptionsToQueve(admissiblePaths, route);
//          } else{
//         console.log('очередь закончилась');
//         if(allBestRoute.length===0){
//             console.log('пути не найдены');
//         }
//         return;
//         }
//     }
    
    
//    let admissiblePaths = findAdmissiblePaths(route);
//    console.log('admissiblePaths',admissiblePaths);
//    addOptionsToQueve(admissiblePaths, route);
//    goToTheNext();  
//    console.log('allBestRoute',allBestRoute);
   
//     return allBestRoute;
// }
    
    
    


// let routes = findRoute(terrain.sort((a,b)=>a.height-b.height), terrain[8], terrain[0]);
// console.log('routes',routes);




// }

// task5();



