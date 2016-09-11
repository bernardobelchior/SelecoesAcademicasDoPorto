import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/options/options.html'
})
export class OptionsPage {
  constructor(private navCtrl: NavController) {
  }

  openCAPButton() {
    window.open("http://www.cap.fap.pt/cap.html", "_system");
  }
}
