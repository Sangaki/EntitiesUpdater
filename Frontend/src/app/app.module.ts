import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EntsComponent } from './ents/ents.component';
import {RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {NgpSortModule} from 'ngp-sort-pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TimeRemainingPipe } from './ents/time-remaining.pipe';

const appRoutes: Routes = [
  { path: 'ents', component: EntsComponent},
  { path: '',   redirectTo: '/ents', pathMatch: 'full' },
  { path: '**', redirectTo: '/ents', pathMatch: 'full'  }
];

@NgModule({
  declarations: [
    AppComponent,
    EntsComponent,
    TimeRemainingPipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgpSortModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
