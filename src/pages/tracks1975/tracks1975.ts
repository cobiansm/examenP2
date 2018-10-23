import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Tracks1975Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tracks1975',
  templateUrl: 'tracks1975.html',
})
export class Tracks1975Page {
  canciones1975 = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.canciones1975=['1. The 1975 (1:23)', '2. Love Me (3:42)', '3. UGH! (3:00)', '4. A Change Of Heart (4:43)',
   '5. She´s American (4:30)', '6. If I Believe You (6:20)', '7. Please Be Naked (4:25)', '8. Lostmyhead (5:19)', 
   '9. The Ballad of Me and My Brain (2:51)', '10. Somebody Else (5:47)', 
   '11. Loving Someone (4:20)', '12. I like It When You Sleep. for You Are So Beautiful Yet So Unaware of It (6:26)', '13. The Sound (4:08)'];  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tracks1975Page');
  }

}
