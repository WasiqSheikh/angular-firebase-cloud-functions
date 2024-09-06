import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { getFunctions, httpsCallableFromURL } from 'firebase/functions';
import { initializeApp } from 'firebase/app';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    const app = initializeApp(environment.firebase);
  }

}
