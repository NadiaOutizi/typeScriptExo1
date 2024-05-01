import {Book} from './book'

export interface User {
    name : string
    email : string
    book? : Book
}