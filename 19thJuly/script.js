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
<<<<<<< HEAD
  let veggies = []
  let sorted;
  
  for(let i=0; i<string.length; i++){
    sorted= string.split(',')
  }
  console.log(sorted)
}

countVegetables("mushroom chopsticks chopsticks turnip mushroom carrot mushroom cabbage mushroom carrot tofu pepper cabbage potato cucumber  mushroom mushroom mushroom potato turnip chopsticks cabbage celery celery turnip pepper chopsticks potato potato onion cabbage cucumber
onion pepper onion cabbage potato tofu carrot cabbage cabbage turnip mushroom cabbage cabbage cucumber cabbage chopsticks turnip pepper
onion pepper onion mushroom turnip carrot carrot tofu onion tofu chopsticks chopsticks chopsticks mushroom cucumber chopsticks carrot
potato cabbage cabbage carrot mushroom chopsticks mushroom celery turnip onion carrot turnip cucumber carrot potato mushroom turnip 
mushroom cabbage tofu turnip turnip turnip mushroom tofu potato pepper turnip potato turnip celery carrot turnip");
=======
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


//7kyu - Minimum Perimeter of a Rectangle

// DESCRIPTION:
// A rectangle is can be defined by two factors: height and width.

// Its area is defined as the multiplication of the two: height * width.

// Its perimeter is the sum of its four edges: height + height + width + width.

// It is possible to create rectangles of the same area but different perimeters. 
//For example, given an area of 45, the possible heights, widths and resultant perimeters would be:

// (1, 45) = 92

// (9, 5) = 28

// (15, 3) = 36

// Note that (6, 7.5) has an area of 45 too, but is discarded in this kata because its width is non integral.

// The task is to write a function that, given an area as a positive integer,
// returns the smallest perimeter possible of a rectangle with integral side lengths.

// Input range:
// 1 <= area <= 5 x 10 ^ 10

function minimumPerimeter(area) {
  let width = Math.floor(Math.sqrt(area));

  for(let i = width; i>=1; i--){
    if(area % i === 0){
      return console.log((i+area/i)*2);
    }
  }
}

minimumPerimeter(45) ;



//7kyu-Reverse list

//Write reverseList function that simply reverses lists.

function reverseList(arr) {
  return console.log(arr.reverse());
}

reverseList([1,2,3,4,5]);


//7kyu - Sum of odd numbers

// DESCRIPTION:
// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

function rowSumOddNumbers(n) {
 return console.log(Math.pow(n,3));
}

rowSumOddNumbers(42);
>>>>>>> aa5cf8a912ea9e5008bc16385b06de9f691e3094
