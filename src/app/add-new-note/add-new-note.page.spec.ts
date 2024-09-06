import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddNewNotePage } from './add-new-note.page';

describe('AddNewNotePage', () => {
  let component: AddNewNotePage;
  let fixture: ComponentFixture<AddNewNotePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewNotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
