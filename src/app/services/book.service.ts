import { Injectable } from '@angular/core';
import { Book } from 'src/app/model/Book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private books: Book[] = [
    {
      id: '001',
      name: 'yy account',
      transactions: [
        {
          date: new Date('2020-11-05T03:24:00'),
          cost: 100,
          memo: 'test',
        },
        {
          date: new Date('2020-11-06T05:24:10'),
          cost: 200,
          memo: 'test2',
        },
      ],
    },
  ];

  constructor() {}

  public getBooks(): Book[] {
    return this.books;
  }

  public getBook(id: string): Book {
    return this.books.find((book: Book): boolean => {
      return book.id === id;
    });
  }
}
