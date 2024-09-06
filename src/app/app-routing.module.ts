import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'add-new-note',
    loadChildren: () => import('./add-new-note/add-new-note.module').then( m => m.AddNewNotePageModule)
  },
  {
    path: 'notes-details-page',
    loadChildren: () => import('./notes-details-page/notes-details-page.module').then( m => m.NotesDetailsPagePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
