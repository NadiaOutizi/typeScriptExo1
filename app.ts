import {Book} from './interfaces/book'
import {User} from './interfaces/user'
import {Biblio} from './entities/Biblio'


let biblio = new Biblio()

let user1 : User = {name : 'user1', email: 'email1@email.com'}
let user2 : User = {name : 'user2', email: 'email2@email.com'}

let book1 : Book = {titre : 'book 1', pageNbr:90, auteur : 'auteur', isAvailable:true }
let book2 : Book = {titre : 'book 2', pageNbr:90, auteur : 'auteur', isAvailable:true }

biblio.addBook(book1)
biblio.addBook(book2)

biblio.addUser(user1)
biblio.addUser(user2)

biblio.availableBooks()


biblio.preter(user1, book1)

console.log("after call preter()")

biblio.availableBooks()