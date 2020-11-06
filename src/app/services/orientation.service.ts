import { Injectable } from '@angular/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Injectable({
  providedIn: 'root',
})
export class OrientationService {
  public screenOrientation: ScreenOrientation;

  constructor(screenOrientation: ScreenOrientation) {
    this.screenOrientation = screenOrientation;
  }

  public getOrientation(): string {
    return this.screenOrientation.type;
  }
}
