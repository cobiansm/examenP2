import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TracksmjPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tracksmj',
  templateUrl: 'tracksmj.html',
})
export class TracksmjPage {
  cancionesMJ = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cancionesMJ = ['1. Bad (4:07)', '2. The Way You Make Me Feel (4:58)', '3. Speed Demon (4:02)',
    '4. Liberian Girl (3:53)', '5. Just Good Friends (4:07)','6. Another Part of Me (3:55)',
     '7. Man in the Mirror (5:19)','8. I Just Can´t Stop Loving You (4:12)','9. Dirty Diana (4:41)',
     '10. Smooth Criminal (4:18)','11. Leave Me Alone (4:40)'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TracksmjPage');
  }

}
