import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { UsersserviceProvider } from '../../providers/usersservice/usersservice';
/**
 * Generated class for the TicketsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-tickets',
	templateUrl: 'tickets.html',
	providers: [UsersserviceProvider]
})
export class TicketsPage {

	public userId: any; s
	public team: any;
	public seat: any;
	public price: number;
	public tickets: Array<any> = [];
	public ticketRef: firebase.database.Reference = firebase.database().ref('/tickets/');

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public usersserviceProvider: UsersserviceProvider) {
	}

	ionViewDidLoad() {
		// firebase.auth().onAuthStateChanged(user => {
		// 	if (user) {
		// 		this.userId = user.uid;
		// 		console.log(user.uid);
		// 		var myUserId = this.userId;
		// 		this.displayTickets(myUserId);
		// 	}
		// });
	}

	displayTickets(tickets) {

		//   var loader = this.loadingCtrl.create({
		//       content: "Please wait...",
		//     });
		// loader.present();



		// firebase.database().ref('/tickets/').once('value', (snapshot) => {
		// 	let tickets = [];
		// 	snapshot.forEach(snap => {
		// 		tickets.push(snap.val()); //or snap.val().name if you just want the name and not the whole object
		// 		return false;   //<=THIS IS WHAT WAS MISSING!!!!!
		// 	});
		// 	console.log(tickets)
		// });

		var that = this;
		this.usersserviceProvider.viewTickets(tickets).then(snapshot => {
			that.tickets = [];
			snapshot.forEach(snap => {
				that.tickets.push(snap.val());
				return false
			})
			console.log(that.tickets);
			// that.price = snapshot.val().price;
			// that.team = snapshot.val().team;
		})
	}

	// displayTickets(theUserId) {
	// 	var that = this;
	// 	this.usersserviceProvider.viewUser(theUserId).then(snapshot => {
	// 		that.team = snapshot.val().team;
	// 		that.seat = snapshot.val().team.seat;
	// 		that.price = snapshot.val().team.price;
	// 	})
	// }

	// function(snapshot) {
	//       snapshot.forEach(function(childSnapshot) {
	//       var childKey = childSnapshot.key;
	//       var childData = childSnapshot.val();
	//       // ...
	//     });
	//   }

}
