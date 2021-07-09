
// //struct
// /*This is a function constructor that all initializations are stored in an array.*/

// function UserProfile(firstName, lastName, age){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age
// };

// var users = [
//     new UserProfile("Hunter", "Achieng", 34),
//     new UserProfile ("Wuanita", "Wangari", 23),
//     new UserProfile("Stacy", "Anyango", 25)
// ]
// console.log(users);
//  var name = users.map((name)=>name.age == 23);
// console.log(name);
// var user = users.find(person => person.lastName === "Achieng");
// console.log(user);
// var persons = users.filter(people => people.age <= 30);
// console.log(persons);


function minimumBribes(queue) {
    let chaotic = false
    var bribes = 0
    for (let i = 0; i < queue.length; i++) {
      if (queue[i] - (i+1) > 2) { chaotic = true }
        for (let j = queue[i] - 2; j < i; j++) {
        if (queue[j] > queue[i]) { bribes++ }
        }
      }
    if(chaotic === true){
    console.log("Too chaotic")
    } else {
    console.log(bribes)
    }
  }
  minimumBribes([2,1,5,4]);
  minimumBribes([2,5,1,3,4]);
  minimumBribes([1,2,5,3,4]);


