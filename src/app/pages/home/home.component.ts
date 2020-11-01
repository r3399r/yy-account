import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/model/Book';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public router: Router;
  public books: Book[];

  constructor(router: Router) {
    this.router = router;
    this.books = [
      { id: '123', name: 'yy' },
      { id: '113', name: 'other' },
    ];
  }

  ngOnInit() {}

  public async onClick(id: string) {
    this.router.navigate([`/accounting-book/${id}`]);
  }
}
