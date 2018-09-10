import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { KingComponent } from './component/king/king.component';
import { DataService } from './service/data.service';

const ROUTES = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full'
  },
  {
    path: 'posts',
    component: KingComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    KingComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
    
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
