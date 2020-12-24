import { Component, OnInit } from '@angular/core';
import {EventService} from '../services/event.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  public currentEvent = this.eventService.currentEvent;

  constructor(public eventService: EventService, public router: Router) { }

  ngOnInit(): void {
  }


  onEditEvent(value: any) {
    this.eventService.onEditResource(value)
      .subscribe(data => {
        alert('Update event succeed !');
        this.router.navigateByUrl('/events');
      }, error => {
        console.log(error);
      });
  }
}
