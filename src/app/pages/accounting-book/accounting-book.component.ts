import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-accounting-book',
  templateUrl: './accounting-book.component.html',
  styleUrls: ['./accounting-book.component.scss'],
})
export class AccountingBookComponent implements OnInit {
  public route: ActivatedRoute;
  public id: string;

  constructor(route: ActivatedRoute) {
    this.route = route;
  }

  public ngOnInit(): void {
    this.route.params.subscribe((params: Params): void => {
      this.id = params.id;
    });
  }
}
