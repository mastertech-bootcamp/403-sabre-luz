import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Flashlight } from '@ionic-native/flashlight';
import { Shake } from '@ionic-native/shake';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  sabre = 'assets/imgs/light-off.png';
  som = new Audio('assets/sabreon.wav');
  somMove = new Audio('assets/move.wav');

  constructor(public navCtrl: NavController, 
    public lanterna: Flashlight,
    public shake: Shake) {

      const watch = this.shake.startWatch(10).subscribe(() => {
        this.somMove.play();
      });
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
