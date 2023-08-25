const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 22 },
    { name: 'Charlie', age: 28 },
];

console.log(people.find((x) => x.age > 25))

const books = [
    { title: 'Book 1', pages: 250 },
    { title: 'Book 2', pages: 320 },
    { title: 'Book 3', pages: 280 },
];

console.log(books.find((x) => x.pages > 300))

const numbers = [15, 24, 37, 42, 51, 68, 73];

console.log(numbers.filter((x) => x % 2 === 0))

const words = ['apple', 'banana', 'grape', 'kiwi', 'orange', 'pear'];

console.log(words.filter((x) => x.length > 5))