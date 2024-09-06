import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AddNewNotePage } from '../add-new-note/add-new-note.page';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  email: string = '';
  password: string = '';
  age: number = 0;
  getAllNotes$: any;
  getAllNotesData$: any;
  constructor(private http: HttpClient, private modalCtrl: ModalController, private toastCtrl: ToastController, private route: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let allNotesTitles = this.getAllNotesTitle();
    allNotesTitles.then((res) => {
      console.log('allNotesTitles = ', res);
    })

  }


  async getAllNotesTitle() {
    this.getAllNotesData$ = await this.http.get(`${environment.firebase.functionUrl}/getTitlewithCount`);
    return (await lastValueFrom(this.getAllNotesData$));
  }

  async getAllData() {
    this.getAllNotes$ = await this.http.get(`${environment.firebase.functionUrl}/getDataFromCollection`);
    //console.log('data = ', await lastValueFrom(data$));
  }

  async onSubmit() {
    console.log('onSubmit is clicked');
    await this.http.post(`${environment.firebase.functionUrl}/addDataToCollection`, {
      email: this.email,
      password: this.password,
      age: this.age
    }, {responseType: 'text'}
  ).subscribe((res) => {
      console.log('response = ', res);
    });
  }

  async onDelete(note: any) {
    console.log('note = ', note);
    this.http.post(`${environment.firebase.functionUrl}/deleteDataEntryFromCollection`, { id: note.id }, { responseType: 'text' }).subscribe((res) => {
      console.log('response = ', res);
    });
  }

  async addNoteModal() {
    const modal = await this.modalCtrl.create({
      component: AddNewNotePage
    })

    modal.present();

    const {data, role} = await modal.onDidDismiss();

    if (role == 'confirm')
    {
      this.http.post(`${environment.firebase.functionUrl}/addNote`, { data }, { responseType: 'text' }).subscribe((res) => {
        console.log('response = ', res);
        this.openToast('success', 'Note added successfully');
      });
    }


  }

  async openToast(color: string, message: string ) {
    const toast = await this.toastCtrl.create({
      color: color,
      message: message,
      duration: 5000
    });
    toast.present();

  }

  NavigateToNotesDetails(title: any) {
    this.route.navigate([title], { relativeTo: this.activatedRoute });
  }

}
