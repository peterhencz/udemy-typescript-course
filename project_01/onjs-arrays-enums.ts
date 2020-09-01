// const person: {
//   name: string;
//   age: number;
// } = {
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Yolo",
//   age: 30,
//   hobbies: ["porn", "music"],
//   role: [2, "author"],
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = 100,
  AUTHOR = 200,
}

const person = {
  name: "Yolo",
  age: 30,
  hobbies: ["porn", "music"],
  role: Role.AUTHOR,
};

// person.role.push("admin");
// person.role[1] = 10;

// person.role = [0, "admin", "user"];

let favouriteActivities: any[];
favouriteActivities = [1, 3, 'sport'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()) !error!
}

if (person.role === Role.AUTHOR) {
  console.log("is author");
} else {
  console.log("lofaszt");
}
