import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { NoteService } from './note.service';

import { NotesListComponent } from './notes-list/notes-list.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';

var firebaseConfig = {
  apiKey: "AIzaSyBk0ZtPBFBNwaeK3L8KX2T3zAPP1TmGb04",
  authDomain: "oauth-93a9b.firebaseapp.com",
  databaseURL: "https://oauth-93a9b.firebaseio.com",
  projectId: "oauth-93a9b",
  storageBucket: "oauth-93a9b.appspot.com",
  messagingSenderId: "158385765734"
};

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    AngularFirestoreModule.enablePersistence(),
  ],
  declarations: [
    NotesListComponent,
    NoteDetailComponent,

  ],
  providers: [NoteService],
  bootstrap: [NotesListComponent]
})
export class NotesModule { }
