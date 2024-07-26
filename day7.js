//DAY 7: ONJECTS

//ACTIVITY 1 :OBJECT CREATION AND ACCESS
 
  //TASK 1: Create an object representing a book with properties like title ,auther and year and log the object to console.

  const book ={
    title : "THE WAY OF THE WORLD" ,          //Without " " compilar considers KEY as string too but we can't declare it(if there exists KEY with space) without " ".
    auther : "William congreve" ,              
    year : "1700"                            
  }
  console.log("book =" ,book) ;
  /* OUTPUT : book = {
  title: 'THE WAY OF THE WORLD',
  auther: 'William congreve',
  year: '1700'
  } */

  //TASK 2 : Access and log title and auther properties of book .

   console.log(book.title) ;           //OUTPUT : THE WAY OF THE WORLD
   console.log(book.auther) ;          //OUTPUT : William congreve

//ACTIVITY 2 : OBJECT METHODS

  // TASK 3 : Add a method to book object that returns a string with the book's title and auther and log the result to calling this method.

   book.info = function(){
    return book.title + " " + book.auther ;
   }
   console.log(book.info()) ;
   //OUTPUT : THE WAY OF THE WORLD William congreve

  // TASK 4 : Add a method to the book object that takes a parameter (year) and update the book's year property and log the updated object.
    
   function updateYear (newYear){
      book.year = newYear ;
      return book.year ;
   }
   newYear= 1800 ;
   console.log(updateYear(newYear)) ;
   //OUTPUT : 1800

//ACTIVITY 3 :NESTED OBJECTS 

  // TASK 5 : Create a nested object representing a library with properties like name and book(an array of book objects) and log the library object to the console.

  const library = {
    name: " Library",
    books: [
      {
        title: "The way of the world",
        author: "William Congreve",
      },
      {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
      },
    ],
  };
  
  console.log(library);
  /*OUTPUT :
    {
    name: ' Library',
    books: [
      { title: 'The way of the world', author: 'William Congreve' },
      { title: 'To Kill a Mockingbird', author: 'Harper Lee' }
    ]
    }
   */

  // TASK 6 : Access the log name of the library and titles of all books of the library.

  console.log(library["name"]) ;           //OUTPUT : "library"

  library.books.forEach((book) => {      
    console.log(book.title);
  });                                    //OUTPUT :The way of the world
                                             //    To Kill a Mockingbird

//ACTIVITY 4 : THE this keyword 

  // TASK 7 : Add a method to the book object that uses this keyword to return a string with the book's title and year and log the result of calling this method.
 
   book.info2 = function(){
    return this.title + " "+ this.year ;
   }
   console.log(book.info2()) ;
   //OUTPUT : THE WAY OF THE WORLD 1800

//ACTIVITY 5 :OBJECT ITERATION

  //TASK 8 : use a for...in loop to iterate over the properties of book object and log each property and its value.
  
    for(let property in book)
      {
          console.log(`${property}:${book[property]}`)
      }
    /*
    title:THE WAY OF THE WORLD
    auther:William congreve
    year:1800
    info:function(){
        return book.title + " " + book.auther ;
      }
    info2:function(){
        return this.title + " "+ this.year ;
      } 
    */

  //TASK 9 : Use object.keys and object.values method to log all keys and values of the book object.

  console.log(Object.keys(book))   //[ 'title', 'auther', 'year', 'info', 'info2' ]
  console.log(Object.values(book))
  
  /* [
  'THE WAY OF THE WORLD',
  'William congreve',
  1800] */

//FEATURE REQUEST :  DONE IN TASKS 
