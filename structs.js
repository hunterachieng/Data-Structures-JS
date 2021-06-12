
//struct
/*This is a function constructor that all initializations are stored in an array.*/

function UserProfile(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age
};

var users = [
    new UserProfile("Hunter", "Achieng", 34),
    new UserProfile ("Wuanita", "Wangari", 23),
    new UserProfile("Stacy", "Anyango", 25)
]
console.log(users);
 var name = users.map((name)=>name.age == 23);
console.log(name);
var user = users.find(person => person.lastName === "Achieng");
console.log(user);
var persons = users.filter(people => people.age <= 30);
console.log(persons);




