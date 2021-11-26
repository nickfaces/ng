import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {PostCompoment} from "./post/post.compoment";
import { Post2Component } from './post2/post2.component';
import {Post4Component} from "./post4/post4.component";
import {SsssService} from "./ssss.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    PostCompoment,
    Post2Component,
    Post4Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [SsssService],
  bootstrap: [AppComponent]
})
export class AppModule { }
