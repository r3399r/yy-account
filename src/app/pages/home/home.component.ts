import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/model/Book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public router: Router;
  public books: Book[];

  constructor(router: Router, bookService: BookService) {
    this.router = router;
    this.books = bookService.getBooks();
  }

  ngOnInit(): void {}

  public async onClick(id: string): Promise<void> {
    this.router.navigate([`/accounting-book/${id}`]);
  }
}
