import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { AlertsModule } from 'angular-alert-module';
import { CanvasComponent } from './canvas/canvas/canvas.component';
import { WorkComponent } from './canvas/work/work.component';

@NgModule({
  declarations: [
    AppComponent,
    CanvasComponent,
    WorkComponent,
    
  ],
  imports: [
    //NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    HttpClientModule,
    AlertsModule.forRoot()
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
