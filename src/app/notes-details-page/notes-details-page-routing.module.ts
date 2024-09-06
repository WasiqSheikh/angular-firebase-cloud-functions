import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotesDetailsPagePage } from './notes-details-page.page';

const routes: Routes = [
  {
    path: '',
    component: NotesDetailsPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotesDetailsPagePageRoutingModule {}
