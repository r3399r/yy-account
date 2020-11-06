import { Injectable } from '@angular/core';
import { Book } from 'src/app/model/Book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private books: Book[] = [
    {
      id: 'a100-4f2f',
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
    { id: 'ab24-asc5', name: 'other book' },
  ];

  constructor() {}

  public getBooks(): Book[] {
    return this.books;
  }

  public getBook(id: string): Book {
    return this.books.find((book) => {
      return book.id === id;
    });
  }
}
