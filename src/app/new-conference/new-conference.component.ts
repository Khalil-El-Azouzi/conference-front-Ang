import { Component, OnInit } from '@angular/core';
import {ConferenceService} from '../services/conference.service';
import {AppRoutingModule} from '../app-routing.module';
import {Router} from '@angular/router';
import {Conference} from '../models/conference.model';

@Component({
  selector: 'app-new-conference',
  templateUrl: './new-conference.component.html',
  styleUrls: ['./new-conference.component.css']
})
export class NewConferenceComponent implements OnInit {

  public currentConference: Conference;

  constructor(public catalconferenceService: ConferenceService, public router: Router) { }

  ngOnInit(): void {
  }

  onAddConference(data: any) {
    this.catalconferenceService.onSaveConference(this.catalconferenceService.hostconf, data )
      .subscribe(res => {
          this.router.navigateByUrl('/conferences');
      }, error => {
        console.log(error);
      });
  }
}
