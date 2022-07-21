//8kyu - Removing Elements

// DESCRIPTION:
// Take an array and remove every second element from the array. Always keep the first element and start removing with..
//  the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!



function removeEveryOther(arr){
    let filtered = arr.filter((item, i) => i % 2 === 0);
    return console.log(filtered);
    }
  

  removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]);

  //7kyu - Help Suzuki count vegetables

//   Help Suzuki count his vegetables....

// Suzuki is the master monk of his monastery so it is up to him to ensure the kitchen is operating at full capacity to ..
//feed his students and the villagers that come for lunch on a daily basis.

// This week there was a problem with his deliveries and all the vegetables became mixed up.
// There are two important aspects of cooking in his kitchen, it must be done in harmony and nothing can be wasted. 
//Since the monks are a record keeping people the first order of business is to sort the mixed up vegetables and then..
// count them to ensure there is enough to feed all the students and villagers.

// You will be given a string with the following vegetables:

// "cabbage", "carrot", "celery", "cucumber", "mushroom", "onion", "pepper", "potato", "tofu", "turnip"
// Return a list of tuples with the count of each vegetable in descending order. If there are any non vegetables mixed in 
//discard them. If the count of two vegetables is the same sort in reverse alphabetical order (Z->A).

// (119, "pepper"),
// (114, "carrot"),
// (113, "turnip"),
// (102, "onion"),
// (101, "tofu"),
// (100, "cabbage"),
// (93, "mushroom"),
// (90, "cucumber"),
// (88, "potato"),
// (80, "celery")

function countVegetables(string){
  let array = string.split(' ');
  console.log(array);

  let veggiemal ={
    cabbage: 0,
    carrot: 0,
    celery: 0,
    cucumber: 0,
    mushroom: 0,
    onion: 0,
    pepper: 0,
    potato: 0,
    tofu: 0,
    turnip: 0
  };

  for(let i=0; i<array.length; i++){
    if(array[i] === 'cabbage'){
      veggiemal.cabbage++;
    } else if(array[i] === 'carrot'){
      veggiemal.carrot++;
    } else if(array[i] === 'celery'){
      veggiemal.celery++;
    } else if(array[i] === 'cucumber'){
      veggiemal.cucumber++;
    } else if(array[i] === 'mushroom'){
      veggiemal.mushroom++;
    } else if(array[i] === 'onion'){
      veggiemal.onion++;
    } else if(array[i] === 'pepper'){
      veggiemal.pepper++;
    } else if(array[i] === 'potato'){
      veggiemal.potato++;
    } else if(array[i] === 'tofu'){
      veggiemal.tofu++;
    } else if(array[i] === 'turnip'){
      veggiemal.turnip++;
    }
  }

  let veggiemalArray = [[veggiemal.cabbage, 'cabbage'], [veggiemal.carrot, 'carrot'], [veggiemal.celery, 'celery'], [veggiemal.cucumber, 'cucumber'], [veggiemal.mushroom, 'mushroom'], [veggiemal.onion, 'onion'], [veggiemal.pepper, 'pepper'], [veggiemal.potato, 'potato'], [veggiemal.tofu, 'tofu'], [veggiemal.turnip, 'turnip']];
  console.log(veggiemalArray);
  let emptyBasket = veggiemalArray.filter((veggies) => veggies[0] > 0);

  let sortVeggies = emptyBasket.sort((a,b) => a[1] - b[1]).reverse();
  console.log(sortVeggies);
  return sortVeggies.sort((a,b) => b[0] - a[0]);
}

countVegetables("cabbage carrot celery cucumber cabbage mushroom onion pepper potato tofu turnip");