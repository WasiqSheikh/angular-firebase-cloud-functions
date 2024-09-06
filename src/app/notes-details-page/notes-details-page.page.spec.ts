import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotesDetailsPagePage } from './notes-details-page.page';

describe('NotesDetailsPagePage', () => {
  let component: NotesDetailsPagePage;
  let fixture: ComponentFixture<NotesDetailsPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesDetailsPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
