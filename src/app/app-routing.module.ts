import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConferencesComponent} from './conferences/conferences.component';
import {EventsComponent} from './events/events.component';
import {NewConferenceComponent} from './new-conference/new-conference.component';
import {NewEventComponent} from './new-event/new-event.component';
import {EditConferenceComponent} from './edit-conference/edit-conference.component';
import {EditEventComponent} from './edit-event/edit-event.component';


const routes: Routes = [
  { path: 'conferences', component : ConferencesComponent },
   { path: 'events', component : EventsComponent },
  { path: 'conference', component : NewConferenceComponent },
  { path: 'event', component: NewEventComponent },
  { path: 'edit-conference', component : EditConferenceComponent },
  { path: 'edit-event', component: EditEventComponent},
  { path: '', redirectTo: '/conferences', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
