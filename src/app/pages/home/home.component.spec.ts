import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { HomeComponent } from 'src/app/pages/home/home.component';
// import { OrientationService } from 'src/app/services/orientation.service';
import { PhotoService } from 'src/app/services/photo.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let routerSpy: jasmine.Spy;

  // let orientationServiceSpy: jasmine.SpyObj<OrientationService>;
  let photoServiceSpy: jasmine.SpyObj<PhotoService>;

  beforeEach(async(() => {
    // mock method
    photoServiceSpy = jasmine.createSpyObj('photoService', ['getPhotos']);
    photoServiceSpy.getPhotos.and.returnValue([]);

    routerSpy = spyOn(Router.prototype, 'navigate');

    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [IonicModule.forRoot(), RouterTestingModule],
      providers: [
        // { provide: OrientationService, useValue: orientationServiceSpy },
        { provide: PhotoService, useValue: photoServiceSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onClick should work', async () => {
    const input = 'id';
    await component.onClick(input);

    expect(routerSpy).toHaveBeenCalledTimes(1);
    expect(routerSpy).toHaveBeenCalledWith([`/accounting-book/${input}`]);
  });
});
