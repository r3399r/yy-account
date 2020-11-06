import { Injectable } from '@angular/core';
import {
  CameraPhoto,
  CameraResultType,
  CameraSource,
  Capacitor,
  FilesystemDirectory,
  Plugins,
} from '@capacitor/core';
import { Photo } from 'src/app/model/Photo';

const { Camera, Filesystem, Storage } = Plugins;

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  public photos: Photo[] = [];

  constructor() {}

  public async addNewToGallery() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });
    this.photos.unshift({
      filepath: 'soon...',
      webviewPath: capturedPhoto.webPath,
    });
    console.log(this.photos);
  }

  public getPhotos(): Photo[] {
    return this.photos;
  }
}
