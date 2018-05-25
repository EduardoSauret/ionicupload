import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';

/*
  Generated class for the UsersserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()



export class UsersserviceProvider {

  public data: any;
  public fireAuth: any;
  public userProfile: any;
  public userTickets: any;

  constructor(public http: Http) {

     this.fireAuth = firebase.auth();

  	 this.userProfile = firebase.database().ref('users');

     this.userTickets = firebase.database().ref('tickets');
  }

  viewUser(userId: any){
    var userRef = this.userProfile.child(userId);
    return userRef.once('value');
  }

  viewTickets(tickets: any) {
    var ticketRef = this.userTickets.child(tickets);
    console.log(ticketRef);
    return ticketRef.once('value');

  }


  loginUserService(email: string, password: string): any {
    return this.fireAuth.signInWithEmailAndPassword(email, password);
  }


  signupUserService(account: {}){
        return this.fireAuth.createUserWithEmailAndPassword(account['email'], account['password']).then((newUser) => {
          //sign in the user
          this.fireAuth.signInWithEmailAndPassword(account['email'], account['password']).then((authenticatedUser) => {
            //successful login, create user profile
          this.userProfile.child(authenticatedUser.uid).set(
            account
          );
          });
        });
  }



}
