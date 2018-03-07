import { Component, OnInit } from '@angular/core';

import { NoteService } from '../note.service';

import { Note } from '../note-model';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore'; 
import { Observable } from 'rxjs/Observable';

interface Post { 
  title: string; 
  content: string; 
} 
interface PostId extends Post { 
  id: string; 
} 

@Component({
  selector: 'notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
})
export class NotesListComponent implements OnInit {

  notes: Observable<Note[]>;
  content: string;

  contentDoc: AngularFirestoreDocument<Post>; 
   content: Observable<Post>; 

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.notes = this.afs.collection('notes'); 
    // this.notes = this.noteService.getData()
    this.notes = this.noteService.getSnapshot();
    .map(actions => { 
      return actions.map(a => { 
        const data = a.payload.doc.data() as Post; 
        const id = a.payload.doc.id; 
        return { id, data }; 
      }) 
    }) 
  }

  createNote() {
    this.afs.collection('notes').add({'content': this.content}); 
  }
  getNote(noteId) { 
    this.noteDoc = this.afs.doc('notes/'+noteId); 
    this.content = this.contentDoc.valueChanges();
    console.log(this.content ); 
  } 
  deleteNote(postId) { 
    this.afs.doc('notes/'+postId).delete(); 
  } 
} 
{
  
}
