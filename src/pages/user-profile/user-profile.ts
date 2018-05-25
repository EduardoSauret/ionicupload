import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsersserviceProvider } from '../../providers/usersservice/usersservice';
import * as firebase from 'firebase';
import { LoginPage } from '../login/login';

/**
 * Generated class for the UserProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
  providers: [UsersserviceProvider]
})
export class UserProfilePage {

	private userFirstName: any;
  private userLastName: any;
	private userCity: any;
  private currentUser: any;
  private userId: any;
  private userEmail: any;
  private myUserId: any;

  	constructor( 
	  	public navCtrl: NavController, 
	  	public navParams: NavParams, 
	  	private usersserviceProvider: UsersserviceProvider) {
	  	  //  var myUserId = firebase.auth().currentUser.uid;
	  		 // this.displayUser(myUserId);
  	}

  ionViewDidLoad(theUserId) {
    firebase.auth().onAuthStateChanged( user => {
      if (user) { 
        this.userId = user.uid;
        this.userEmail = user.email;
        console.log(user.uid);
        var myUserId = this.userId;
        this.displayUser(myUserId);
      }
    });
 

    console.log('ionViewDidLoad UserProfilePage');
  }


  displayUser(theUserId){
  	var that = this; 
  	this.usersserviceProvider.viewUser(theUserId).then(snapshot => {
  		that.userFirstName = snapshot.val().first_name;
      that.userLastName = snapshot.val().last_name;
  		that.userCity = snapshot.val().city;
  	})
  }

    logoutUser() {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        console.log('successfull signout')
        this.navCtrl.setRoot(LoginPage);
      }).catch(function(error) {
        // An error happened.
      });
    }


}
