import { TestBed } from '@angular/core/testing';
import { Book } from 'src/app/model/Book';
import { BookService } from 'src/app/services/book.service';

describe('BookService', (): void => {
  let bookService: BookService;

  beforeEach((): void => {
    TestBed.configureTestingModule({});
    bookService = TestBed.inject(BookService);
  });

  it('should be created', (): void => {
    expect(bookService).toBeTruthy();
  });

  it('getBook() should work', (): void => {
    const res: Book = bookService.getBook('001');
    expect(res.name).toEqual('yy account');
  });
});
