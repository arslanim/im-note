import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {ReactiveFormsModule} from "@angular/forms";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {NotesPage} from "../pages/notes/notes";
import {TagsPage} from "../pages/tags/tags";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {NoteItemComponent} from "../components/note-item/note-item.component";
import {TagItemComponent} from "../components/tag/tag-item/tag-item.component";
import {TagBadgeComponent} from "../components/tag/tag-badge/tag-badge.component";
import {PageHeaderComponent} from "../components/page-header/page-header.component";
import {TagListComponent} from "../components/tag/tag-list/tag-list.component";
import {EditTagModal} from "../components/modals/edit-tag/_edit-tag.modal";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    NotesPage,
    TagsPage,
    NoteItemComponent,
    TagItemComponent,
    TagBadgeComponent,
    PageHeaderComponent,
    TagListComponent,
    EditTagModal
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    NotesPage,
    TagsPage,
    EditTagModal
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
