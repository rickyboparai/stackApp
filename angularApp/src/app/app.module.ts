import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
 
import { AppComponent } from './app.component';
import { KingComponent } from './component/king/king.component';
import { DataService } from './service/data.service';

 
@NgModule({
  declarations: [
    AppComponent,
    KingComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
     
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
