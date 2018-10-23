import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TrackspanicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trackspanic',
  templateUrl: 'trackspanic.html',
})
export class TrackspanicPage {
  cancionesPanic = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cancionesPanic = ['1. Silver Lining (2:49)', '2. Say Amen (3:09)', '3. Hey Look Ma, I Made It (2:50)',
    '4. High Hopes (3:11)','5. Roaring 20´s (3:07)', '6. Dancing´s Not A Crime (3:39)','7. One of the Drunks (3:19)',
    '8. The Overpass (2:58)',
    '9. King of the Clouds (2:41)','10. Old Fashioned (2:47)','11. Dying in LA (3:49)'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrackspanicPage');
  }

}
