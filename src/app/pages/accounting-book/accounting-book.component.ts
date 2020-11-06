import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Book } from 'src/app/model/Book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-accounting-book',
  templateUrl: './accounting-book.component.html',
  styleUrls: ['./accounting-book.component.scss'],
})
export class AccountingBookComponent implements OnInit {
  public route: ActivatedRoute;
  public bookService: BookService;
  public id: string;
  public book: Book;

  constructor(route: ActivatedRoute, bookService: BookService) {
    this.route = route;
    this.bookService = bookService;
  }

  public ngOnInit(): void {
    this.route.params.subscribe((params: Params): void => {
      this.id = params.id;
    });
    this.book = this.bookService.getBook(this.id);
  }
}
