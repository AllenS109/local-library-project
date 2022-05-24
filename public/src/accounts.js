function findAccountById(accounts, id) {
  let object = accounts.find((account) => account.id === id); //finds the name with the matching id
  return object
  }
  
  function sortAccountsByLastName(accounts) {
   accounts.sort((accountA, accountB) => // Uses .sort to list last names alphabetically 
    accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1 //
   );
   return accounts;
  }
  
  // helper function for getTotalNumberOfBorrows()
  function individualBookBorrows(book, id) {
    let total = 0;
    for(let key in book.borrows) {
      if(book.borrows[key].id === id) {
         total++;
      }
    }
    return total;
  }
  
  function getTotalNumberOfBorrows(account, books) { //This function returns a number that shows how many times the account id shows up in books borrow array.
    return books.reduce((total, book) => {
      return total + individualBookBorrows(book, account.id);
    }, 0);
    
  }
  
  /*
  This function uses forEach to loop through the arrays.
  forEach checks to see if the ids match in the arrays.
  */
  function getBooksPossessedByAccount(account, books, authors) { 
   let results = []; 
   let borrowed = [];
    books.forEach((item) => { 
      const borrowed = item.borrows;
      const book = {
       id: item.id,
       title: item.title,
       genre: item.genre,
       authorId: item.authorId,
       author: {},
       borrows: {}
    };
      const { id, title, genre, authorId, author, borrows } = book;
    borrowed.forEach((borrow) => {
      if (borrow.id === account.id && borrow.returned === false) {
      results.push(book);
      borrowed.push(borrow);
      book.borrows = borrowed;
      book.author = authors.filter((auth) => auth.id === book.authorId)[0];
     }
    });
   });
   return results;
  }
  
  module.exports = {
    findAccountById,
    sortAccountsByLastName,
    getTotalNumberOfBorrows,
    getBooksPossessedByAccount,
  };