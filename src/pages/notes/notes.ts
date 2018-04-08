import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {PageAbstract} from "../page.abstract";

@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html'
})
export class NotesPage extends PageAbstract {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    super(navCtrl, navParams)
  }
}
