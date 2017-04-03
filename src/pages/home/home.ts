import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pet: string = 'puppies';
  slides: number[] = [1,2,3,4,5];
  values: number[] = [];

  constructor(public navCtrl: NavController) {
    for(let i=0; i<50; i++){
      this.values.push(i);
    }
  }

}
