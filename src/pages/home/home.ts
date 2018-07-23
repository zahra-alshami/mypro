import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Socket } from 'ng-socket-io';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  username = '';
  constructor(public navCtrl: NavController,
    private socket: Socket, private toastCtrl:ToastController) {
  }

  joinPresentaion() {
    var users=new Array('zahra','ghofran','suhel');
 var x=false;
users.forEach(element => {
  if (this.username !== '' && this.username===element) {
  x=true
  }
});
if (x=true){
this.navCtrl.push('PresentationRoomPage',
{
  username: this.username,
  socket: this.socket
});
x=false;
}
else
this.showToast('user undefined');



}
showToast(msg) {
  let toast = this.toastCtrl.create({
    message: msg,
    duration: 4000
  });
  toast.present();
}}

