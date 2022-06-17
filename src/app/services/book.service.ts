import { Injectable } from '@angular/core';
import { Book } from '../book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  public getBooks() {
    let books: Book[];
    books = [
      new Book("The Hunger Games", "Suzanne Collins", "Science Fiction & Adventure", 374),
      new Book("Harry Potter and the Sorcerer's Stone", "J. K. Rowling", "Fantasy", 223),
      new Book("Watership Down", "Richard Adams", "Fantasy", 413)
    ]; return books;
  }
}
