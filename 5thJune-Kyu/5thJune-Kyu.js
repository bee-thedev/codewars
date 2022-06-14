// Abbreviate a Two Word Name

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F


function abbrevName(name){
    let arr = name.split(' ');
    console.log(arr)
    return console.log((arr[0][0] + '.' + arr[1][0]).toUpperCase());
}


abbrevName("beenysh Saeed");


// 8kyu -- A Needle in the Haystack


// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
// Note: In COBOL, it should return "found the needle at position 6"

function findNeedle(haystack) {
    return `found the needle at position ${haystack.indexOf('needle')}`;
}

findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]);


//7kyu Challenge - Training JS #40: Regular Expression--"|", "[]" and "()"

// Task
// This time you need to write a regular expression that matches all URL contained in the string.

// The rules:

// URL start with http:// or https://
// URL end with .com or .net
// The middle part of URL can use letters, numbers and dots
// Need to ignore case, and a string may contain multiple URLs
// Your regular expression name should be regex and your result should be a string array.


// var regex= /https?:\/\/[\w.]+\.(com|net)/gi;

//8kyu--

// Suzuki is a monk who climbs a large staircase to the monastery as part of a ritual. Some days he climbs more stairs than others depending on the number of students he must train in the morning. He is curious how many stairs might be climbed over the next 20 years and has spent a year marking down his daily progress.

// The sum of all the stairs logged in a year will be used for estimating the number he might climb in 20.

// 20_year_estimate = one_year_total * 20

// You will receive the following data structure representing the stairs Suzuki logged in a year. You will have all data for the entire year so regardless of how it is logged the problem should be simple to solve.

// stairs = [sunday,monday,tuesday,wednesday,thursday,friday,saturday]
// Make sure your solution takes into account all of the nesting within the stairs array.

// Each weekday in the stairs array is an array.

// sunday = [6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274, 7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063, 5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381, 5936, 8496, 6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032, 9871, 5990, 6309, 7825]
// Your function should return the 20 year estimate of the stairs climbed using the formula above.

function stairsIn20(s){
    //your code here
  }

  stairsIn20()