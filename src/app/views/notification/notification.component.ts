import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../services/service.service';
import {NgForm} from '@angular/forms'
import { Notification } from '../../model/notification'
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
  providers: [ServiceService]
})
export class NotificationComponent implements OnInit {

  constructor(private service:ServiceService) { }

  imageDownloadURL: string = '';
  ngOnInit() {
    this.service.getData();
  }
  event(event) {
    this.imageDownloadURL = event;
  }

  onSubmit(data: NgForm) {
  
    console.log(data.value);
    let notificationData = new Notification(data.value.title,data.value.content,data.value.url,this.imageDownloadURL);
     var currentDate = new Date().toLocaleDateString();
     var datePipe = new DatePipe("en-US");
     let path = "Notifications/"+ datePipe.transform(currentDate, 'MMM yyyy');
     this.service.insertDataIntoFireBase(notificationData,path);
    
    
  }

  getDatePathString()
  {
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();
    return (day + " " + month + " " + year );
  }
}
