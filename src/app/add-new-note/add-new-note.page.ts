import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-new-note',
  templateUrl: './add-new-note.page.html',
  styleUrls: ['./add-new-note.page.scss'],
})
export class AddNewNotePage implements OnInit {

  name: string = '';
  title: string = '';
  description: string = '';
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    let data = {
      name: this.name,
      title: this.title,
      date: new Date(),
      description: this.description
    }
    return this.modalCtrl.dismiss(data, 'confirm');
  }
}
