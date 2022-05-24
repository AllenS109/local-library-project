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

function getTotalNumberOfBorrows(account, books) { //This function returns a number that shows how many times the account id shows up in books borrow array.
 let taken = 0;
 for (let i = 0; i < books.length; i++) {
  for (let j = 0; j < books[i].borrows.length; j++) {
   if (account.id === books[i].borrows[j].id) {
    taken += 1;
   }
  }
 }
 return taken;
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
