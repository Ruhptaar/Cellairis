import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, ModalController, NavParams, AlertController } from 'ionic-angular';
import * as moment from 'moment';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  eventSource = [];
  viewTitle: string;
  selectedDay = new Date();

  calendar = {
    mode: 'month',
    currentDate: new Date()
  };


  constructor(public navCtrl: NavController, private modalCtrl: ModalController, private alertCtrl: AlertController) {

  }

  addEvent() {
      let modal = this.modalCtrl.create('EventModalPage', {selectedDay: this.selectedDay});
      modal.present();
      modal.onDidDismiss(data => {
        if (data) {
          let eventData = data;

          eventData.startTime = new Date(data.startTime);
          eventData.endTime = new Date(data.endTime);

          let events = this.eventSource;
          events.push(eventData);
          this.eventSource = [];
          setTimeout(() => {
            this.eventSource = events;
          });
        }
      });
    }

    onViewTitleChanged(title) {
      this.viewTitle = title;
    }

    goToLogin(): void {
    this.navCtrl.push(LoginPage);
    }

    onEventSelected(event) {
      let start = moment(event.startTime).format('LLLL');
      let end = moment(event.endTime).format('LLLL');

      let alert = this.alertCtrl.create({
        title: '' + event.title,
        subTitle: 'From: ' + start + '<br>To: ' + end,
        buttons: ['OK']
      })
      alert.present();
    }

    onTimeSelected(ev) {
      this.selectedDay = ev.selectedTime;
    }
  }
