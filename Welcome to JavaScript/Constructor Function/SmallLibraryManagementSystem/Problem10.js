class Book{
    constructor(title,author,year,genre){
        this.title=title
        this.author=author
        this.year=year
        this.genre=genre
    }

    getBookInfo(){
        return `${this.title} by ${this.author}, published in ${this.year}, Genre: ${this.genre}`;
    }

}

class Library{
    constructor(){
        this.books=[];
    }
    addBook(book){
        this.books.push(book);
    }
    filterBooks(year){
        return this.books.filter((item)=>{ return item.year===year })
    }
    BookTitles(){
        return this.books.map((a)=>{return a.title})
    }
    CalculateTotal(){
        return this.books.reduce((a,b)=>{return a+=1},0)
    }
    AveragePublicationYear(){
        return (this.books.reduce((a,b)=>{return a+b.year},0)/this.CalculateTotal())
    }
}

function createBook(title,author,year,genre){
    return new Book(title,author,year,genre);
}

const myLibrary = new Library();


myLibrary.addBook(createBook('The Great Gatsby', 'F. Scott Fitzgerald', 1925, 'Fiction'));
myLibrary.addBook(createBook('1984', 'George Orwell', 1949, 'Dystopian'));
myLibrary.addBook(createBook('The Catcher in the Rye', 'J.D. Salinger', 1951, 'Fiction'));
myLibrary.addBook(createBook('To Kill a Mockingbird', 'Harper Lee', 1960, 'Fiction'));


console.log(myLibrary.BookTitles()); 


console.log(myLibrary.filterBooks(1949));


console.log(myLibrary.CalculateTotal());


console.log(myLibrary.AveragePublicationYear()); 