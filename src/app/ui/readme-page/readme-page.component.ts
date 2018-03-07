import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore'; 
import { Observable } from 'rxjs/Observable'; 
import 'rxjs/add/operator/map'; 

interface Post { 
  title: string; 
  content: string; 
} 
interface PostId extends Post { 
  id: string; 
} 
@Component({
  selector: 'readme-page',
  templateUrl: './readme-page.component.html',
  styleUrls: ['./readme-page.component.scss'],
})
export class ReadmePageComponent {}
