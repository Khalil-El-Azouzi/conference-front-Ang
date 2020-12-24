import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConferencesComponent } from './conferences/conferences.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { EventsComponent } from './events/events.component';
import { NewConferenceComponent } from './new-conference/new-conference.component';
import { NewEventComponent } from './new-event/new-event.component';
import { EditConferenceComponent } from './edit-conference/edit-conference.component';
import { EditEventComponent } from './edit-event/edit-event.component';

@NgModule({
  declarations: [
    AppComponent,
    ConferencesComponent,
    EventsComponent,
    NewConferenceComponent,
    NewEventComponent,
    EditConferenceComponent,
    EditEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
