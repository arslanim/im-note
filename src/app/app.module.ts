import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {NotesPage} from "../pages/notes/notes";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {NoteItemComponent} from "../components/note-item/note-item.component";
import {TagItemComponent} from "../components/tag/tag-item/tag-item.component";
import {TagBadgeComponent} from "../components/tag/tag-badge/tag-badge.component";
import {PageHeaderComponent} from "../components/page-header/page-header.component";
import {TagListComponent} from "../components/tag/tag-list/tag-list.component";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    NotesPage,
    NoteItemComponent,
    TagItemComponent,
    TagBadgeComponent,
    PageHeaderComponent,
    TagListComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    NotesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
