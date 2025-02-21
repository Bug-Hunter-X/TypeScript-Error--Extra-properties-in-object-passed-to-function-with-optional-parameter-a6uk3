function printName(person: { name: string; age?: number }) {
  console.log(person.name);
}

const person1 = { name: "John Doe", age: 30 };
printName(person1); // Works fine

const person2 = { name: "Jane Doe" };
printName(person2); // Works fine

const person3 = { name: "Peter Pan", age: 10, city: "Neverland" };

// Solution 1: Type Assertion
printName(person3 as { name: string; age?: number }); // Works fine

// Solution 2: Using an interface that allows extra properties
interface Person {
  name: string;
  age?: number;
  [key: string]: any; // Allows any other properties
}

function printName2(person: Person) {
  console.log(person.name);
}

printName2(person3); // Works fine