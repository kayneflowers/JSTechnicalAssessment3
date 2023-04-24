console.log("connected");

//Exercise 1
class Car {
    constructor(brand, model, year, color, mileage, price)
    {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.mileage = mileage;
        this.price = price;
    }
}

const car1 = new Car("Suzuki", "Swift", 2020, "Pure White Pearl", 10000, 25000);
const car2 = new Car("Toyota", "Vios", 2016, "Silver", 25000, 20000);
const car3 = new Car("Honda", "Accord", 2019, "Crystal Black Pearl", 20000, 18000);

const cars = [car1, car2, car3];

const averagePriceOfAllCars = (arrayOfCars) => {
    const total = arrayOfCars.reduce((acc, car) => acc + car.price, 0);
    const average = total / arrayOfCars.length;
    return average;
};

console.log(`The average of all prices is: ${averagePriceOfAllCars(cars)}`);

//Exercise 2
class Book {
    constructor(title, author, pages, year, genre)
    {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.year = year;
        this.genre = genre;
    }
}

const book1 = new Book("The Catcher in the Rye", "J.D. Salinger", 277, 1951, "Fiction");
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 281, 1960, "Fiction");
const book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, 1925, "Fiction");

const books = [book1, book2, book3];

function filterByGenre(booksArray, genre) {
    const filteredBooks = booksArray.filter(book => book.genre === genre);
    const bookTitles = filteredBooks.map(book => book.title);
    return bookTitles;
}

const fictionBooks = filterByGenre(books, "Fiction");
console.log(fictionBooks);

//Exercise 3.1
const cart = [
	{ name: "Shirt", price: 20, quantity: 2 },
	{ name: "Pants", price: 30, quantity: 5 },
	{ name: "Socks", price: 5, quantity: 7 },
	{ name: "Hat", price: 40, quantity: 8 },
	{ name: "Shoes", price: 70, quantity: 10 }
];

const sumInTheCart = (cart) => {
    let totalCost = 0;
    for (let item of cart)
    {
        totalCost += item.price * item.quantity;
    }
    return totalCost;
};

console.log(`Total cost: ${sumInTheCart(cart)}`);

//Exercise 3.2
const getItemsWithMoreThanFive = (cart) => {
	return cart.filter((item) => item.quantity > 5 && item.price >= 20);
}

const items= getItemsWithMoreThanFive(cart);
console.log(items);

//Exercise 3.3
function getItemsAbovePrice(cart, price) {
	return cart.filter(item => item.price > price);
}

console.log(getItemsAbovePrice(cart, 15));

//Exercise 4
const students = [
	{ name: "Kelly", grades: [78, 92, 85, 88] },
	{ name: "Jared", grades: [90, 86, 94, 89] },
	{ name: "Kelly", grades: [72, 84, 80, 76] },
	{ name: "Kelly", grades: [68, 72, 65, 70] }
]

const getAverageGrades = (students) => {
	return students.map((student) => {
		const sum = student.grades.reduce((acc, grade) => acc + grade, 0);
		const averageGrade = sum / student.grades.length;
		return {
			name: student.name,
			averageGrade: parseFloat(averageGrade.toFixed(2))
		};
	});
};

console.log(getAverageGrades(students));
