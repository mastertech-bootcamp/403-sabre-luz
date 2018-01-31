import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  sabre = 'assets/imgs/light-off.png';
  som = new Audio('assets/sabreon.wav');

  constructor(public navCtrl: NavController) {

  }

  ligarSabre(){
    this.som.play();
    
    if(this.sabre == 'assets/imgs/light-on.png'){
      this.sabre = 'assets/imgs/light-off.png';
    }else{
      this.sabre = 'assets/imgs/light-on.png';
    }
    
  }

}
