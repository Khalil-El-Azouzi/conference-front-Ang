import { Component, OnInit } from '@angular/core';
import {ConferenceService} from '../services/conference.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-conference',
  templateUrl: './edit-conference.component.html',
  styleUrls: ['./edit-conference.component.css']
})
export class EditConferenceComponent implements OnInit {

  public currentConf = this.conferenceService.sharedConference;

  constructor(public conferenceService: ConferenceService, public router: Router) { }

  ngOnInit(): void {
  }

  onEditConference(value: any) {
    this.conferenceService.onUpdateConference(value)
      .subscribe(data => {
        alert('Update conference succeed !');
        this.router.navigateByUrl('/conferences');
      }, error => {
        console.log(error);
      });
  }
}
