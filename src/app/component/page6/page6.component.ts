import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-page6',
  templateUrl: './page6.component.html',
  styleUrls: ['./page6.component.css'],
  providers: [BookService]
})
export class Page6Component implements OnInit {

  books!: Book[];

  @Input() title!: string;
  @Input() author!: string;
  @Input() genre!: string;
  @Input() pageCount!: any;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }
  
  getBooks() {
    this.books = this.bookService.getBooks();
  }
}
