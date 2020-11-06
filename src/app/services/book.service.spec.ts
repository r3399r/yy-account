import { TestBed } from '@angular/core/testing';
import { Book } from 'src/app/model/Book';
import { BookService } from 'src/app/services/book.service';

describe('BookService', () => {
  let bookService: BookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    bookService = TestBed.inject(BookService);
  });

  it('should be created', () => {
    expect(bookService).toBeTruthy();
  });

  it('getBook() should work', () => {
    const res: Book = bookService.getBook('a100-4f2f');
    expect(res.name).toEqual('yy account');
  });
});
