import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public authService: AuthService,private router: Router) { }

  ngOnInit() {
  }
questionOnClick () {
  debugger
  this.router.navigate(['/question']);
}
notificationOnClick ()
{
  this.router.navigate(['/notification']);
}
}
