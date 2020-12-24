import { Component, OnInit } from '@angular/core';
import {EventService} from '../services/event.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit {

  constructor(private eventService: EventService , private router: Router) { }

  ngOnInit(): void {
  }

  onAddEvent(data: any) {
    this.eventService.onAddEvent(data)
      .subscribe( res => {
        this.router.navigateByUrl('/events');
      }, error => {
        console.log(error);
      } );
  }
}
