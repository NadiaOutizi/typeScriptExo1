import {Book} from '../interfaces/book' 
import {User} from '../interfaces/user' 

export class Biblio {
    users : User[] = []
    books : Book[] = []


    addUser(user : User) : void {
        this.users.push(user)
    }

    addBook(book : Book) : void {
        this.books.push(book)
    }

    availableBooks () : void {
        for(let b of this.books.filter(b=> b.isAvailable)) {
            console.log(b.titre)
        } 
    }

    preter (user : User, book : Book) : void {
        if(!book.isAvailable && user.book != null) {
            console.log("tu ne peux pas prêter ce livre ")
        } else {
            const indexUser = this.users.findIndex(u => u.email == user.email)
            this.users[indexUser].book = book

            const indexBook = this.books.findIndex(b => b.titre == book.titre)
            this.books[indexBook].isAvailable = false
        }
    }

}