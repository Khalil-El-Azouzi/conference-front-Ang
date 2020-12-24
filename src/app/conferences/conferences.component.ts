import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConferenceService} from '../services/conference.service';
import {EventService} from '../services/event.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-conferences',
  templateUrl: './conferences.component.html',
  styleUrls: ['./conferences.component.css'],
})
export class ConferencesComponent implements OnInit {

  public listConferences;
  public keyword: string;

  constructor(public catConference: ConferenceService, public catEvent: EventService, private router: Router) {
  }

  public ngOnInit(): void {
    this.onAfficheConfs();
  }

  public onAfficheConfs(): void {
    this.catConference.onGetConferences()
      .subscribe(data => {
        this.listConferences = data;
      }, err => {
        console.log(err);
      }); // subscribe() est pour la synchronisation si il y on a tjrs des nouvelles conferences il fait l'attend
  }

  onGetEvents(f: any) {
    this.catEvent.sharedConference = f;
  }

  onChercher(f) {
    this.catConference.onGetCondByName(f.keyword)
      .subscribe(data => {
        this.listConferences = data;
      }, err => {
        console.log(err);
      });
  }


  onDeleteConf(f) {
    const conf = confirm('Voulez-vous supprimer cette conference ?');
    if (conf) {
      this.catConference.onDeleteRessource(f.idConference)
        .subscribe(data => {
          this.onAfficheConfs();
        }, err => {
          console.log(err);
        });
    }
  }

  onEditConf(f: any) {
    this.catConference.sharedConference = f;
    this.router.navigateByUrl('/edit-conference');
  }
}
