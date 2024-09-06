import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotesDetailsPagePageRoutingModule } from './notes-details-page-routing.module';

import { NotesDetailsPagePage } from './notes-details-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotesDetailsPagePageRoutingModule
  ],
  declarations: [NotesDetailsPagePage]
})
export class NotesDetailsPagePageModule {}
