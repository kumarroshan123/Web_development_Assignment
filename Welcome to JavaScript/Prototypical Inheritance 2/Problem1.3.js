function Library(){
    this.books=[];
}

Library.prototype.getBooks=function(){
    return this.books;
}

function PublicLibrary(){
    Library.call(this);
}

PublicLibrary.prototype.lendBook=function(books){
    console.log(`lending Books : ${books}`);
}

Object.setPrototypeOf(PublicLibrary.prototype,Library.prototype);

function UniversityLibrary(){
    Library.call(this);
}

Object.setPrototypeOf(UniversityLibrary.prototype,Library.prototype);
UniversityLibrary.prototype.addResearchPapers = function(paper) {
    console.log(`Adding research paper: ${paper}`);
};


const publicLibrary = new PublicLibrary();
const universityLibrary = new UniversityLibrary();

publicLibrary.lendBook("1984 by George Orwell"); 
universityLibrary.addResearchPapers("Quantum Physics Research"); 