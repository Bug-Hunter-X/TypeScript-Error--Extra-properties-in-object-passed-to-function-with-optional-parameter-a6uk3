function printName(person: { name: string; age?: number }) {
  console.log(person.name);
}

const person1 = { name: "John Doe", age: 30 };
printName(person1); // Works fine

const person2 = { name: "Jane Doe" };
printName(person2); // Works fine

const person3 = { name: "Peter Pan", age: 10, city: "Neverland" };
printName(person3); // This line will throw an error