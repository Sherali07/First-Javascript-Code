let Library = {
  
    books : [],  // add , remove
addBooks : (id , title , author) => {  
          const newBoook = ({id , title , author})  
          Library.books= [...Library.books , newBoook ] },

 removeBooks : (title) => Library.books.filter(book => book.title !== title),
 searchByTitle : title =>  Library.books.filter(book => book.title.includes(title)),
 searchByid : id =>  Library.books.filter(book => book.id === id),
 searchByauthor : author =>  Library.books.filter(book =>book.author.includes(author)),
 getAllBooks: () => Library.books
}

Library.addBooks(1,"horror","kashif")   // call the function and send the value to the parent function
Library.addBooks(2,"adventure","ali")
Library.addBooks(3,"story","sher")

console.log(Library.books)
console.log(Library.removeBooks("story")  )

console.log(Library.searchByTitle("story"))
console.log(Library.searchByid(1))
console.log(Library.searchByauthor("sher"))
console.log(Library.getAllBooks())

