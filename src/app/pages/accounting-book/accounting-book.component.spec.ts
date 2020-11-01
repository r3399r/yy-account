import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { AccountingBookComponent } from 'src/app/pages/accounting-book/accounting-book.component';

describe('AccountingBookComponent', () => {
  let component: AccountingBookComponent;
  let fixture: ComponentFixture<AccountingBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccountingBookComponent],
      imports: [IonicModule.forRoot(), RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AccountingBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
