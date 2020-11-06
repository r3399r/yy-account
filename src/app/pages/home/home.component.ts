import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/model/Book';
import { Photo } from 'src/app/model/Photo';
import { BookService } from 'src/app/services/book.service';
import { OrientationService } from 'src/app/services/orientation.service';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public router: Router;
  public books: Book[];

  public photoService: PhotoService;
  public photos: Photo[];

  // public screenOrientation: OrientationService;

  constructor(
    router: Router,
    bookService: BookService,
    photoService: PhotoService
    // screenOrientation: OrientationService
  ) {
    this.router = router;
    this.books = bookService.getBooks();
    this.photoService = photoService;
    // this.screenOrientation = screenOrientation;
    this.photos = photoService.getPhotos();
  }

  ngOnInit() {}

  public async onClick(id: string) {
    this.router.navigate([`/accounting-book/${id}`]);
    // this.books[1].name = this.screenOrientation.getOrientation();
  }

  public async addPhotoToGallery() {
    await this.photoService.addNewToGallery();
  }
}
