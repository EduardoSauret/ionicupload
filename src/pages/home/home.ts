import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ItemCreatePage } from '../item-create/item-create';
import { TicketsPage } from '../tickets/tickets';
import * as firebase from 'firebase';
import { UsersserviceProvider } from '../../providers/usersservice/usersservice';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [UsersserviceProvider]
})
export class HomePage {

  private userFirstName: any;
  private userCity: any;

  constructor(public navCtrl: NavController) {
  } 



  getSignedUser(){
  	  firebase.auth().onAuthStateChanged(function(user) {
		  if (user) {
		    // User is signed in.
		    this.user = user;
		  } else {
		    // No user is signed in.
		  }
		});
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

   saleTickets(){
     this.navCtrl.setRoot(ItemCreatePage);
   }

   goToTickets(){
     this.navCtrl.setRoot(TicketsPage);
   }
}
