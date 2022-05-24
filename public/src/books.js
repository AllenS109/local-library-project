function findAuthorById(authors, id) { // this function uses .find to loop through the array to search for the matching id 
  let found = authors.find((author) => author.id === id);
  return found;
}

function findBookById(books, id) { // this fucntion uses .find to loop through the array to search for the matching book
  let found = books.find((book) => book.id ===id);
  return found;
}

/* 
The first array has books that have been returned which will equal true.
The second array checks to see if books haven't been returned which will equal false.
The .filter loops through the books array and then will make a new array. 
*/
function partitionBooksByBorrowedStatus(books) { 
 let booksReturned = books.filter((book) =>
  book.borrows.every((borrow) => borrow.returned === true)
                                 );
 let booksBorrowed = books.filter((book) =>
  book.borrows.some((borrow) => borrow.returned === false) //The function also uses .some to check if the condition is true.
                                 );
  let finalArray = [[...booksBorrowed], [...booksReturned]];
  return finalArray;
}

function getBorrowersForBook(book, accounts) {
  return book.borrows
    .map((borrow) => { //This function uses .map to loop through the borrows array of the book object
    let account = accounts.find((account) => account.id === borrow.id);//This function uses .find to loop through the accounts array  
    return { ...borrow, ...account };
  })
  .slice(0, 10); //Th slice function is used to return a limited amount of the array
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
