export class Book {
  title!: string;
  author!: string;
  genre!: string;
  pageCount!: number;

  constructor(title: string, author: string, genre: string, pageCount: number) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pageCount = pageCount;
  }
}