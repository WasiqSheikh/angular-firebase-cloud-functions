import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddNewNotePageRoutingModule } from './add-new-note-routing.module';

import { AddNewNotePage } from './add-new-note.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddNewNotePageRoutingModule
  ],
  declarations: [AddNewNotePage]
})
export class AddNewNotePageModule {}
