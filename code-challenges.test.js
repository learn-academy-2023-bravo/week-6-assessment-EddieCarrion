// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

describe ("capital", () => {
  it ("takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () => {
      expect(capital(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
     
      
      
      
  })
})

// Good failure
//   // Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.162 s

const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

'Ford Prefect is a a hitchhiker.',
  'Zaphod Beeblebrox is a president of the galaxy.',
  'Arthur Dent is a a radio employee.'

// b) Create the function that makes the test pass.
// Process
// Create a function called "capital" that takes in an object of arrays
// Use the .map method to loop through the objects 
// Then take the name of each person and split it into an array of characters
// Then capitalize the first letter of the word using the .uppercase method
// The join the remaining letters to join the capitalized letter to form our new words
// Use string interpolation to return the desired statement

const capital= (people) => {
  people.map(person => {
    const name = person.name.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    const occupation = person.occupation + "."
    return `${name} is a ${occupation}`;
  })
}

// console.log (capital(people))

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe ("remainder", () => {
    it ("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
        expect(remainder(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
        expect(remainder(hodgepodge2)).toEqual([ 2, 1, -1 ])
        
        
    })
  })

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

// b) Create the function that makes the test pass.
// Create a function called "remainder" that takes in a array of mixed data as a parameter
// create a variable called "numbers" and use the .filter method to filter out integers only
// create another variable called "remainders" and use the .map method to iterate through each number in the array and divide it by 3
// Return the remainders

const remainder = (arr) => {
  const numbers = arr.filter(element=>typeof element==="number")
  const remainders = numbers.map(number=>number%3)
  return remainders
}

// Test Passed



// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe ("cubed", () => {
  it ("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
      expect(cubed(cubeAndSum1)).toEqual(99)
      expect(cubed(cubeAndSum2)).toEqual(1125)
      
      
      
  })
})

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

// b) Create the function that makes the test pass.

// Create a function called "cubed" that takes in an array of numbers as a parameter
// Initialize the sum at zero so the first index is added to something
// create a for loop that will cube each number in the array and add them together
// Return the sum

const cubed = (array) =>{
  sum = 0
  for (let i=0; i<array.length; i++){
    sum += Math.pow(array[i],3)
  } 
  return sum
}

//test passed
