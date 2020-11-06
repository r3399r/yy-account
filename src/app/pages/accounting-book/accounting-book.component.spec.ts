import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { of } from 'rxjs';
import { Book } from 'src/app/model/Book';
import { AccountingBookComponent } from 'src/app/pages/accounting-book/accounting-book.component';
import { BookService } from 'src/app/services/book.service';

describe('AccountingBookComponent', () => {
  let component: AccountingBookComponent;
  let fixture: ComponentFixture<AccountingBookComponent>;

  let bookServiceSpy: jasmine.SpyObj<BookService>;

  const dummyBooks: Book[] = [
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

  beforeEach(async(() => {
    // mock method
    bookServiceSpy = jasmine.createSpyObj('bookService', ['getBook']);
    bookServiceSpy.getBook.and.returnValue(dummyBooks[0]);

    // mock route
    const routeStub: any = {
      params: of({ id: dummyBooks[0].id }),
    };

    TestBed.configureTestingModule({
      declarations: [AccountingBookComponent],
      imports: [IonicModule.forRoot(), RouterTestingModule],
      providers: [
        { provide: ActivatedRoute, useValue: routeStub },
        { provide: BookService, useValue: bookServiceSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AccountingBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
