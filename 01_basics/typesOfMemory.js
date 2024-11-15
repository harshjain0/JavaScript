/*
Stack(Primitive)
Heap(Non-primitive)


*/
let name = "harsh.com"
let anotherName = name
anotherName = "hello"
// console.log(anotherName);
// console.log(name);

let user1= {
    email:"hello@gmail",
    upi:"user@okaxis"
}
// console.log(user1);

let user2=user1
user2.email = "harsh@gmail.com"

console.log(user1.email);
console.log(user2.email);

