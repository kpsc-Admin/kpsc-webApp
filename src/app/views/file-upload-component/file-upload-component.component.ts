
import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database'; 
import { FirebaseApp } from 'angularfire2';
@Component({
  selector: 'app-file-upload-component',
  templateUrl: './file-upload-component.component.html',
  styleUrls: ['./file-upload-component.component.css']
})
export class FileUploadComponentComponent implements OnInit {

  @ViewChild('fileInput') fileInput;
  constructor() { }

  ngOnInit() {
  }
  private upload() {
    debugger;
    const fileBrowser = this.fileInput.nativeElement;
    if (fileBrowser.files && fileBrowser.files[0]) {
      var file = fileBrowser.files[0];
      console.log(file);
      
    }
  }

}
