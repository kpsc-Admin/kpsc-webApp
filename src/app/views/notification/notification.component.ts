import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../services/service.service';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
  providers: [ServiceService]
})
export class NotificationComponent implements OnInit {

  constructor(private service:ServiceService) { }

  ngOnInit() {
    this.service.getData();
  }
  event(event) {
    debugger
  }

}
