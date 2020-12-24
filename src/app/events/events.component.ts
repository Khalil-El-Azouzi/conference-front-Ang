import { Component, OnInit } from '@angular/core';
import {EventService} from '../services/event.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  public listEvents: any;
  public currentConference = this.catEvent.sharedConference;
  keyword: any;

  constructor(public catEvent: EventService, public router: Router) {
  }

  ngOnInit(): void {
    this.onGetEvents();
  }

  public onGetEvents(): void {
    this.catEvent.onGetServiceEvents()
      .subscribe(data => {
        this.listEvents = data;
      }, err => {
        console.log(err);
      });
  }

  onSearchEvent(f: any) {
    this.catEvent.onGetEventByTitle(f.keyword)
      .subscribe(data => {
        this.listEvents = data;
      }, err => {
        console.log(err);
      });
  }

  onDeleteEvent(f: any) {
    const conf = confirm('Voulez-vous supprimer cet événement ?');
    if (conf) {
      this.catEvent.onDeleteResource(f.idConfEvent)
        .subscribe(data => {
          this.onGetEvents();
        }, err => {
          console.log(err);
        });
    }
  }

  onEditEvent(f: any) {
    this.catEvent.currentEvent = f;
    this.router.navigateByUrl('/edit-event');
  }
}
