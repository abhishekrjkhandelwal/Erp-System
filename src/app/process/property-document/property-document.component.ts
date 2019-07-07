import { Component } from '@angular/core';
import { AngularFireStorage,AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs/Observable';
import { finalize } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-property-document',
  templateUrl: './property-document.component.html',
  styleUrls: ['./property-document.component.scss']
})
export class PropertyDocumentComponent {
  task: AngularFireUploadTask;
  fireupload:{};
  // Progress monitoring
  percentage: Observable<number>;

  snapshot: Observable<any>;

  // Download URL
  downloadURL: Observable<string>;

  // State for dropzone CSS toggling
  isHovering: boolean;
  profileUrl: Observable<string | null>;
  path: any;
  constructor(private storage: AngularFireStorage, private db: AngularFirestore) { }


  
  toggleHover(event: boolean) {
    this.isHovering = event;
  }


  startUpload(event: FileList) {
    
    const file = event.item(0)

    // Client-side validation example
    if (file.type.split('/')[0] !== 'image') { 
      console.error('unsupported file type :( ')
      return;
    }

    // The storage path
    const path = `test/${new Date().getTime()}_${file.name}`;
     
    // Totally optional metadata
    const customMetadata = { app: 'My AngularFire-powered PWA!' };

    // The main task
    this.task = this.storage.upload(path, file, { customMetadata })

    this.fireupload = {
      fileurl: this.downloadURL,
      filepath: this.path,
    }

    // Progress monitoring
    this.percentage = this.task.percentageChanges();
    this.snapshot   = this.task.snapshotChanges();
    const ref = this.storage.ref(path);
           // The file's download URL
    this.snapshot.pipe(finalize(() => this.downloadURL = this.storage.ref(path).getDownloadURL())).subscribe();

     

    this.profileUrl = ref.getDownloadURL();
     //this.db.collection('files').add(profileUrl : ref.getDownloadURL(),path});
     this.db.collection('files').add(this.fireupload);
    // console.log(this.storage.ref(path).subscribe());1
  }

  // Determines if the upload task is active
  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes
  }

}



