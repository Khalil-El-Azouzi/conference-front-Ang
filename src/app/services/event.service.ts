import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Conference} from '../models/conference.model';
import {Event} from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  public sharedConference: Conference ;
  public currentEvent: Event;
  public host = 'http://localhost:8080/conferences/';
  constructor(private httpClient: HttpClient) { }

  onGetServiceEvents() {
    return this.httpClient.get(this.host + this.sharedConference.idConference + '/events');
  }

  onGetEventByTitle(title: string) {
    return this.httpClient.get(this.host + this.sharedConference.idConference + '/events/search?title=' + title);
  }


  onAddEvent(data) {
    return this.httpClient.post(this.host + this.sharedConference.idConference + '/event', data);
  }

  onDeleteResource(id) {
    return this.httpClient.delete(this.host + this.sharedConference.idConference + '/events/' + id);
  }

  onEditResource(data) {
    return this.httpClient.put(this.host + this.sharedConference.idConference + '/events/' + data.idConfEvent , data);
  }

}
