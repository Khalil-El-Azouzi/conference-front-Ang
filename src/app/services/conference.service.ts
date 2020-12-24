import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Conference} from '../models/conference.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConferenceService {

  public sharedConference: Conference ;

  public host = 'http://localhost:8080/conferences';
  public hostconf = 'http://localhost:8080/conference' ;

  constructor(private httpClient: HttpClient) { }

  onGetConferences(): Observable<Conference> {
    return this.httpClient.get<Conference>(this.host);
  }

  onGetCondByName(name: string): Observable<Conference> {
    return this.httpClient.get<Conference>(this.host + '/search?name=' + name);
  }

  onDeleteRessource(id) {
    return this.httpClient.delete(this.host + '/' + id);
  }

  onSaveConference(url, data): Observable<Conference> {
    return this.httpClient.post<Conference>(url, data);
  }

  onUpdateConference(data) {
    return this.httpClient.put(this.host + '/' + data.idConference , data);
  }
}
