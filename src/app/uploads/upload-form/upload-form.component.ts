import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { UploadService } from '../shared/upload.service';
import { Upload } from '../shared/upload';
import * as _ from "lodash";

@Component({
  selector: 'upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.css'],
  providers:[UploadService]
})
export class UploadFormComponent {

  selectedFiles: FileList;
  currentUpload: Upload;
  @Input() basePath: string;
  @Output() eventEmitter = new EventEmitter();

  constructor(private upSvc: UploadService) { }

  detectFiles(event) {
      this.selectedFiles = event.target.files;
  }

  uploadSingle() {
    debugger;
    let file = this.selectedFiles.item(0)
    this.currentUpload = new Upload(file);
    var t = this;
    this.upSvc.pushUpload(this.currentUpload,this.basePath,function (result) {
      debugger
      t.eventEmitter.emit(result);
    });
    debugger;
  }

  uploadMulti() {
    let files = this.selectedFiles
    let filesIndex = _.range(files.length)
    _.each(filesIndex, (idx) => {
      this.currentUpload = new Upload(files[idx]);
      // this.upSvc.pushUpload(this.currentUpload,this.basePath)
    }
    )
  }

}