import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home'
import * as firebase from 'firebase';

/**
 * Generated class for the ItemCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item-create',
  templateUrl: 'item-create.html',
})
export class ItemCreatePage {

  public team: any;
  public seat: any;
  public price: any;
  public userId: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemCreatePage');

  }

  createNewItem(team, seat, price) {
    var loader = this.loadingCtrl.create({
          content: "Please wait...",
        });
    loader.present();

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        loader.dismiss();
        this.userId = user.uid;
        var myUserId = this.userId;
        console.log('this is user.uid' + user.uid);
        console.log('this is myUserId' + myUserId);
        // firebase.database().ref('tickets/').push({
        //   userId: this.userId
        // });
        // firebase.database().ref('tickets/' + myUserId + '/').push({
        //   team: this.team
        // });
        firebase.database().ref('tickets/' + myUserId + '/' + this.team + '/').push({
          seat: this.seat,
          price: this.price
        });
        this.navCtrl.setRoot(HomePage);

      };
      });
    }
 
  }
 
