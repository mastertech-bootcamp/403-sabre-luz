import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Flashlight } from '@ionic-native/flashlight';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  sabre = 'assets/imgs/light-off.png';
  som = new Audio('assets/sabreon.wav');

  constructor(public navCtrl: NavController, public lanterna: Flashlight) {

  }

  ligarSabre(){
    this.som.play();
    
    if(this.sabre == 'assets/imgs/light-on.png'){
      this.lanterna.switchOff();
      this.sabre = 'assets/imgs/light-off.png';
    }else{
      this.lanterna.switchOn();
      this.sabre = 'assets/imgs/light-on.png';
    }
    
  }

}
